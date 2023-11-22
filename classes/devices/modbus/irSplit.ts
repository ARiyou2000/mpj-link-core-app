import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import {
  IrSplitDecreaseFanSpeed,
  IrSplitDecreaseTemperature,
  IrSplitIncreaseFanSpeed,
  IrSplitIncreaseTemperature,
  IrSplitMode,
  IrSplitMovementDirection,
  IrSplitPower,
} from "@/classes/registers/modbus/irSplitRegisters";
import Device from "@/classes/devices/device";
import { Protocols } from "@/classes/protocols";
import { type } from "os";

type IrSplitRegistersListT = {
  power: IrSplitPower;
  increaseFanSpeed: IrSplitIncreaseFanSpeed;
  decreaseFanSpeed: IrSplitDecreaseFanSpeed;
  increaseTemperature: IrSplitIncreaseTemperature;
  decreaseTemperature: IrSplitDecreaseTemperature;
  mode: IrSplitMode;
  movementDirection: IrSplitMovementDirection;
};

const createRegisters = (
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
) => {
  const registersObject = <IrSplitRegistersListT>{};
  registersList.forEach((register) => {
    const params = [
      devicePublicId,
      register.publicId,
      register.name,
      register.description,
      register.number,
    ] as const;
    switch (Number(register.number)) {
      case 1:
        registersObject.power = new IrSplitPower(...params);
        break;
      case 2:
        registersObject.decreaseTemperature = new IrSplitDecreaseTemperature(
          ...params,
        );
        break;
      case 3:
        registersObject.increaseTemperature = new IrSplitIncreaseTemperature(
          ...params,
        );
        break;
      case 4:
        registersObject.increaseFanSpeed = new IrSplitIncreaseFanSpeed(
          ...params,
        );
        break;
      case 5:
        registersObject.decreaseFanSpeed = new IrSplitDecreaseFanSpeed(
          ...params,
        );
        break;
      case 6:
        registersObject.mode = new IrSplitMode(...params);
        break;
      case 7:
        registersObject.movementDirection = new IrSplitMovementDirection(
          ...params,
        );
        break;
      default:
        throw new Error("Wrong register number in thermostat registers list!");
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
