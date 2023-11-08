import generalPower from "@/classes/registers/zigbee/generalPower";

export enum RelayPortType {
  input,
  output,
}

export const getRelayPortType = (portNumber: string): RelayPortType => {
  return RelayPortType.output;
};

class RelayPort extends generalPower {
  // @ts-ignore
  #portType: RelayPortType;

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

  get portType(): RelayPortType {
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
