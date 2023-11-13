import ResponseModel from "@/classes/responseModel";
import fetchUrl from "@/utils/fetchUrl";
import getCoreIP from "@/utils/getCoreIP";

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
  isFavored: boolean = false;
  isActive: boolean;
  image: string = "";

  constructor(
    publicId: string,
    name: string,
    description: string,
    isFavored: boolean,
    isActive: boolean,
    image?: string,
  ) {
    super(publicId, name, description);
    this.isFavored = isFavored;
    this.isActive = isActive;
    if (image) {
      this.image = image;
    } else {
      this.image = getScenarioImageFromName(name);
    }
  }

  // @ts-ignore
  #apply = async () => {
    try {
      return await fetchUrl(`${getCoreIP()}/command/scenario/${this.publicId}`);
    } catch (e) {
      throw e;
    }
  };

  // @ts-ignore
  #makeNotFavored = async () => {
    try {
      return await fetchUrl(`${getCoreIP()}/scenario/${this.publicId}`, {
        method: "PUT",
        body: { favorite: false },
      });
    } catch (e) {
      throw e;
    }
  };

  // @ts-ignore
  #makeFavored = async () => {
    try {
      return await fetchUrl(`${getCoreIP()}/scenario/${this.publicId}`, {
        method: "PUT",
        body: { favorite: true },
      });
    } catch (e) {
      throw e;
    }
  };

  // @ts-ignore
  #toggleIsFavored = async () => {
    try {
      return await fetchUrl(`${getCoreIP()}/scenario/${this.publicId}`, {
        method: "PUT",
        body: { favorite: !this.isFavored },
      });
    } catch (e) {
      throw e;
    }
  };

  get apply(): () => Promise<unknown> {
    return this.#apply;
  }

  get makeNotFavored(): () => Promise<unknown> {
    return this.#makeNotFavored;
  }

  get makeFavored(): () => Promise<unknown> {
    return this.#makeFavored;
  }

  get toggleIsFavored(): () => Promise<unknown> {
    return this.#toggleIsFavored;
  }
}

export default Scenario;
