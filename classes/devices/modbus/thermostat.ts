import Device from "@/classes/devices/device";
import { Protocols } from "@/classes/protocols";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import {
  ThermostatCurrentTemperature,
  ThermostatFanSpeed,
  ThermostatPower,
  ThermostatSeasonMode,
  ThermostatTargetPointTemperature,
} from "@/classes/registers/modbus/thermostatRegisters";
import { type } from "os";

type ThermostatRegistersListType = {
  power: ThermostatPower;
  seasonMode: ThermostatSeasonMode;
  fanSpeed: ThermostatFanSpeed;
  targetPointTemperature: ThermostatTargetPointTemperature;
  currentTemperature: ThermostatCurrentTemperature;
};

const createRegisters = (
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
) => {
  const registersObject = <ThermostatRegistersListType>{};
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
        registersObject.seasonMode = new ThermostatSeasonMode(...params);
        break;
      case 2:
        registersObject.fanSpeed = new ThermostatFanSpeed(...params);
        break;
      case 4:
        registersObject.targetPointTemperature =
          new ThermostatTargetPointTemperature(...params);
        break;
      case 5:
        registersObject.currentTemperature = new ThermostatCurrentTemperature(
          ...params,
        );
        break;
      case 7:
        registersObject.power = new ThermostatPower(...params);
        break;
      default:
        throw new Error("Wrong register number in thermostat registers list!");
    }
  });

  return registersObject;
};

class Thermostat extends Device {
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
    this.registers.seasonMode.stringValue = values[0];
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
  #coolingMode = async () => {
    return await this.registers.seasonMode.updateValue("cold");
  };
  // @ts-ignore
  #heatingMode = async () => {
    return await this.registers.seasonMode.updateValue("hot");
  };
  // @ts-ignore
  #toggleSeasonMode = async () => {
    if (this.registers.seasonMode.value === "cold") {
      return await this.#heatingMode();
    }
    return await this.#coolingMode();
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

  get coolingMode(): () => Promise<unknown> {
    return this.#coolingMode;
  }

  get heatingMode(): () => Promise<unknown> {
    return this.#heatingMode;
  }

  get toggleSeasonMode(): () => Promise<unknown> {
    return this.#toggleSeasonMode;
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

export default Thermostat;
