import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import RelayPort, {
  getRelayPortType,
  RelayPortIn,
  RelayPortOut,
  RelayPortType,
} from "@/classes/registers/relayRegisters";
import GeneralToggleDevice from "@/classes/devices/generalToggleDevice";
import { Protocols } from "@/classes/protocols";

const createRegisters = (
  protocol: Protocols,
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
  hasDataFeedback: boolean,
) => {
  const registersObject: { [key: string]: RelayPort } = {};

  registersList.forEach((register) => {
    const params = [
      protocol,
      devicePublicId,
      register.publicId,
      register.name,
      register.description,
      register.number,
      hasDataFeedback,
    ] as const;

    if (protocol === Protocols.modbus) {
      const registerNumber = Number(register.number);

      registersObject[`port${registerNumber.toString().padStart(2, "0")}`] =
        getRelayPortType(protocol, registerNumber) === RelayPortType.output
          ? new RelayPortOut(...params)
          : new RelayPortIn(...params);
    } else if (protocol === Protocols.zigbee) {
      registersObject[register.number] = new RelayPortOut(...params);
    } else {
      throw new Error("Invalid protocol - relay registers");
    }
  });

  return registersObject;
};

class Relay extends GeneralToggleDevice {
  constructor(
    publicId: string,
    name: string,
    description: string,
    type: number,
    registersInfo: ServerSideRegisterInfoT[],
  ) {
    super(publicId, name, description, type);
    this.registers = createRegisters(
      this.protocol,
      publicId,
      registersInfo,
      this.hasDataFeedback,
    );
  }
}

export default Relay;
