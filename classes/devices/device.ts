import Register, { objectType } from "@/classes/registers/register";
import DeviceInfo from "@/classes/devices/deviceInfo";
import { Protocols } from "@/classes/protocols";

export type RegistersListObjectType = { [key: string]: Register };

class Device extends DeviceInfo {
  private _registers: RegistersListObjectType;
  // @ts-ignore
  #protocol: Protocols;
  // @ts-ignore
  #hasDataFeedback: boolean;

  constructor(
    protocol: Protocols,
    publicId: string,
    name: string,
    description: string,
    type: number,
    registers: RegistersListObjectType,
    hasDataFeedback: boolean,
  ) {
    super(publicId, name, description, type);
    this.#protocol = protocol;
    this._registers = registers;
    this.#hasDataFeedback = hasDataFeedback;
  }

  get registers(): RegistersListObjectType {
    return this._registers;
  }

  get protocol(): Protocols {
    return this.#protocol;
  }

  get hasDataFeedback(): boolean {
    return this.#hasDataFeedback;
  }

  valueAssignment(values: string[] | objectType) {}

  // // @ts-ignore
  // #getData = (signal: AbortSignal) => {
  //   if (this.#protocol === Protocols.modbus) {
  //   } else if (this.#protocol === Protocols.zigbee) {
  //   } else {
  //   }
  // };
  //
  // get getData(): (signal: AbortSignal) => void {
  //   return this.#getData;
  // }
}

export default Device;
