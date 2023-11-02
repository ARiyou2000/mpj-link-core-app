class ResponseModel {
  private _publicId: string;
  private _name: string;
  private _description: string;

  constructor(publicId: string, name: string, description: string) {
    this._publicId = publicId || "";
    this._name = name || "";
    this._description = description || "";
  }

  get publicId(): string {
    return this._publicId;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }
}

export default ResponseModel;
