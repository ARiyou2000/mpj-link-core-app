import Device from "@/classes/devices/device";
import { Protocols } from "@/classes/protocols";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import {
  DuctSplitCurrentTemperature,
  DuctSplitFanSpeed,
  DuctSplitMode,
  DuctSplitPower,
  DuctSplitTargetPointTemperature,
} from "@/classes/registers/modbus/ductSplitRegisters";
import { type } from "os";

type DuctSplitRegistersListType = {
  power: DuctSplitPower;
  mode: DuctSplitMode;
  fanSpeed: DuctSplitFanSpeed;
  targetPointTemperature: DuctSplitTargetPointTemperature;
  currentTemperature: DuctSplitCurrentTemperature;
};

const createRegisters = (
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
) => {
  const registersObject = <DuctSplitRegistersListType>{};
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
        registersObject.mode = new DuctSplitMode(...params);
        break;
      case 2:
        registersObject.fanSpeed = new DuctSplitFanSpeed(...params);
        break;
      case 3:
        registersObject.targetPointTemperature =
          new DuctSplitTargetPointTemperature(...params);
        break;
      case 4:
        registersObject.currentTemperature = new DuctSplitCurrentTemperature(
          ...params,
        );
        break;
      case 5:
        registersObject.power = new DuctSplitPower(...params);
        break;
      default:
        throw new Error("Wrong register number in duct split registers list!");
    }
  });

  return registersObject;
};

class DuctSplit extends Device {
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
      true,
    );
  }

  valueAssignment(values: string[]) {
    this.registers.mode.stringValue = values[0];
    this.registers.fanSpeed.stringValue = values[1];
    this.registers.targetPointTemperature.stringValue = values[2];
    this.registers.currentTemperature.stringValue = values[3];
    this.registers.power.stringValue = values[4];
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
    if (this.registers.power.value) {
      return await this.#powerOff();
    }
    return await this.#powerOn();
  };
  // @ts-ignore
  #plasmaMode = async () => {
    return await this.registers.mode.updateValue("plasma");
  };
  // @ts-ignore
  #coolingMode = async () => {
    return await this.registers.mode.updateValue("cold");
  };
  // @ts-ignore
  #heatingMode = async () => {
    return await this.registers.mode.updateValue("hot");
  };
  // @ts-ignore
  #autoMode = async () => {
    return await this.registers.mode.updateValue("auto");
  };
  // @ts-ignore
  #slowFanSpeed = async () => {
    return await this.registers.fanSpeed.updateValue("slow");
  };
  // @ts-ignore
  #mediumFanSpeed = async () => {
    return await this.registers.fanSpeed.updateValue("medium");
  };
  // @ts-ignore
  #fastFanSpeed = async () => {
    return await this.registers.fanSpeed.updateValue("fast");
  };
  // @ts-ignore
  #autoFanSpeed = async () => {
    return await this.registers.fanSpeed.updateValue("auto");
  };
  // @ts-ignore
  #setTargetTemp = async (value: string) => {
    return await this.registers.targetPointTemperature.updateValue(value);
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

  get plasmaMode(): () => Promise<unknown> {
    return this.#plasmaMode;
  }

  get coolingMode(): () => Promise<unknown> {
    return this.#coolingMode;
  }

  get heatingMode(): () => Promise<unknown> {
    return this.#heatingMode;
  }

  get autoMode(): () => Promise<unknown> {
    return this.#autoMode;
  }

  get slowFanSpeed(): () => Promise<unknown> {
    return this.#slowFanSpeed;
  }

  get mediumFanSpeed(): () => Promise<unknown> {
    return this.#mediumFanSpeed;
  }

  get fastFanSpeed(): () => Promise<unknown> {
    return this.#fastFanSpeed;
  }

  get autoFanSpeed(): () => Promise<unknown> {
    return this.#autoFanSpeed;
  }

  get setTargetTemp(): (value: string) => Promise<unknown> {
    return this.#setTargetTemp;
  }
}

export default DuctSplit;
