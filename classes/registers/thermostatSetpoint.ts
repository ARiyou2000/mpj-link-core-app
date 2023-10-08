import Register from "./register";
import { setRegisterData } from "@/utils/queueHelper";

class ThermostatSetpoint extends Register {
  set stringValue(value: string) {
    this.stringValue = value;
    this.value = parseInt(value);
  }

  set value(value: number) {
    if (15 <= value && value <= 35) {
      const result = setRegisterData(this.publicId, value.toString());
    } else {
      throw new Error("Value must be in range of 15-35");
    }
  }

  constructor(
    publicId: string,
    name: string,
    description: string,
    stringValue: string,
  ) {
    super(publicId, name, description, stringValue);
    this.value = parseInt(stringValue);
  }
}

export default ThermostatSetpoint;
