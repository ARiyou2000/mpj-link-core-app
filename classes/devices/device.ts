import Register, { objectType } from "@/classes/registers/register";
import DeviceInfo from "@/classes/devices/deviceInfo";
import { Protocols } from "@/classes/protocols";
import { type } from "os";

export type RegistersListObjectType = { [key: string]: Register };

class Device extends DeviceInfo {
  // @ts-ignore
  private _registers: RegistersListObjectType;
  // @ts-ignore
  #protocol: Protocols;

  constructor(
    protocol: Protocols,
    publicId: string,
    name: string,
    description: string,
    type: number,
    registers: RegistersListObjectType,
  ) {
    super(publicId, name, description, type);
    this.#protocol = protocol;
    this._registers = registers;
  }

  get registers(): RegistersListObjectType {
    return this._registers;
  }

  get protocol(): Protocols {
    return this.#protocol;
  }

  valueAssignment(values: string[] | objectType) {}
}

export default Device;
