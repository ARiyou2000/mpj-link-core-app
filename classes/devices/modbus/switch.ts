import Device from "@/classes/devices/device";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import { SwitchPole } from "@/classes/registers/modbus/switchRegister";
import { Protocols } from "@/classes/protocols";
import { DevicesType } from "@/classes/devices/deviceInfo";

const createRegisters = (
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
) => {
  const registersObject: { [key: string]: SwitchPole } = {};
  registersList.forEach((register) => {
    const registerNumber = Number(register.number);
    const params = [
      devicePublicId,
      register.publicId,
      register.name,
      register.description,
      register.number,
    ] as const;

    registersObject[`pole${registerNumber.toString().padStart(2, "0")}`] =
      new SwitchPole(...params);
  });

  return registersObject;
};

class Switch extends Device {
  constructor(
    publicId: string,
    name: string,
    description: string,
    type: DevicesType,
    registersInfo: ServerSideRegisterInfoT[],
  ) {
    super(
      Protocols.modbus,
      publicId,
      name,
      description,
      type,
      createRegisters(publicId, registersInfo),
      true,
    );
  }

  valueAssignment(values: string[]) {
    Object.keys(this.registers).forEach((registerKey) => {
      const register = this.registers[registerKey];
      register.stringValue = values[Number(register.indicator) - 1];
    });
  }
}

export default Switch;
