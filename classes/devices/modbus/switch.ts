import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import { SwitchPole } from "@/classes/registers/switchRegister";
import { DevicesType } from "@/classes/devices/deviceInfo";
import GeneralToggleDevice from "@/classes/devices/generalToggleDevice";
import { Protocols } from "@/classes/protocols";

const createRegisters = (
  protocol: Protocols,
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
  hasDataFeedback: boolean,
) => {
  const registersObject: {
    [key: string]: SwitchPole;
  } = {};
  registersList.forEach((register) => {
    const registerNumber = Number(register.number);
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
      registersObject[`pole${registerNumber.toString().padStart(2, "0")}`] =
        new SwitchPole(...params);
    } else if (protocol === Protocols.zigbee) {
      registersObject[register.number] = new SwitchPole(...params);
    } else {
      throw new Error("Invalid protocol - Switch registers");
    }
  });

  return registersObject;
};

class Switch extends GeneralToggleDevice {
  constructor(
    publicId: string,
    name: string,
    description: string,
    type: DevicesType,
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

export default Switch;
