import window from "@/utils/window";
import fetchUrl, { FetchInitT } from "@/utils/fetchUrl";
import { storageConfig } from "@/storage.config";

const clientSideFetchUrl = async (url: string, init: FetchInitT = {}) => {
  // attach JWT to headers Here
  const userAuth = window.localStorage.getItem(
    storageConfig.client.user.token.encoded,
  );

  if (userAuth) {
    init.headers = { ...init.headers, Authorization: userAuth };
  }

  return fetchUrl(url, init);
};

export default clientSideFetchUrl;
