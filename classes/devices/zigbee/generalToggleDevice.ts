import Device, { RegistersListObjectType } from "@/classes/devices/device";
import { Protocols } from "@/classes/protocols";

class GeneralToggleDevice extends Device {
  constructor(
    publicId: string,
    name: string,
    description: string,
    type: number,
    registers: RegistersListObjectType,
    hasDataFeedback: boolean,
  ) {
    super(
      Protocols.zigbee,
      publicId,
      name,
      description,
      type,
      registers,
      hasDataFeedback,
    );
  }

  valueAssignment(values: { [key: string]: "ON" | "OFF" }) {
    Object.keys(this.registers).forEach((registerKey) => {
      const register = this.registers[registerKey];
      register.stringValue = values[register.indicator];
    });
  }
}

export default GeneralToggleDevice;
