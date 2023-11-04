import GeneralPower from "@/classes/registers/modbus/generalPower";

export class CurtainsRelay extends GeneralPower {
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

export class CurtainsOpen extends CurtainsRelay {}

export class CurtainsClose extends CurtainsRelay {}
