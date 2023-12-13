"use client";

import fetchUrl, { FetchInitT } from "@/utils/fetchUrl";
import { storageConfig } from "@/storage.config";
import clientCookies from "@/utils/clientCookies";

const clientSideAuthorizedFetch = async (
  url: string,
  init: FetchInitT = {},
) => {
  // attach JWT to headers Here
  const jwtToken = clientCookies.get(storageConfig.client.user.token.decoded);

  const headers = new Headers(init?.headers);

  if (jwtToken) {
    headers.set("Authorization", jwtToken);
  }
  return await fetchUrl(url, {
    ...init,
    headers,
  });
};

export default clientSideAuthorizedFetch;
