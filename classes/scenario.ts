import ResponseModel from "@/classes/responseModel";

const getScenarioImageFromName = (name: string) => {
  switch (true) {
    case name.includes("خروج"):
      return "";
    case name.includes("ورود"):
      return "";
    case name.includes("سینما") ||
      name.includes("تی وی") ||
      name.includes("TV"):
      return "";
    case name.includes("فوتبال") || name.includes("بازی"):
      return "";
    case name.includes("مهمان"):
      return "";
    default:
      return "";
  }
};

class Scenario extends ResponseModel {
  favorite: boolean = false;
  image: string = "";

  constructor(
    publicId: string,
    name: string,
    description: string,
    favorite: boolean,
    image: string,
  ) {
    super(publicId, name, description);
    this.favorite = favorite;
    if (image) {
      this.image = image;
    } else {
      this.image = getScenarioImageFromName(name);
    }
  }
}

export default Scenario;
