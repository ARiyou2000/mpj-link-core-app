import Register from "@/classes/registers/register";
import DeviceInfo from "@/classes/devices/deviceInfo";
import { Protocols } from "@/classes/protocols";

export type RegistersListObjectType = { [key: string]: Register };

class Device extends DeviceInfo {
  // @ts-ignore
  private _registers: RegistersListObjectType;

  constructor(
    protocol: Protocols,
    publicId: string,
    name: string,
    description: string,
    type: number,
    registers: RegistersListObjectType,
  ) {
    super(protocol, publicId, name, description, type);
    this._registers = registers;
  }

  get registers(): RegistersListObjectType {
    return this._registers;
  }

  // makeRegisters(registersList: ServerSideRegisterType[]) {}
}

export default Device;
