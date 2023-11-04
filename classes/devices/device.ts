import Register from "@/classes/registers/register";
import DeviceInfo from "@/classes/devices/deviceInfo";

type RegistersListObjectType = { [key: string]: Register };

class Device extends DeviceInfo {
  // @ts-ignore
  #registers: RegistersListObjectType;

  constructor(
    publicId: string,
    name: string,
    description: string,
    type: number,
    registers: RegistersListObjectType,
  ) {
    super(publicId, name, description, type);
    this.#registers = registers;
  }

  get registers(): RegistersListObjectType {
    return this.#registers;
  }

  set registers(value: RegistersListObjectType) {
    this.#registers = value;
  }
}

export default Device;
