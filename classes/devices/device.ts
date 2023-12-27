import Register, { ObjectType } from "@/classes/devices/register";
import DeviceInfo, { DevicesType } from "@/classes/devices/deviceInfo";
import { Protocols } from "@/classes/devices/protocols";
import clientSideAuthorizedFetch from "@/utils/clientSideAuthorizedFetch";
import { getRegistersValueFormString } from "@/hooks/useDeviceData";
import { getDataOptionsType } from "@/utils/queueHelper";
import { messageType } from "@/mqtt";

export type RegistersListObjectType = { [key: string]: Register };

class Device extends DeviceInfo {
  private _registers: RegistersListObjectType;

  constructor(
    publicId: string,
    name: string,
    description: string,
    type: DevicesType,
    registers?: RegistersListObjectType,
  ) {
    super(publicId, name, description, type);
    if (registers) {
      this._registers = registers;
    }
  }

  set registers(value: RegistersListObjectType) {
    this._registers = value;
  }

  get registers(): RegistersListObjectType {
    return this._registers;
  }

  valueAssignment(values: string[] | ObjectType) {}

  // @ts-ignore
  #getData = async (options: getDataOptionsType, zigbeeData?: messageType) => {
    if (this.hasDataFeedback) {
      if (this.protocol === Protocols.modbus) {
        // Device registers current value form server
        const registersStringValue = (await clientSideAuthorizedFetch(
          `/api/devices/${this.publicId}/data`,
          options,
        )) as string;

        // Get registers value from string
        if (!registersStringValue || !Number(registersStringValue)) {
          throw new Error("Registers value is null");
        }

        const registersValueArray =
          getRegistersValueFormString(registersStringValue);

        this.valueAssignment(registersValueArray);
      } else if (this.protocol === Protocols.zigbee) {
        if (!!zigbeeData) {
          const dataObject = JSON.parse(zigbeeData.toString());
          this.valueAssignment(dataObject);
        }
      } else {
        throw new Error("Unsupported protocol");
      }
    }
  };

  get getData(): (
    options: getDataOptionsType,
    zigbeeData?: messageType,
  ) => Promise<void> {
    return this.#getData;
  }
}

export default Device;
