import Register from "@/classes/devices/register";
import { Protocols } from "@/classes/devices/protocols";
import getValueMap from "@/classes/devices/getValueMap";

const modbusValueMap = {
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
const zigbeeValueMap = {};

export class MusicPlayerMainRegister extends Register {
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
      getValueMap(
        protocol,
        modbusValueMap,
        zigbeeValueMap,
        "Music Player main register",
      ),
      hasFeedback,
    );
  }
}
