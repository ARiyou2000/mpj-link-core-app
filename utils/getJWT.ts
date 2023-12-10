"use server";

import { storageConfig } from "@/storage.config";
import { cookies } from "next/headers";

const getJWT = () => {
  const cookieStore = cookies();
  const jwtToken = cookieStore.get(storageConfig.server.user.token.decoded)
    ?.value;

  return jwtToken;
};

export default getJWT;
