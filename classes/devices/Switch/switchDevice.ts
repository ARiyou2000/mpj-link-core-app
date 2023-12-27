import { SwitchPole } from "@/classes/devices/Switch/switchRegister";
import { Protocols } from "@/classes/devices/protocols";
import { ServerSideRegisterInfoT } from "@/classes/devices/register";
import GeneralPowerDevice from "@/classes/devices/GeneralPower/generalPowerDevice";
import { DevicesType } from "@/classes/devices/deviceInfo";

type SwitchRegistersListT = { [key: string]: SwitchPole };

const createRegisters = (
  protocol: Protocols,
  devicePublicId: string,
  registersList: ServerSideRegisterInfoT[],
  hasDataFeedback: boolean,
) => {
  const registersObject = <SwitchRegistersListT>{};
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

class Switch extends GeneralPowerDevice {
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
