import Register from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";

const valueMap = {
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
