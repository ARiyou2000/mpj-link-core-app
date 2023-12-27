import {
  IrSplitDecreaseFanSpeedRegister,
  IrSplitDecreaseTemperatureRegister,
  IrSplitIncreaseFanSpeedRegister,
  IrSplitIncreaseTemperatureRegister,
  IrSplitModeRegister,
  IrSplitMovementDirectionRegister,
  IrSplitPowerRegister,
} from "@/classes/devices/IrSplit/irSplitRegisters";
import { Protocols } from "@/classes/devices/protocols";
import { ServerSideRegisterInfoT } from "@/classes/devices/register";
import Device from "@/classes/devices/device";

type IrSplitRegistersListT = {
  power: IrSplitPowerRegister;
  increaseFanSpeed: IrSplitIncreaseFanSpeedRegister;
  decreaseFanSpeed: IrSplitDecreaseFanSpeedRegister;
  increaseTemperature: IrSplitIncreaseTemperatureRegister;
  decreaseTemperature: IrSplitDecreaseTemperatureRegister;
  mode: IrSplitModeRegister;
  movementDirection: IrSplitMovementDirectionRegister;
};

const createRegisters = (
  protocol: Protocols,
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
  hasDataFeedback: boolean,
) => {
  const registersObject = <IrSplitRegistersListT>{};
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
          registersObject.power = new IrSplitPowerRegister(...params);
          break;
        case 2:
          registersObject.decreaseTemperature =
            new IrSplitDecreaseTemperatureRegister(...params);
          break;
        case 3:
          registersObject.increaseTemperature =
            new IrSplitIncreaseTemperatureRegister(...params);
          break;
        case 4:
          registersObject.increaseFanSpeed =
            new IrSplitIncreaseFanSpeedRegister(...params);
          break;
        case 5:
          registersObject.decreaseFanSpeed =
            new IrSplitDecreaseFanSpeedRegister(...params);
          break;
        case 6:
          registersObject.mode = new IrSplitModeRegister(...params);
          break;
        case 7:
          registersObject.movementDirection =
            new IrSplitMovementDirectionRegister(...params);
          break;
        default:
          throw new Error(
            "Wrong register number in thermostat registers list!",
          );
      }
    } else if (protocol === Protocols.zigbee) {
      throw new Error("Zigbee protocol is not supported yet - IR split");
    } else {
      throw new Error("Invalid protocol - IR Split");
    }
  });

  return registersObject;
};

class IrSplit extends Device {
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
  #powerOn = async () => {
    return await this.registers.power.updateValue(true);
  };
  // @ts-ignore
  #powerOff = async () => {
    return await this.registers.power.updateValue(false);
  };
  // @ts-ignore
  #togglePower = async () => {
    if (Math.random() >= 0.5) {
      return await this.registers.mainRegister.updateValue(true);
    }
    return await this.registers.mainRegister.updateValue(false);
  };
  // @ts-ignore
  #increaseFanSpeed = async () => {
    return await this.registers.increaseFanSpeed.updateValue("trigger");
  };
  // @ts-ignore
  #decreaseFanSpeed = async () => {
    return await this.registers.decreaseFanSpeed.updateValue("trigger");
  };
  // @ts-ignore
  #increaseTemperature = async () => {
    return await this.registers.increaseTemperature.updateValue("trigger");
  };
  // @ts-ignore
  #decreaseTemperature = async () => {
    return await this.registers.decreaseTemperature.updateValue("trigger");
  };
  // @ts-ignore
  #changeMode = async () => {
    return await this.registers.mode.updateValue("trigger");
  };
  // @ts-ignore
  #changeMovementDirection = async () => {
    return await this.registers.movementDirection.updateValue("trigger");
  };

  get powerOn(): () => Promise<unknown> {
    return this.#powerOn;
  }

  get powerOff(): () => Promise<unknown> {
    return this.#powerOff;
  }

  get togglePower(): () => Promise<unknown> {
    return this.#togglePower;
  }

  get increaseFanSpeed(): () => Promise<unknown> {
    return this.#increaseFanSpeed;
  }

  get decreaseFanSpeed(): () => Promise<unknown> {
    return this.#decreaseFanSpeed;
  }

  get increaseTemperature(): () => Promise<unknown> {
    return this.#increaseTemperature;
  }

  get decreaseTemperature(): () => Promise<unknown> {
    return this.#decreaseTemperature;
  }

  get changeMode(): () => Promise<unknown> {
    return this.#changeMode;
  }

  get changeMovementDirection(): () => Promise<unknown> {
    return this.#changeMovementDirection;
  }
}

export default IrSplit;
