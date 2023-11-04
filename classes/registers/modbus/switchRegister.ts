import generalPower from "./generalPower";

export class SwitchPole extends generalPower {
  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
  ) {
    super(publicId, name, description, indicator, stringValue, true);
  }
}
