"use server";

import fetchUrl, { FetchInitT } from "@/utils/fetchUrl";
import { coreAddress } from "@/utils/getCoreAddress";
import getJWT from "@/utils/getJWT";

const authorizedFetch = async (url: string, init: FetchInitT = {}) => {
  const { headers = {} } = init;

  const jwtToken = getJWT();

  return await fetchUrl(`${coreAddress}/${url}`, {
    ...init,
    headers: {
      ...headers,
      Authorization: jwtToken,
    },
  });
};

export default authorizedFetch;
