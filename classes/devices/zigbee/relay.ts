import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import { DevicesType } from "@/classes/devices/deviceInfo";
import RelayPort, {
  RelayPortOut,
} from "@/classes/registers/zigbee/relayRegisters";
import GeneralToggleDevice from "@/classes/devices/zigbee/generalToggleDevice";

const createRegisters = (
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
) => {
  const registersObject: { [key: string]: RelayPort } = {};
  registersList.forEach((register) => {
    const params = [
      devicePublicId,
      register.publicId,
      register.name,
      register.description,
      register.number,
    ] as const;

    registersObject[register.number] = new RelayPortOut(...params);
  });

  return registersObject;
};

class Relay extends GeneralToggleDevice {
  constructor(
    publicId: string,
    name: string,
    description: string,
    type: DevicesType,
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
