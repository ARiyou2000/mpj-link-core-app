import generalPower from "@/classes/registers/zigbee/generalPower";

type RelayPortTypeT = "input" | "output";

export const getRelayPortType = (portNumber: string): RelayPortTypeT => {
  return "output";
};

class RelayPort extends generalPower {
  // @ts-ignore
  #portType: RelayPortTypeT;

  constructor(
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
  ) {
    super(devicePublicId, publicId, name, description, indicator);
    this.#portType = getRelayPortType(indicator);
  }

  get portType(): RelayPortTypeT {
    return this.#portType;
  }
}

export class RelayPortOut extends RelayPort {}

export class RelayPortIn extends RelayPort {
  get updateValue() {
    throw new Error("Relay Port In can be read only!");
  }
}

export default RelayPort;
