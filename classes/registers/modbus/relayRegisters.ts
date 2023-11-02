import GeneralPower from "./generalPower";

type portTypeT = "input" | "output";

class RelayPort extends GeneralPower {
  private _portType: portTypeT;

  get portType(): portTypeT {
    return this._portType;
  }

  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
  ) {
    super(publicId, name, description, indicator, stringValue);
    const portNumber = Number(indicator);
    if (portNumber > 0 && portNumber <= 8) {
      this._portType = "input";
    } else if (portNumber > 8 && portNumber <= 16) {
      this._portType = "output";
    } else {
      throw new Error("Port Number is not a valid number");
    }
  }
}

class RelayPortOut extends RelayPort {}

class RelayPortIn extends RelayPort {
  private set stringValue(value: string) {
    throw new Error("Relay Port In can be read only!");
  }

  get stringValue(): string {
    return super["stringValue"];
  }

  async updateValue(value: boolean) {
    throw new Error("Relay Port In can be read only!");
  }
}

export { RelayPortIn, RelayPortOut, RelayPort as default };
