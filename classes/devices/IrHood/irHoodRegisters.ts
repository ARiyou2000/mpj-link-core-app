import Register from "@/classes/devices/register";
import { Protocols } from "@/classes/devices/protocols";
import getValueMap from "@/classes/devices/getValueMap";

const modbusValueMap = {
  "01": "trigger",
};
const zigbeeValueMap = {};

class IrHoodMainRegister extends Register {
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
        "IR Hood main register",
      ),
      hasFeedback,
    );
  }
}

export class IrHoodPowerRegister extends IrHoodMainRegister {}

export class IrHoodLightRegister extends IrHoodMainRegister {}

export class IrHoodIncreaseFanSpeedRegister extends IrHoodMainRegister {}

export class IrHoodDecreaseFanSpeedRegister extends IrHoodMainRegister {}

export default IrHoodMainRegister;
