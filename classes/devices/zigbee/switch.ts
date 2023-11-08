import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import { SwitchPole } from "@/classes/registers/zigbee/switchRegister";
import { DevicesType } from "@/classes/devices/deviceInfo";
import GeneralToggleDevice from "@/classes/devices/zigbee/generalToggleDevice";

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

class Switch extends GeneralToggleDevice {
  constructor(
    publicId: string,
    name: string,
    description: string,
    type: DevicesType,
    registersInfo: ServerSideRegisterInfoT[],
  ) {
    super(
      publicId,
      name,
      description,
      type,
      createRegisters(publicId, registersInfo),
      true,
    );
  }
}

export default Switch;
