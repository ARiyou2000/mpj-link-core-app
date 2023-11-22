import Register from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";

const valueMap = {
  "01": "trigger",
};

class IrSplitMainReg extends Register {
  constructor(
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
  ) {
    super(
      Protocols.modbus,
      devicePublicId,
      publicId,
      name,
      description,
      indicator,
      valueMap,
      false,
    );
  }
}

const powerValueMap = {
  "01": false,
  "02": true,
} as const;

export class IrSplitPower extends Register {
  constructor(
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
  ) {
    super(
      Protocols.modbus,
      devicePublicId,
      publicId,
      name,
      description,
      indicator,
      powerValueMap,
      false,
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
