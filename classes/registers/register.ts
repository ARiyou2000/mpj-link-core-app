import ResponseModel from "@/classes/responseModel";
import { Protocols } from "@/classes/protocols";
import { setRegisterData } from "@/utils/queueHelper";
import { setZigbeeDeviceStatus } from "@/utils/zigbee/deviceStatus";

export type generalValueType = number | boolean | string;
export type objectType = { [key: string]: generalValueType };

const checkValueValidity = (
  value: generalValueType | undefined,
): generalValueType | never => {
  if (typeof value === "undefined") {
    throw new Error("invalid value");
  } else {
    return value;
  }
};

export const stringToActualValue = (valuesMap: objectType, value: string) => {
  const convertedValue: generalValueType | undefined = valuesMap[value];
  return checkValueValidity(convertedValue);
};

export const actualValueToString = (
  valueMap: objectType,
  value: generalValueType,
) => {
  const convertedValue = Object.keys(valueMap).find((key) => {
    return valueMap[key] === value;
  });
  return checkValueValidity(convertedValue);
};

const registerValueConverter = {
  stringToActualValue,
  actualValueToString,
};

class Register extends ResponseModel {
  // @ts-ignore
  #devicePublicId: string;
  // @ts-ignore
  #indicator: string;
  // @ts-ignore
  #stringValue: string;
  // @ts-ignore
  #value: generalValueType;
  // @ts-ignore
  #valueMap: objectType;
  // @ts-ignore
  #hasFeedback: boolean;
  // @ts-ignore
  #protocol: Protocols;

  // @ts-ignore
  #setValue(stringValue: string) {
    this.#stringValue = stringValue;
    try {
      this.#value = registerValueConverter.stringToActualValue(
        this.#valueMap,
        stringValue,
      );
    } catch (e) {
      throw e;
    }
  }

  constructor(
    protocol: Protocols,
    devicePublicId: string,
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
    valueMap: objectType,
    hasFeedback: boolean,
  ) {
    super(publicId, name, description);
    this.#protocol = protocol;
    this.#devicePublicId = devicePublicId;
    this.#indicator = indicator;
    this.#hasFeedback = hasFeedback || true;
    this.#valueMap = valueMap;
    this.#setValue(stringValue);
  }

  set stringValue(value: string) {
    this.#setValue(value);
  }

  get indicator(): string {
    return this.#indicator;
  }

  get value(): generalValueType {
    return this.#value;
  }

  get devicePublicId(): string {
    return this.#devicePublicId;
  }

  async updateValue(value: generalValueType) {
    try {
      const convertedValue = registerValueConverter.actualValueToString(
        this.#valueMap,
        value,
      ) as string;
      if (this.#protocol === Protocols.modbus) {
        return await setRegisterData(this.publicId, convertedValue, {
          hasFeedback: this.#hasFeedback,
        });
      } else if (this.#protocol === Protocols.zigbee) {
        return await setZigbeeDeviceStatus(
          this.devicePublicId,
          this.publicId,
          convertedValue,
        );
      } else {
        throw new Error("Unsupported protocol!");
      }
    } catch (e) {
      throw e;
    }
  }
}

export default Register;
