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
        registersObject.increaseFanSpeed = new IrSplitIncreaseFanSpeed(
          ...params,
        );
        break;
      case 3:
        registersObject.decreaseFanSpeed = new IrSplitDecreaseFanSpeed(
          ...params,
        );
        break;
      case 4:
        registersObject.increaseTemperature = new IrSplitIncreaseTemperature(
          ...params,
        );
        break;
      case 5:
        registersObject.decreaseTemperature = new IrSplitDecreaseTemperature(
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
  #changePower = async () => {
    await this.registers.power.updateValue("trigger");
  };
  // @ts-ignore
  #increaseFanSpeed = async () => {
    await this.registers.increaseFanSpeed.updateValue("trigger");
  };
  // @ts-ignore
  #decreaseFanSpeed = async () => {
    await this.registers.decreaseFanSpeed.updateValue("trigger");
  };
  // @ts-ignore
  #increaseTemperature = async () => {
    await this.registers.increaseTemperature.updateValue("trigger");
  };
  // @ts-ignore
  #decreaseTemperature = async () => {
    await this.registers.decreaseTemperature.updateValue("trigger");
  };
  // @ts-ignore
  #changeMode = async () => {
    await this.registers.mode.updateValue("trigger");
  };
  // @ts-ignore
  #changeMovementDirection = async () => {
    await this.registers.movementDirection.updateValue("trigger");
  };

  get changePower(): () => Promise<void> {
    return this.#changePower;
  }

  get increaseFanSpeed(): () => Promise<void> {
    return this.#increaseFanSpeed;
  }

  get decreaseFanSpeed(): () => Promise<void> {
    return this.#decreaseFanSpeed;
  }

  get increaseTemperature(): () => Promise<void> {
    return this.#increaseTemperature;
  }

  get decreaseTemperature(): () => Promise<void> {
    return this.#decreaseTemperature;
  }

  get changeMode(): () => Promise<void> {
    return this.#changeMode;
  }

  get changeMovementDirection(): () => Promise<void> {
    return this.#changeMovementDirection;
  }
}

export default IrSplit;
