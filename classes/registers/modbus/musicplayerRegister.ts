import Register from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";

const valueMap = {
  "00": "defaultValue",
  "31": "previous",
  "32": "next",
  "37": "play",
  "38": "pause",
  "51": "off",
  "52": "on",
  "77": "aux",
  "78": "bluetooth",
  "70": "sd",
  "41": "up",
  "42": "down",
  "43": "mute",
};

export class MusicplayerMainReg extends Register {
  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
  ) {
    super(
      Protocols.modbus,
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
