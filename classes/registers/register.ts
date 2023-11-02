import ResponseModel from "@/classes/responseModel";
import e from "cors";

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
  private _stringValue: string;
  private _indicator: string;
  private _value: generalValueType;
  private _valueMap: objectType;

  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
    valueMap: objectType,
  ) {
    super(publicId, name, description);
    this._indicator = indicator || "";
    this._stringValue = stringValue || "00";
    this._valueMap = valueMap;
    try {
      this._value = registerValueConverter.stringToActualValue(
        valueMap,
        stringValue,
      );
    } catch (e) {
      throw e;
    }
  }

  get valueMap(): objectType {
    return this._valueMap;
  }

  get indicator(): string {
    return this._indicator;
  }

  get stringValue(): string {
    return this._stringValue;
  }

  set stringValue(value: string) {
    this._stringValue = value;

    try {
      this._value = registerValueConverter.stringToActualValue(
        this._valueMap,
        value,
      ) as boolean;
    } catch (e) {
      throw e;
    }
  }

  get value(): generalValueType {
    return this._value;
  }

  set value(value: generalValueType) {
    this._value = value;
    // Actual implementation will be implemented by descendants.
  }

  async updateValue(value: generalValueType) {
    // return await setRegisterData(this.publicId, valueToStringValueLogic(value));
    try {
      const newValue = registerValueConverter.actualValueToString(
        this._valueMap,
        value,
      ) as string;
      // return await setRegisterData(this.publicId, newValue);
    } catch (e) {
      throw e;
    }
  }
}

export default Register;
