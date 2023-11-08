import GeneralPower from "./generalPower";

type RelayPortTypeT = "input" | "output";

export const getRelayPortType = (portNumber: number): RelayPortTypeT => {
  if (portNumber > 0 && portNumber <= 8) {
    return "input";
  } else if (portNumber > 8 && portNumber <= 16) {
    return "output";
  } else {
    throw new Error("Port Number is not a valid number");
  }
};

class RelayPort extends GeneralPower {
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
    const portNumber = Number(indicator);
    this.#portType = getRelayPortType(portNumber);
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
