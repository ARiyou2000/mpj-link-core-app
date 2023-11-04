import GeneralPower from "./generalPower";
import Register, { objectType } from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";

// ---------- Power ----------
export class ThermostatPower extends GeneralPower {
  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
  ) {
    super(publicId, name, description, indicator, stringValue, true);
  }
}

// ---------- Value registers ----------
class ThermostatRegister extends Register {
  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
    valueMap: objectType,
  ) {
    super(
      Protocols.modbus,
      publicId,
      name,
      description,
      indicator,
      stringValue,
      valueMap,
      true,
    );
  }
}

// ---------- Fan Speed ----------
const fanSpeedValueMap = {
  "01": "slow",
  "02": "medium",
  "03": "fast",
  "04": "auto",
};

export class ThermostatFanSpeed extends ThermostatRegister {
  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
  ) {
    super(
      publicId,
      name,
      description,
      indicator,
      stringValue,
      fanSpeedValueMap,
    );
  }
}

// ---------- Season Mode ----------
const seasonModeValueMap = {
  "02": "cold",
  "03": "hot",
};

export class ThermostatSeasonMode extends ThermostatRegister {
  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
  ) {
    super(
      publicId,
      name,
      description,
      indicator,
      stringValue,
      seasonModeValueMap,
    );
  }
}

//  ---------- Set Point Temperature ----------
const setPointTemperatureMap = (() => {
  const startTemp = 15;
  const endTemp = 35 + 1;
  const temp: objectType = {};
  for (let i = startTemp; i < endTemp; i++) {
    const keyVal = String(i).padStart(2, "0");
    temp[keyVal] = keyVal;
  }
  return temp;
})();

export class ThermostatSetPointTemperature extends ThermostatRegister {
  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
  ) {
    super(
      publicId,
      name,
      description,
      indicator,
      stringValue,
      setPointTemperatureMap,
    );
  }
}

// ---------- Current Temperature ----------
const currentTemperatureMap = (() => {
  const startTemp = 1;
  const endTemp = 99 + 1;
  const temp: objectType = {};
  for (let i = startTemp; i < endTemp; i++) {
    const keyVal = String(i).padStart(2, "0");
    temp[keyVal] = keyVal;
  }
  return temp;
})();

export class ThermostatCurrentTeperature extends ThermostatRegister {
  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
  ) {
    super(
      publicId,
      name,
      description,
      indicator,
      stringValue,
      currentTemperatureMap,
    );
  }

  async updateValue(value: boolean) {
    throw new Error("Thermostat current temperature can be read only!");
  }
}
