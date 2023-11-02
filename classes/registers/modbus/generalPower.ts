import Register from "@/classes/registers/register";

const valueMap = {
  "01": false,
  "02": true,
};

class GeneralPower extends Register {
  constructor(
    publicId: string,
    name: string,
    description: string,
    indicator: string,
    stringValue: string,
  ) {
    super(publicId, name, description, indicator, stringValue, valueMap);
  }
}

export default GeneralPower;
