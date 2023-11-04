class ResponseModel {
  // @ts-ignore
  #publicId: string;
  // @ts-ignore
  #name: string;
  // @ts-ignore
  #description: string;

  constructor(publicId: string, name: string, description: string) {
    this.#publicId = publicId || "";
    this.#name = name || "";
    this.#description = description || "";
  }

  get publicId(): string {
    return this.#publicId;
  }

  get name(): string {
    return this.#name;
  }

  get description(): string {
    return this.#description;
  }
}

export default ResponseModel;
