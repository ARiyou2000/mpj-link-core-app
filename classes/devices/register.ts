import ResponseModel from "@/classes/responseModel";
import { Protocols } from "@/classes/devices/protocols";
import clientSideAuthorizedFetch from "@/utils/clientSideAuthorizedFetch";

export type generalValueType = number | boolean | string;
export type ObjectType = { [key: string]: generalValueType };
export type ServerSideRegisterInfoT = {
  publicId: string;
  name: string;
  description: string;
  number: string;
  value: string;
};

const checkValueValidity = (
  value: generalValueType | undefined,
): generalValueType | never => {
  if (typeof value === "undefined") {
    throw new Error("invalid value");
  } else {
    return value;
  }
};

export const stringToActualValue = (valuesMap: ObjectType, value: string) => {
  const convertedValue: generalValueType | undefined = valuesMap[value];
  return checkValueValidity(convertedValue);
};

export const actualValueToString = (
  valueMap: ObjectType,
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
  #valueMap: ObjectType;
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
    valueMap: ObjectType,
    hasFeedback: boolean,
  ) {
    super(publicId, name, description);
    this.#protocol = protocol;
    this.#devicePublicId = devicePublicId;
    this.#indicator = indicator;
    this.#hasFeedback = hasFeedback;
    this.#valueMap = valueMap;
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

  #updateValue = async (value: generalValueType) => {
    try {
      const convertedValue = registerValueConverter.actualValueToString(
        this.#valueMap,
        value,
      ) as string;

      return await clientSideAuthorizedFetch(
        `/api/devices/${this.#devicePublicId}/registers/${this.publicId}/data`,
        {
          method: "PUT",
          body: {
            protocol: this.#protocol,
            indicator: this.#indicator,
            value: convertedValue,
            hasFeedback: this.#hasFeedback,
          },
        },
      );
    } catch (e) {
      throw e;
    }
  };

  get updateValue(): (value: generalValueType) => Promise<unknown> {
    return this.#updateValue;
  }
}

export default Register;
