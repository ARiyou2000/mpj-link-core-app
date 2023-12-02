"use server";

import fetchUrl, { FetchInitT } from "@/utils/fetchUrl";
import { coreAdress } from "@/utils/getCoreAddress";
import { cookies } from "next/headers";

const authorizedFetch = async (url: string, init: FetchInitT = {}) => {
  const { headers = {} } = init;

  const cookieStore = cookies();
  const jwtToken = cookieStore.get("jwt-token")?.value;

  return await fetchUrl(`${coreAdress}/${url}`, {
    ...init,
    headers: {
      ...headers,
      Authorization: jwtToken,
    },
  });
};

export default authorizedFetch;
