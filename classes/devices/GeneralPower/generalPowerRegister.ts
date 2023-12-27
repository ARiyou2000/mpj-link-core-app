import Register from "@/classes/devices/register";
import { Protocols } from "@/classes/devices/protocols";
import getValueMap from "@/classes/devices/getValueMap";

const modbusValueMap = {
  "01": false,
  "02": true,
} as const;

const zigbeeValueMap = {
  ON: true,
  OFF: false,
} as const;

class GeneralPowerRegister extends Register {
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
      getValueMap(protocol, modbusValueMap, zigbeeValueMap, "General Power"),
      hasFeedback,
    );
  }
}

export default GeneralPowerRegister;
