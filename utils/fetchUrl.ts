import window from "@/utils/window";
import serverSideFetchUrl, { FetchInitT } from "@/utils/serverSideFetchUrl";

const clientSideFetchUrl = async (url: string, init: FetchInitT = {}) => {
  // attach JWT to headers Here
  const userAuth = window.localStorage.getItem(window.btoa("MPJUserT"));

  if (userAuth) {
    init.headers = { ...init.headers, Authorization: userAuth };
  }

  return serverSideFetchUrl(url, init);
};

export default clientSideFetchUrl;
