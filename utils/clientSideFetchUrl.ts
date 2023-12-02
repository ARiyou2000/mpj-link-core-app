import window from "@/utils/window";
import fetchUrl, { FetchInitT } from "@/utils/fetchUrl";

const clientSideFetchUrl = async (url: string, init: FetchInitT = {}) => {
  // attach JWT to headers Here
  const userAuth = window.localStorage.getItem(window.btoa("MPJUserT"));

  if (userAuth) {
    init.headers = { ...init.headers, Authorization: userAuth };
  }

  return fetchUrl(url, init);
};

export default clientSideFetchUrl;
