import Device from "@/classes/devices/device";
import { Protocols } from "@/classes/protocols";

class GeneralToggleDevice extends Device {
  valueAssignment(values: string[] | { [key: string]: "ON" | "OFF" }) {
    Object.keys(this.registers).forEach((registerKey) => {
      const register = this.registers[registerKey];

      if (this.protocol === Protocols.modbus) {
        register.stringValue = values[Number(register.indicator) - 1];
      } else if (this.protocol === Protocols.zigbee) {
        register.stringValue = values[register.indicator];
      } else {
        throw new Error("Invalid protocol - general power value assignment");
      }
    });
  }
}

export default GeneralToggleDevice;
