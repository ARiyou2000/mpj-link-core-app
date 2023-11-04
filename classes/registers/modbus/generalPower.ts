import Register, { objectType } from "@/classes/registers/register";

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
    hasFeedback: boolean,
  ) {
    super(
      publicId,
      name,
      description,
      indicator,
      stringValue,
      valueMap,
      hasFeedback,
    );
  }
}

export default GeneralPower;
