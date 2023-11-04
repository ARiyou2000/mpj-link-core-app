import Register, { objectType } from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";

const valueMap = {
  "01": false,
  "02": true,
};

class GeneralPower extends Register {
  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
    hasFeedback: boolean,
  ) {
    super(
      Protocols.modbus,
      publicId,
      name,
      description,
      indicator,
      stringValue,
      valueMap,
      hasFeedback,
    );
  }
}

export default GeneralPower;
