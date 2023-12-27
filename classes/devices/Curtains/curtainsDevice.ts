import { CurtainsRegister } from "@/classes/devices/Curtains/curtainsRegister";
import { Protocols } from "@/classes/devices/protocols";
import { ServerSideRegisterInfoT } from "@/classes/devices/register";
import GeneralPowerDevice from "@/classes/devices/GeneralPower/generalPowerDevice";
import { DevicesType } from "@/classes/devices/deviceInfo";

type CurtainsRegistersListT = {
  open: CurtainsRegister;
  close: CurtainsRegister;
};

const createRegisters = (
  protocol: Protocols,
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
  hasDataFeedback: boolean,
) => {
  const openRegister = registersList[0];
  const closeRegister = registersList[1];

  const registersObject = <CurtainsRegistersListT>{
    open: new CurtainsRegister(
      protocol,
      devicePublicId,
      openRegister.publicId,
      openRegister.name,
      openRegister.description,
      openRegister.number,
      hasDataFeedback,
    ),
    close: new CurtainsRegister(
      protocol,
      devicePublicId,
      closeRegister.publicId,
      closeRegister.name,
      closeRegister.description,
      closeRegister.number,
      hasDataFeedback,
    ),
  };

  return registersObject;
};

class Curtains extends GeneralPowerDevice {
  constructor(
    publicId: string,
    name: string,
    description: string,
    type: DevicesType,
    registersInfo: ServerSideRegisterInfoT[],
  ) {
    super(publicId, name, description, type);
    this.registers = createRegisters(
      this.protocol,
      publicId,
      registersInfo,
      this.hasDataFeedback,
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
