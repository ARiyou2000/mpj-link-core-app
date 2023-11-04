import GeneralPower from "./generalPower";

type portTypeT = "input" | "output";

class RelayPort extends GeneralPower {
  // @ts-ignore
  #portType: portTypeT;

  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
  ) {
    super(publicId, name, description, indicator, stringValue, true);
    const portNumber = Number(indicator);
    if (portNumber > 0 && portNumber <= 8) {
      this.#portType = "input";
    } else if (portNumber > 8 && portNumber <= 16) {
      this.#portType = "output";
    } else {
      throw new Error("Port Number is not a valid number");
    }
  }

  get portType(): portTypeT {
    return this.#portType;
  }
}

class RelayPortOut extends RelayPort {}

class RelayPortIn extends RelayPort {
  async updateValue(value: boolean) {
    throw new Error("Relay Port In can be read only!");
  }
}

export { RelayPortIn, RelayPortOut, RelayPort as default };
