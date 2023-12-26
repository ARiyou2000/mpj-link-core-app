import { ObjectType } from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";

const getValueMap = (
  protocol: Protocols,
  modbusValueMap: ObjectType,
  zigbeeValueMap: ObjectType,
  errorMessage?: string,
) => {
  if (protocol === Protocols.modbus) {
    return modbusValueMap;
  } else if (protocol === Protocols.zigbee) {
    return zigbeeValueMap;
  } else {
    throw new Error(`Invalid protocol for register - ${errorMessage}`);
  }
};

export default getValueMap;
