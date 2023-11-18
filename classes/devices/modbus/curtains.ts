import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import RelayPort, {
  RelayPortOut,
} from "@/classes/registers/modbus/relayRegisters";
import { DevicesType } from "@/classes/devices/deviceInfo";
import GeneralToggleDevice from "@/classes/devices/modbus/generalToggleDevice";

const createRegisters = (
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
) => {
  const openRegister = registersList[0];
  const closeRegister = registersList[1];

  const registersObject: {
    [key: string]: RelayPort;
  } = {
    open: new RelayPortOut(
      devicePublicId,
      openRegister.publicId,
      openRegister.name,
      openRegister.description,
      openRegister.number,
    ),
    close: new RelayPortOut(
      devicePublicId,
      closeRegister.publicId,
      closeRegister.name,
      closeRegister.description,
      closeRegister.number,
    ),
  };

  return registersObject;
};

class Curtains extends GeneralToggleDevice {
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
      false,
    );
  }

  // @ts-ignore
  #open = async () => {
    await this.registers.close.updateValue(false);
    await this.registers.open.updateValue(true);
  };
  // @ts-ignore
  #close = async () => {
    await this.registers.open.updateValue(false);
    await this.registers.close.updateValue(true);
  };
  // @ts-ignore
  #pause = async () => {
    await this.registers.open.updateValue(false);
    await this.registers.close.updateValue(false);
  };

  get open(): () => Promise<void> {
    return this.#open;
  }

  get close(): () => Promise<void> {
    return this.#close;
  }

  get pause(): () => Promise<void> {
    return this.#pause;
  }
}

export default Curtains;
