import Register from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";
import getValueMap from "@/classes/registers/getValueMap";

const modbusValueMap = {
  "01": "trigger",
};
const zigbeeValueMap = {};

class IrSplitMainReg extends Register {
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
        modbusValueMap,
        zigbeeValueMap,
        "IR Split main register",
      ),
      hasFeedback,
    );
  }
}

const modbusPowerValueMap = {
  "01": false,
  "02": true,
};
const zigbeePowerValueMap = {};

export class IrSplitPower extends Register {
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
        modbusPowerValueMap,
        zigbeePowerValueMap,
        "IR Split power value map",
      ),
      hasFeedback,
    );
  }
}

export class IrSplitIncreaseFanSpeed extends IrSplitMainReg {}

export class IrSplitDecreaseFanSpeed extends IrSplitMainReg {}

export class IrSplitIncreaseTemperature extends IrSplitMainReg {}

export class IrSplitDecreaseTemperature extends IrSplitMainReg {}

export class IrSplitMode extends IrSplitMainReg {}

export class IrSplitMovementDirection extends IrSplitMainReg {}

export default IrSplitMainReg;
