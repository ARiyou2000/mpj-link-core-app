import GeneralPower from "@/classes/registers/generalPower";
import Register, { ObjectType } from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";
import getValueMap from "@/classes/registers/getValueMap";

// ---------- Power ----------
export class ThermostatPower extends GeneralPower {}

// ---------- Value registers ----------
class ThermostatRegister extends Register {}

// ---------- Fan Speed ----------
const fanSpeedValueMap = {
  "01": "slow",
  "02": "medium",
  "03": "fast",
  "04": "auto",
};
const modbusFanSpeedValueMap = {
  "01": "slow",
  "02": "medium",
  "03": "fast",
  "04": "auto",
};
const zigbeeFanSpeedValueMap = {};

export class ThermostatFanSpeed extends ThermostatRegister {
  constructor(
    protocol: Protocols,
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    hasFeedback: boolean,
  ) {
    super(
      protocol,
      devicePublicId,
      publicId,
      name,
      description,
      indicator,
      getValueMap(
        protocol,
        modbusFanSpeedValueMap,
        zigbeeFanSpeedValueMap,
        "Thermostat fan speed",
      ),
      hasFeedback,
    );
  }
}

// ---------- Season Mode ----------
const modbusSeasonModeValueMap = {
  "02": "cold",
  "03": "hot",
};
const zigbeeSeasonModeValueMap = {};

export class ThermostatSeasonMode extends ThermostatRegister {
  constructor(
    protocol: Protocols,
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    hasFeedback: boolean,
  ) {
    super(
      protocol,
      devicePublicId,
      publicId,
      name,
      description,
      indicator,
      getValueMap(
        protocol,
        modbusSeasonModeValueMap,
        zigbeeSeasonModeValueMap,
        "Thermostat Season Mode",
      ),
      hasFeedback,
    );
  }
}

//  ---------- Target Point Temperature ----------
const modbusTargetPointTemperatureMap = (() => {
  const startTemp = 15;
  const endTemp = 35 + 1;
  const temp: ObjectType = {};
  for (let i = startTemp; i < endTemp; i++) {
    const keyVal = String(i).padStart(2, "0");
    temp[keyVal] = keyVal;
  }
  return temp;
})();
const zigbeeTargetPointTemperatureMap = {};

export class ThermostatTargetPointTemperature extends ThermostatRegister {
  constructor(
    protocol: Protocols,
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    hasFeedback: boolean,
  ) {
    super(
      protocol,
      devicePublicId,
      publicId,
      name,
      description,
      indicator,
      getValueMap(
        protocol,
        modbusTargetPointTemperatureMap,
        zigbeeTargetPointTemperatureMap,
        "Duct split - Target Point",
      ),
      hasFeedback,
    );
  }
}

// ---------- Current Temperature ----------
const modusCurrentTemperatureMap = (() => {
  const startTemp = 1;
  const endTemp = 99 + 1;
  const temp: ObjectType = {};
  for (let i = startTemp; i < endTemp; i++) {
    const keyVal = String(i).padStart(2, "0");
    temp[keyVal] = keyVal;
  }
  return temp;
})();
const zigbeeCurrentPointTemperatureMap = {};

export class ThermostatCurrentTemperature extends ThermostatRegister {
  constructor(
    protocol: Protocols,
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    hasFeedback: boolean,
  ) {
    super(
      protocol,
      devicePublicId,
      publicId,
      name,
      description,
      indicator,
      getValueMap(
        protocol,
        modusCurrentTemperatureMap,
        zigbeeCurrentPointTemperatureMap,
        "Duct split target point",
      ),
      hasFeedback,
    );
  }

  get updateValue() {
    throw new Error("Thermostat current temperature can be read only!");
  }
}
