import GeneralPower from "./generalPower";
import Register, { objectType } from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";

// ---------- Power ----------
export class DuctSplitPower extends GeneralPower {}

// ---------- Value registers ----------
class DuctSplitRegister extends Register {
  constructor(
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    valueMap: objectType,
  ) {
    super(
      Protocols.modbus,
      devicePublicId,
      publicId,
      name,
      description,
      indicator,
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

export class DuctSplitFanSpeed extends DuctSplitRegister {
  constructor(
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
  ) {
    super(
      devicePublicId,
      publicId,
      name,
      description,
      indicator,
      fanSpeedValueMap,
    );
  }
}

// ---------- Mode ----------
const modeValueMap = {
  "01": "plasma",
  "02": "cold",
  "03": "hot",
  "04": "auto",
};

export class DuctSplitMode extends DuctSplitRegister {
  constructor(
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
  ) {
    super(devicePublicId, publicId, name, description, indicator, modeValueMap);
  }
}

//  ---------- Target Point Temperature ----------
const targetPointTemperatureMap = (() => {
  const startTemp = 15;
  const endTemp = 35 + 1;
  const temp: objectType = {};
  for (let i = startTemp; i < endTemp; i++) {
    const keyVal = String(i).padStart(2, "0");
    temp[keyVal] = keyVal;
  }
  return temp;
})();

export class DuctSplitTargetPointTemperature extends DuctSplitRegister {
  constructor(
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
  ) {
    super(
      devicePublicId,
      publicId,
      name,
      description,
      indicator,
      targetPointTemperatureMap,
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

export class DuctSplitCurrentTemperature extends DuctSplitRegister {
  constructor(
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
  ) {
    super(
      devicePublicId,
      publicId,
      name,
      description,
      indicator,
      currentTemperatureMap,
    );
  }

  get updateValue() {
    throw new Error("DuctSplit current temperature can be read only!");
  }
}
