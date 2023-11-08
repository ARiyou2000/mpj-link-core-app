import Device from "@/classes/devices/device";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import { Protocols } from "@/classes/protocols";
import { DevicesType } from "@/classes/devices/deviceInfo";
import RelayPort, {
  RelayPortOut,
} from "@/classes/registers/zigbee/relayRegisters";

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

class Relay extends Device {
  constructor(
    publicId: string,
    name: string,
    description: string,
    type: DevicesType,
    registersInfo: ServerSideRegisterInfoT[],
  ) {
    super(
      Protocols.zigbee,
      publicId,
      name,
      description,
      type,
      createRegisters(publicId, registersInfo),
      true,
    );
  }

  valueAssignment(values: { [key: string]: "ON" | "OFF" }) {
    Object.keys(this.registers).forEach((registerKey) => {
      const register = this.registers[registerKey];
      register.stringValue = values[register.indicator];
    });
  }
}

export default Relay;
