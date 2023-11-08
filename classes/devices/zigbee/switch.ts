import Device from "@/classes/devices/device";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import { SwitchPole } from "@/classes/registers/zigbee/switchRegister";
import { Protocols } from "@/classes/protocols";
import { DevicesType } from "@/classes/devices/deviceInfo";

const createRegisters = (
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
) => {
  const registersObject: { [key: string]: SwitchPole } = {};
  registersList.forEach((register) => {
    const params = [
      devicePublicId,
      register.publicId,
      register.name,
      register.description,
      register.number,
    ] as const;

    registersObject[register.number] = new SwitchPole(...params);
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
      Protocols.zigbee,
      publicId,
      name,
      description,
      type,
      createRegisters(publicId, registersInfo),
    );
  }

  valueAssignment(values: { [key: string]: "ON" | "OFF" }) {
    Object.keys(this.registers).forEach((registerKey) => {
      const register = this.registers[registerKey];
      register.stringValue = values[register.indicator];
    });
  }
}

export default Switch;
