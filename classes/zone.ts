import ResponseModel from "@/classes/responseModel";

class Zone extends ResponseModel {
  constructor(publicId: string, name: string) {
    super(publicId, name, "");
  }
}

export default Zone;
