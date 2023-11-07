import Register from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";

const valueMap = {
  "01": false,
  "02": true,
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
      Protocols.modbus,
      devicePublicId,
      publicId,
      name,
      description,
      indicator,
      valueMap,
      true,
    );
  }
}

export default GeneralPower;
