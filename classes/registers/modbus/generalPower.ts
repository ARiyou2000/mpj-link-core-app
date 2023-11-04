import Register from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";

const valueMap = {
  "01": false,
  "02": true,
};

class GeneralPower extends Register {
  constructor(
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
  ) {
    super(
      Protocols.modbus,
      devicePublicId,
      publicId,
      name,
      description,
      indicator,
      stringValue,
      valueMap,
      true,
    );
  }
}

export default GeneralPower;
