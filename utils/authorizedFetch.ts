"use server";

import fetchUrl, { FetchInitT } from "@/utils/fetchUrl";
import getJWT from "@/utils/getJWT";

const authorizedFetch = async (url: string, init: FetchInitT = {}) => {
  const jwtToken = getJWT();
  const headers = new Headers(init?.headers);

  if (jwtToken) {
    headers.set("Authorization", jwtToken);
  }
  return await fetchUrl(url, {
    ...init,
    headers,
  });
};

export default authorizedFetch;
