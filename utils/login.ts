"use client";

import window from "@/utils/window";

export const loginWithCode = async (passcode: string) => {
  try {
    await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ passcode }),
    });

    window.localStorage.setItem(
      window.btoa("MPJUserT"),
      window.sessionStorage.getItem("next-auth.session-token") as string,
    );
  } catch (e) {
    throw e;
  }
};

export const autoLogin = () => {
  const passCode = window.localStorage.getItem(window.btoa("MPJUserP"));
  if (passCode) {
    return loginWithCode(passCode);
  } else {
    throw new Error("Auto Login failed. please try using passcode");
  }
};

// export default loginWithCode;
