import Register from "./register";
import { setRegisterData } from "@/utils/queueHelper";

const getSwitchRegisterValue = (stringValue: string) => {
  if (stringValue === "ON") {
    return true;
  } else if (stringValue === "OFF") {
    return false;
  } else {
    return undefined;
  }
};

class ZigbeePowerRegister extends Register {
  set stringValue(value: string) {
    this.stringValue = value;
    const switchValue = getSwitchRegisterValue(value);
    this.value = !!switchValue;
  }

  set value(value: boolean) {
    // const result = setRegisterData(this.publicId, value ? "ON" : "OFF");
  }

  constructor(
    publicId: string,
    name: string,
    description: string,
    stringValue: string,
  ) {
    super(publicId, name, description, stringValue);
    const switchValue = getSwitchRegisterValue(stringValue);
    this.value = !!switchValue;
  }
}

export default ZigbeePowerRegister;
