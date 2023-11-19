import ResponseModel from "@/classes/responseModel";

class ResponseWithImage extends ResponseModel {
  // @ts-ignore
  #image: string = "";

  constructor(
    publicId: string,
    name: string,
    description: string,
    image: string,
  ) {
    super(publicId, name, description);
    this.#image = image;
  }

  get image(): string {
    return this.#image;
  }
}

export default ResponseWithImage;
