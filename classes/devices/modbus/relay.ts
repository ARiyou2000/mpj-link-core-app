import Device from "@/classes/devices/device";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";
import RelayPort, {
  getRelayPortType,
  RelayPortIn,
  RelayPortOut,
  RelayPortType,
} from "@/classes/registers/modbus/relayRegisters";

const createRegisters = (
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
) => {
  const registersObject: { [key: string]: RelayPort } = {};
  registersList.forEach((register) => {
    const registerNumber = Number(register.number);
    const params = [
      devicePublicId,
      register.publicId,
      register.name,
      register.description,
      register.number,
    ] as const;

    registersObject[`port${registerNumber.toString().padStart(2, "0")}`] =
      getRelayPortType(registerNumber) === RelayPortType.output
        ? new RelayPortOut(...params)
        : new RelayPortIn(...params);
  });

  return registersObject;
};

class Relay extends Device {
  constructor(
    publicId: string,
    name: string,
    description: string,
    type: number,
    registersInfo: ServerSideRegisterInfoT[],
  ) {
    super(
      Protocols.modbus,
      publicId,
      name,
      description,
      type,
      createRegisters(publicId, registersInfo),
      true,
    );
  }

  valueAssignment(values: string[]) {
    Object.keys(this.registers).forEach((registerKey) => {
      const register = this.registers[registerKey];
      register.stringValue = values[Number(register.indicator) - 1];
    });
  }
}

export default Relay;
