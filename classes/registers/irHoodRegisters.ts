import Register from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";
import getValueMap from "@/classes/registers/getValueMap";

const modbusValueMap = {
  "01": "trigger",
};
const zigbeeValueMap = {};

class IrHoodMainReg extends Register {
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

export class IrHoodPower extends IrHoodMainReg {}

export class IrHoodLight extends IrHoodMainReg {}

export class IrHoodIncreaseFanSpeed extends IrHoodMainReg {}

export class IrHoodDecreaseFanSpeed extends IrHoodMainReg {}

export default IrHoodMainReg;
