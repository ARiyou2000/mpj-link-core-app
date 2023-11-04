import ResponseModel from "@/classes/responseModel";
import e from "cors";
import { setRegisterData } from "@/utils/queueHelper";

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
  #indicator: string;
  // @ts-ignore
  #value: generalValueType;
  // @ts-ignore
  #valueMap: objectType;
  // @ts-ignore
  #hasFeedback: boolean;

  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
    valueMap: objectType,
    hasFeedback: boolean,
  ) {
    super(publicId, name, description);
    this.#indicator = indicator || "";
    this.#hasFeedback = hasFeedback || true;
    this.#valueMap = valueMap;
    try {
      this.#value = registerValueConverter.stringToActualValue(
        valueMap,
        stringValue,
      );
    } catch (e) {
      throw e;
    }
  }

  get indicator(): string {
    return this.#indicator;
  }

  get value(): generalValueType {
    return this.#value;
  }

  async updateValue(value: generalValueType) {
    try {
      const newValue = registerValueConverter.actualValueToString(
        this.#valueMap,
        value,
      ) as string;
      return await setRegisterData(this.publicId, newValue, {
        hasFeedback: this.#hasFeedback,
      });
    } catch (e) {
      throw e;
    }
  }
}

export default Register;
