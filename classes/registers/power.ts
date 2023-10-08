import Register from "./register";
import { setRegisterData } from "@/utils/queueHelper";

const getSwitchRegisterValue = (stringValue: string) => {
  if (stringValue === "02") {
    return true;
  } else if (stringValue === "01") {
    return false;
  } else {
    return undefined;
  }
};

class PowerRegister extends Register {
  set stringValue(value: string) {
    this.stringValue = value;
    const switchValue = getSwitchRegisterValue(value);
    this.value = !!switchValue;
  }

  set value(value: boolean) {
    const result = setRegisterData(this.publicId, value ? "02" : "01");
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

export default PowerRegister;
