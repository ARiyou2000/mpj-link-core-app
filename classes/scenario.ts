import fetchUrl from "@/utils/clientSideAuthorizedFetch";
import ResponseWithImage, {
  ServerSideResponseWithImageT,
} from "@/classes/responseWithImage";
import clientSideAuthorizedFetch from "@/utils/clientSideAuthorizedFetch";

export type ServerSideScenarioT = ServerSideResponseWithImageT & {
  favorite: boolean;
  active: boolean;
};

class Scenario extends ResponseWithImage {
  // @ts-ignore
  #isFavored: boolean = false;
  // @ts-ignore
  #isActive: boolean;

  constructor(
    publicId: string,
    name: string,
    description: string,
    image: string,
    isFavored: boolean,
    isActive: boolean,
  ) {
    super(publicId, name, description, image);
    this.#isFavored = isFavored;
    this.#isActive = isActive;
  }

  get isFavored(): boolean {
    return this.#isFavored;
  }

  get isActive(): boolean {
    return this.#isActive;
  }

  // @ts-ignore
  #apply = async () => {
    try {
      return await fetchUrl(`/api/scenarios/${this.publicId}/apply`);
    } catch (e) {
      throw e;
    }
  };

  // @ts-ignore
  #makeNotFavored = async () => {
    try {
      return await clientSideAuthorizedFetch(
        `/api/scenarios/${this.publicId}`,
        {
          method: "PUT",
          body: { favorite: false },
        },
      );
    } catch (e) {
      throw e;
    }
  };

  // @ts-ignore
  #makeFavored = async () => {
    try {
      return await clientSideAuthorizedFetch(
        `/api/scenarios/${this.publicId}`,
        {
          method: "PUT",
          body: { favorite: true },
        },
      );
    } catch (e) {
      throw e;
    }
  };

  // @ts-ignore
  #toggleIsFavored = async () => {
    try {
      return await clientSideAuthorizedFetch(`api/scenarios/${this.publicId}`, {
        method: "PUT",
        body: { favorite: !this.#isFavored },
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
