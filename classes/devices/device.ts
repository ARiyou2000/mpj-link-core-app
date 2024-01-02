import Register, { ObjectType } from "@/classes/devices/register";
import DeviceInfo, { DevicesType } from "@/classes/devices/deviceInfo";
import { Protocols } from "@/classes/devices/protocols";
import clientSideAuthorizedFetch from "@/utils/clientSideAuthorizedFetch";
import { getRegistersValueFormString } from "@/hooks/useDeviceData";
import { getDataOptionsType } from "@/utils/queueHelper";
import authorizedFetch from "@/utils/authorizedFetch";
import window from "@/utils/window";

export type RegistersListObjectType = { [key: string]: Register };

class Device extends DeviceInfo {
  private _registers: RegistersListObjectType;
  // @ts-ignore
  #lastValueState: string;
  // @ts-ignore
  #updateSignal: object;

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
  #getData = async (options: getDataOptionsType, zigbeeData?: ObjectType) => {
    if (this.hasDataFeedback) {
      const deviceDataEndpoint = `/api/devices/${this.publicId}/data`;
      let deviceRegistersData;

      const { signal } = new AbortController();
      if (this.protocol === Protocols.modbus) {
        // Device registers current value form server
        let registersStringValue;
        if (typeof window === "undefined") {
          registersStringValue = (await authorizedFetch(
            `${process.env.NEXT_SELF_ABSOLUTE_URL}${deviceDataEndpoint}`,
            { signal },
          )) as string;
        } else {
          registersStringValue = (await clientSideAuthorizedFetch(
            deviceDataEndpoint,
            { signal: options.signal },
          )) as string;
        }
        // Get registers value from string
        if (!registersStringValue || !Number(registersStringValue)) {
          throw new Error("Registers value is null");
        }

        const registersValueArray =
          getRegistersValueFormString(registersStringValue);

        deviceRegistersData = registersValueArray;
      } else if (this.protocol === Protocols.zigbee) {
        let deviceDataValuesObject;
        if (typeof window === "undefined") {
          deviceDataValuesObject = await authorizedFetch(
            `${process.env.NEXT_SELF_ABSOLUTE_URL}${deviceDataEndpoint}`,
            { signal },
          );
        } else {
          if (!zigbeeData) {
            deviceDataValuesObject = await clientSideAuthorizedFetch(
              deviceDataEndpoint,
              { signal, ...options },
            );
          } else {
            deviceDataValuesObject = JSON.parse(zigbeeData.toString());
          }
        }
        delete deviceDataValuesObject.linkquality;
        deviceRegistersData = deviceDataValuesObject;
      } else {
        throw new Error("Unsupported protocol");
      }

      const currentValue = JSON.stringify(deviceRegistersData);
      if (this.lastValueState !== currentValue) {
        // console.log("============== Value Assignment ==============");
        // console.log(this.lastValueState);
        // console.log(currentValue);
        this.lastValueState = currentValue;
        this.valueAssignment(deviceRegistersData);
        this.#updateSignal = {};
      }
    }
  };

  get getData(): (
    options: getDataOptionsType,
    zigbeeData?: ObjectType,
  ) => Promise<void> {
    return this.#getData;
  }

  get updateSignal(): object {
    return this.#updateSignal;
  }

  get lastValueState(): string {
    return this.#lastValueState;
  }

  set lastValueState(value: string) {
    this.#lastValueState = value;
  }
}

export default Device;
