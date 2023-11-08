import Device from "@/classes/devices/device";
import { Protocols } from "@/classes/protocols";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import { MusicplayerMainReg } from "@/classes/registers/modbus/musicplayerRegister";

const createRegisters = (
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
) => {
  const register = registersList[0];
  const registersObject = {
    mainRegister: new MusicplayerMainReg(
      devicePublicId,
      register.publicId,
      register.name,
      register.description,
      register.number,
    ),
  };

  return registersObject;
};

class MusicPlayer extends Device {
  constructor(
    publicId: string,
    name: string,
    description: string,
    type: number,
    registersInfo: ServerSideRegisterInfoT[],
  ) {
    super(
      Protocols.modbus,
      publicId,
      name,
      description,
      type,
      createRegisters(publicId, registersInfo),
      false,
    );
  }
}

export default MusicPlayer;
