import Register from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";

const valueMap = {
  ON: true,
  OFF: false,
} as const;

class GeneralPower extends Register {
  constructor(
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
  ) {
    super(
      Protocols.zigbee,
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

export default GeneralPower;
