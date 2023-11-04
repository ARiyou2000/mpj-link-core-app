import GeneralPower from "./generalPower";
import Register, { objectType } from "@/classes/registers/register";

// ---------- Power ----------
export class ThermostatPower extends GeneralPower {}

// ---------- Fan Speed ----------
const fanSpeedValueMap = {
  "01": "slow",
  "02": "medium",
  "03": "fast",
  "04": "auto",
};

export class ThermostatFanSpeed extends Register {
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

export class ThermostatSeasonMode extends Register {
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

export class ThermostatSetPointTemperature extends Register {
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

export class ThermostatCurrentTeperature extends Register {
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

  private set stringValue(value: string) {
    throw new Error("Thermostat current temperature can be read only!");
  }

  get stringValue(): string {
    return super["stringValue"];
  }

  async updateValue(value: boolean) {
    throw new Error("Thermostat current temperature can be read only!");
  }
}
