import GeneralPower from "./generalPower";

type portTypeT = "input" | "output";

export const getRelayPortType = (portNumber: number) => {
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
  #portType: portTypeT;

  constructor(
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
  ) {
    super(devicePublicId, publicId, name, description, indicator, stringValue);
    const portNumber = Number(indicator);
    this.#portType = getRelayPortType(portNumber);
  }

  get portType(): portTypeT {
    return this.#portType;
  }
}

export class RelayPortOut extends RelayPort {}

export class RelayPortIn extends RelayPort {
  async updateValue(value: boolean) {
    throw new Error("Relay Port In can be read only!");
  }
}
