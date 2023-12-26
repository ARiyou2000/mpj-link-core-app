import GeneralPower from "@/classes/registers/generalPower";
import Register, { ObjectType } from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";
import getValueMap from "@/classes/registers/getValueMap";

// ---------- Power ----------
export class DuctSplitPower extends GeneralPower {}

// ---------- Value registers ----------
class DuctSplitRegister extends Register {}

// ---------- Fan Speed ----------
const modbusFanSpeedValueMap = {
  "01": "slow",
  "02": "medium",
  "03": "fast",
  "04": "auto",
};
const zigbeeFanSpeedValueMap = {};

export class DuctSplitFanSpeed extends DuctSplitRegister {
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
        "Duct split fan speed",
      ),
      hasFeedback,
    );
  }
}

// ---------- Mode ----------
const modbusModeValueMap = {
  "01": "plasma",
  "02": "cold",
  "03": "hot",
  "04": "auto",
};
const zigbeeModeValueMap = {};

export class DuctSplitMode extends DuctSplitRegister {
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
        modbusModeValueMap,
        zigbeeModeValueMap,
        "Duct split mode",
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

export class DuctSplitTargetPointTemperature extends DuctSplitRegister {
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

export class DuctSplitCurrentTemperature extends DuctSplitRegister {
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
    throw new Error("DuctSplit current temperature can be read only!");
  }
}
