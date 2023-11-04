import Register from "@/classes/registers/register";
import DeviceInfo from "@/classes/devices/deviceInfo";

type RegistersListObjectType = { [key: string]: Register };

class Device extends DeviceInfo {
  // @ts-ignore
  private _registers: RegistersListObjectType;

  constructor(
    publicId: string,
    name: string,
    description: string,
    type: number,
    registers: RegistersListObjectType,
  ) {
    super(publicId, name, description, type);
    this._registers = registers;
  }

  get registers(): RegistersListObjectType {
    return this._registers;
  }

  set registers(value: RegistersListObjectType) {
    this._registers = value;
  }
}

export default Device;
