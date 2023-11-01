import ResponseModel from "@/classes/responseModel";

type valueType = number | boolean | string;

class Register extends ResponseModel {
  private _value: valueType = "00";
  private _stringValue: string = "00";
  private _number: string;

  constructor(
    publicId: string,
    name: string,
    description: string,
    number: string,
    stringValue: string,
  ) {
    super(publicId, name, description);
    this._number = number;
    this._stringValue = stringValue;
  }

  get number(): string {
    return this._number;
  }

  get value(): valueType {
    return this._value;
  }

  get stringValue(): string {
    return this._stringValue;
  }

  // Following methods will be implemented by descendants.
  set value(value: valueType) {
    // Will get logical value and call to server for changes
  }

  set stringValue(value: string) {
    // Will get value from server and set logical value
  }
}

export default Register;
