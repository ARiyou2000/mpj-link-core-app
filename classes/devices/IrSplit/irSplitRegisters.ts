import Register from "@/classes/devices/register";
import { Protocols } from "@/classes/devices/protocols";
import getValueMap from "@/classes/devices/getValueMap";
import GeneralPowerRegister from "@/classes/devices/GeneralPower/generalPowerRegister";

const modbusValueMap = {
  "01": "trigger",
};
const zigbeeValueMap = {};

class IrSplitMainRegister extends Register {
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

export class IrSplitPowerRegister extends GeneralPowerRegister {}

export class IrSplitIncreaseFanSpeedRegister extends IrSplitMainRegister {}

export class IrSplitDecreaseFanSpeedRegister extends IrSplitMainRegister {}

export class IrSplitIncreaseTemperatureRegister extends IrSplitMainRegister {}

export class IrSplitDecreaseTemperatureRegister extends IrSplitMainRegister {}

export class IrSplitModeRegister extends IrSplitMainRegister {}

export class IrSplitMovementDirectionRegister extends IrSplitMainRegister {}

export default IrSplitMainRegister;
