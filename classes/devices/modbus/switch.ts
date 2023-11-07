import Device from "@/classes/devices/device";
import { ServerSideRegisterType } from "@/classes/registers/register";
import { SwitchPole } from "@/classes/registers/modbus/switchRegister";
import { Protocols } from "@/classes/protocols";

const createRegisters = (
  devicePublicId: string,
  registersList: ServerSideRegisterType[],
) => {
  const registersObject: { [key: string]: SwitchPole } = {};
  registersList.forEach((register) => {
    registersObject[
      `pole${Number(register.number).toString().padStart(2, "0")}`
    ] = new SwitchPole(
      devicePublicId,
      register.publicId,
      register.name,
      register.description,
      register.number,
      register.value,
    );
  });

  return registersObject;
};

class Switch extends Device {
  constructor(
    publicId: string,
    name: string,
    description: string,
    type: number,
    registersInfo: ServerSideRegisterType[],
  ) {
    super(
      Protocols.modbus,
      publicId,
      name,
      description,
      type,
      createRegisters(publicId, registersInfo),
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
