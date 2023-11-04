import Register from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";

const valueMap = {
  ON: true,
  OFF: false,
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
      Protocols.zigbee,
      devicePublicId,
      publicId,
      name,
      description,
      indicator,
      stringValue,
      valueMap,
      false,
    );
  }
}

export default GeneralPower;
