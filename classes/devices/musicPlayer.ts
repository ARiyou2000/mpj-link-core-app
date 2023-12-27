import Device from "@/classes/devices/device";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import { MusicPlayerMainReg } from "@/classes/registers/musicplayerRegister";
import { Protocols } from "@/classes/protocols";

type MusicPlayerRegistersListT = { mainRegister: MusicPlayerMainReg };

const createRegisters = (
  protocol: Protocols,
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
  hasDataFeedback: boolean,
) => {
  const registersObject = <MusicPlayerRegistersListT>{};
  const register = registersList[0];
  const params = [
    protocol,
    devicePublicId,
    register.publicId,
    register.name,
    register.description,
    register.number,
    hasDataFeedback,
  ] as const;

  if (protocol === Protocols.modbus) {
    registersObject.mainRegister = new MusicPlayerMainReg(...params);
  } else if (protocol === Protocols.zigbee) {
    throw new Error("Zigbee protocol is not supported yet - Music Player");
  } else {
    throw new Error("Invalid protocol - Music Player");
  }

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
    super(publicId, name, description, type);
    this.registers = createRegisters(
      this.protocol,
      publicId,
      registersInfo,
      this.hasDataFeedback,
    );
  }

  // @ts-ignore
  #volumeUp = async () => {
    return await this.registers.mainRegister.updateValue("up");
  };

  // @ts-ignore
  #volumeDown = async () => {
    return await this.registers.mainRegister.updateValue("down");
  };

  // @ts-ignore
  #mute = async () => {
    return await this.registers.mainRegister.updateValue("mute");
  };

  // @ts-ignore
  #powerOn = async () => {
    return await this.registers.mainRegister.updateValue("on");
  };

  // @ts-ignore
  #powerOff = async () => {
    return await this.registers.mainRegister.updateValue("off");
  };

  // @ts-ignore
  #togglePower = async () => {
    if (Math.random() >= 0.5) {
      return await this.registers.mainRegister.updateValue("on");
    }
    return await this.registers.mainRegister.updateValue("off");
  };

  // @ts-ignore
  #previousTrack = async () => {
    return await this.registers.mainRegister.updateValue("previous");
  };

  // @ts-ignore
  #nextTrack = async () => {
    return await this.registers.mainRegister.updateValue("next");
  };

  // @ts-ignore
  #play = async () => {
    return await this.registers.mainRegister.updateValue("play");
  };

  // @ts-ignore
  #pause = async () => {
    return await this.registers.mainRegister.updateValue("pause");
  };

  // @ts-ignore
  #togglePlayPause = async () => {
    if (Math.random() >= 0.5) {
      return await this.registers.mainRegister.updateValue("play");
    }
    return await this.registers.mainRegister.updateValue("pause");
  };

  // @ts-ignore
  #aux = async () => {
    return await this.registers.mainRegister.updateValue("aux");
  };

  // @ts-ignore
  #bluetooth = async () => {
    return await this.registers.mainRegister.updateValue("bluetooth");
  };

  // @ts-ignore
  #sd = async () => {
    return await this.registers.mainRegister.updateValue("sd");
  };

  get volumeUp(): () => Promise<unknown> {
    return this.#volumeUp;
  }

  get volumeDown(): () => Promise<unknown> {
    return this.#volumeDown;
  }

  get mute(): () => Promise<unknown> {
    return this.#mute;
  }

  get powerOn(): () => Promise<unknown> {
    return this.#powerOn;
  }

  get powerOff(): () => Promise<unknown> {
    return this.#powerOff;
  }

  get togglePower(): () => Promise<unknown> {
    return this.#togglePower;
  }

  get previousTrack(): () => Promise<unknown> {
    return this.#previousTrack;
  }

  get nextTrack(): () => Promise<unknown> {
    return this.#nextTrack;
  }

  get play(): () => Promise<unknown> {
    return this.#play;
  }

  get pause(): () => Promise<unknown> {
    return this.#pause;
  }

  get togglePlayPause(): () => Promise<unknown> {
    return this.#togglePlayPause;
  }

  get aux(): () => Promise<unknown> {
    return this.#aux;
  }

  get bluetooth(): () => Promise<unknown> {
    return this.#bluetooth;
  }

  get sd(): () => Promise<unknown> {
    return this.#sd;
  }
}

export default MusicPlayer;
