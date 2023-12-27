import {
  IrHoodDecreaseFanSpeedRegister,
  IrHoodIncreaseFanSpeedRegister,
  IrHoodLightRegister,
  IrHoodPowerRegister,
} from "@/classes/devices/IrHood/irHoodRegisters";
import { Protocols } from "@/classes/devices/protocols";
import { ServerSideRegisterInfoT } from "@/classes/devices/register";
import Device from "@/classes/devices/device";

type IrHoodRegistersListT = {
  power: IrHoodPowerRegister;
  light: IrHoodLightRegister;
  increaseFanSpeed: IrHoodIncreaseFanSpeedRegister;
  decreaseFanSpeed: IrHoodDecreaseFanSpeedRegister;
};

const createRegisters = (
  protocol: Protocols,
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
  hasDataFeedback: boolean,
) => {
  const registersObject = <IrHoodRegistersListT>{};
  registersList.forEach((register) => {
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
      switch (Number(register.number)) {
        case 1:
          registersObject.power = new IrHoodPowerRegister(...params);
          break;
        case 2:
          registersObject.decreaseFanSpeed = new IrHoodDecreaseFanSpeedRegister(
            ...params,
          );
          break;
        case 3:
          registersObject.increaseFanSpeed = new IrHoodIncreaseFanSpeedRegister(
            ...params,
          );
          break;
        case 4:
          registersObject.light = new IrHoodLightRegister(...params);
          break;
        default:
          throw new Error("Wrong register number in IR hood registers list!");
      }
    } else if (protocol === Protocols.zigbee) {
      throw new Error("Zigbee protocol is not supported yet - IR Hood");
    } else {
      throw new Error("Invalid protocol - IR Hood");
    }
  });

  return registersObject;
};

class IrHood extends Device {
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
  #changePower = async () => {
    return await this.registers.power.updateValue("trigger");
  };
  // @ts-ignore
  #changeLight = async () => {
    return await this.registers.light.updateValue("trigger");
  };
  // @ts-ignore
  #increaseFanSpeed = async () => {
    return await this.registers.increaseFanSpeed.updateValue("trigger");
  };
  // @ts-ignore
  #decreaseFanSpeed = async () => {
    return await this.registers.decreaseFanSpeed.updateValue("trigger");
  };

  get changePower(): () => Promise<unknown> {
    return this.#changePower;
  }

  get changeLight(): () => Promise<unknown> {
    return this.#changeLight;
  }

  get increaseFanSpeed(): () => Promise<unknown> {
    return this.#increaseFanSpeed;
  }

  get decreaseFanSpeed(): () => Promise<unknown> {
    return this.#decreaseFanSpeed;
  }
}

export default IrHood;
