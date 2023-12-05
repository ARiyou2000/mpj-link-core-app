"use server";

import fetchUrl, { FetchInitT } from "@/utils/fetchUrl";
import { coreAdress } from "@/utils/getCoreAddress";
import { cookies } from "next/headers";
import { storageConfig } from "@/storage.config";

const authorizedFetch = async (url: string, init: FetchInitT = {}) => {
  const { headers = {} } = init;

  const cookieStore = cookies();
  const jwtToken = cookieStore.get(storageConfig.server.user.token.decoded)
    ?.value;

  return await fetchUrl(`${coreAdress}/${url}`, {
    ...init,
    headers: {
      ...headers,
      Authorization: jwtToken,
    },
  });
};

export default authorizedFetch;
