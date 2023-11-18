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
      Protocols.modbus,
      publicId,
      name,
      description,
      type,
      registers,
      hasDataFeedback,
    );
  }

  valueAssignment(values: string[]) {
    Object.keys(this.registers).forEach((registerKey) => {
      const register = this.registers[registerKey];
      register.stringValue = values[Number(register.indicator) - 1];
    });
  }
}

export default GeneralToggleDevice;
