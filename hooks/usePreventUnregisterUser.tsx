import { cookies } from "next/headers";
import { storageConfig } from "@/storage.config";

const usePreventUnregisterUser = () => {
  const cookiesStore = cookies();
  const authToken = cookiesStore.get(storageConfig.server.user.token.decoded);

  if (!authToken) {
    throw new Error("User is unregistered!");
  }
};

export default usePreventUnregisterUser;
