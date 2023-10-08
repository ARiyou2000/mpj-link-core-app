class ResponseModel {
  private _publicId: string = "";
  private _name: string = "";
  private _description: string = "";

  constructor(publicId: string, name: string, description: string) {
    this._publicId = publicId;
    this._name = name;
    this._description = description;
  }

  get publicId(): string {
    return this._publicId;
  }

  set publicId(value: string) {
    this._publicId = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}

export default ResponseModel;
