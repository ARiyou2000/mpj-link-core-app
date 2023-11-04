import Device from "@/classes/devices/device";
import { Protocols } from "@/classes/protocols";
import { ServerSideRegisterType } from "@/classes/registers/register";
import {
  ThermostatCurrentTemperature,
  ThermostatFanSpeed,
  ThermostatPower,
  ThermostatSeasonMode,
  ThermostatTargetPointTemperature,
} from "@/classes/registers/modbus/thermostatRegisters";

type ThermostatRegistersListType = {
  power: ThermostatPower;
  seasonMode: ThermostatSeasonMode;
  fanSpeed: ThermostatFanSpeed;
  targetPointTemperature: ThermostatTargetPointTemperature;
  currentTemperature: ThermostatCurrentTemperature;
};

const createRegisters = (
  devicePublicId: string,
  registersList: ServerSideRegisterType[],
) => {
  const registersObject = <ThermostatRegistersListType>{};
  registersList.forEach((register) => {
    const params = [
      devicePublicId,
      register.publicId,
      register.name,
      register.description,
      register.number,
      register.value,
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
    registersInfo: ServerSideRegisterType[],
  ) {
    super(
      Protocols.modbus,
      publicId,
      name,
      description,
      type,
      createRegisters(publicId, registersInfo),
    );
  }

  valueAssingment(valueArray: string[]) {
    this.registers.power.stringValue = valueArray[0];
  }
}
