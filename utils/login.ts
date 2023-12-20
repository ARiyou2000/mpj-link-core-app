"use client";

import window from "@/utils/window";
import { storageConfig } from "@/storage.config";
import clientSideAuthorizedFetch from "@/utils/clientSideAuthorizedFetch";

export const loginWithCode = async (passcode: string) => {
  try {
    await clientSideAuthorizedFetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ passcode }),
    });

    window.localStorage.setItem(
      storageConfig.client.user.token.encoded,
      window.sessionStorage.getItem("next-auth.session-token") as string,
    );
  } catch (e) {
    throw e;
  }
};

export const autoLogin = () => {
  const passCode = window.localStorage.getItem(
    storageConfig.client.user.password.encoded,
  );
  if (passCode) {
    return loginWithCode(passCode);
  } else {
    throw new Error("Auto Login failed. please try using passcode");
  }
};

// export default loginWithCode;
