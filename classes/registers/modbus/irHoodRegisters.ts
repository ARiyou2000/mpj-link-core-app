import Register from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";

const valueMap = {
  "01": "trigger",
};

class IrHoodMainReg extends Register {
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

export class IrHoodPower extends IrHoodMainReg {}

export class IrHoodLight extends IrHoodMainReg {}

export class IrHoodIncreaseFanSpeed extends IrHoodMainReg {}

export class IrHoodDecreaseFanSpeed extends IrHoodMainReg {}

export default IrHoodMainReg;
