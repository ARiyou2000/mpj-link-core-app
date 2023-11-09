import Device from "@/classes/devices/device";
import { Protocols } from "@/classes/protocols";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import { MusicplayerMainReg } from "@/classes/registers/modbus/musicplayerRegister";
import { type } from "os";

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

  // @ts-ignore
  #volumeUp = async () => {
    await this.registers.mainRegister.updateValue("up");
  };

  // @ts-ignore
  #volumeDown = async () => {
    await this.registers.mainRegister.updateValue("down");
  };

  // @ts-ignore
  #mute = async () => {
    await this.registers.mainRegister.updateValue("mute");
  };

  // @ts-ignore
  #powerOn = async () => {
    await this.registers.mainRegister.updateValue("on");
  };

  // @ts-ignore
  #powerOff = async () => {
    await this.registers.mainRegister.updateValue("off");
  };

  // @ts-ignore
  #previousTrack = async () => {
    await this.registers.mainRegister.updateValue("previous");
  };

  // @ts-ignore
  #nextTrack = async () => {
    await this.registers.mainRegister.updateValue("next");
  };

  // @ts-ignore
  #play = async () => {
    await this.registers.mainRegister.updateValue("play");
  };

  // @ts-ignore
  #pause = async () => {
    await this.registers.mainRegister.updateValue("pause");
  };

  // @ts-ignore
  #aux = async () => {
    await this.registers.mainRegister.updateValue("aux");
  };

  // @ts-ignore
  #bluetooth = async () => {
    await this.registers.mainRegister.updateValue("bluetooth");
  };

  // @ts-ignore
  #sd = async () => {
    await this.registers.mainRegister.updateValue("sd");
  };

  get volumeUp(): () => Promise<void> {
    return this.#volumeUp;
  }

  get volumeDown(): () => Promise<void> {
    return this.#volumeDown;
  }

  get mute(): () => Promise<void> {
    return this.#mute;
  }

  get powerOn(): () => Promise<void> {
    return this.#powerOn;
  }

  get powerOff(): () => Promise<void> {
    return this.#powerOff;
  }

  get previousTrack(): () => Promise<void> {
    return this.#previousTrack;
  }

  get nextTrack(): () => Promise<void> {
    return this.#nextTrack;
  }

  get play(): () => Promise<void> {
    return this.#play;
  }

  get pause(): () => Promise<void> {
    return this.#pause;
  }

  get aux(): () => Promise<void> {
    return this.#aux;
  }

  get bluetooth(): () => Promise<void> {
    return this.#bluetooth;
  }

  get sd(): () => Promise<void> {
    return this.#sd;
  }
}

export default MusicPlayer;
