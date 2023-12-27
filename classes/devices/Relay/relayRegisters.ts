import { Protocols } from "@/classes/devices/protocols";
import GeneralPowerRegister from "@/classes/devices/GeneralPower/generalPowerRegister";

export enum RelayPortType {
  input,
  output,
}

export const getRelayPortType = (
  protocol: Protocols,
  portNumber: number,
): RelayPortType => {
  if (protocol === Protocols.modbus) {
    if (portNumber > 0 && portNumber <= 8) {
      return RelayPortType.input;
    } else if (portNumber > 8 && portNumber <= 16) {
      return RelayPortType.output;
    } else {
      throw new Error("Port Number is not a valid number");
    }
  } else if (protocol === Protocols.zigbee) {
    return RelayPortType.output;
  } else {
    throw new Error("Invalid protocol - Relay register");
  }
};

export class RelayPort extends GeneralPowerRegister {
  // @ts-ignore
  #portType: RelayPortType;

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
      hasFeedback,
    );
    this.#portType = getRelayPortType(protocol, Number(indicator));
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
