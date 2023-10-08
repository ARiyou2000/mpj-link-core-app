import Register from "@/classes/registers/register";
import DeviceInfo from "@/classes/devices/deviceInfo";

class DeviceData extends DeviceInfo {
  private _registers: { [key: string]: Register } = {};

  constructor(
    publicId: string,
    name: string,
    description: string,
    type: number,
    registers: { [key: string]: Register },
  ) {
    super(publicId, name, description, type);
    this._registers = registers;
  }

  get registers(): { [key: string]: Register } {
    return this._registers;
  }

  set registers(value: Register[]) {
    // This method will be implemented by each device
  }
}

export default DeviceData;
