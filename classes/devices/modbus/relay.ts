import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import RelayPort, {
  getRelayPortType,
  RelayPortIn,
  RelayPortOut,
  RelayPortType,
} from "@/classes/registers/modbus/relayRegisters";
import GeneralToggleDevice from "@/classes/devices/modbus/generalToggleDevice";

const createRegisters = (
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
) => {
  const registersObject: {
    [key: string]: RelayPort;
  } = {};
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

class Relay extends GeneralToggleDevice {
  constructor(
    publicId: string,
    name: string,
    description: string,
    type: number,
    registersInfo: ServerSideRegisterInfoT[],
  ) {
    super(
      publicId,
      name,
      description,
      type,
      createRegisters(publicId, registersInfo),
      true,
    );
  }
}

export default Relay;
