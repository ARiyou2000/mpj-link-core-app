"use client";

import window from "@/utils/window";
import getCoreIP from "@/utils/getCoreIP";

const myHeaders = {
  "Content-Type": "application/json",
};

export const loginWithCode = async (passCode: string) => {
  const base64data = window.btoa(`user:${passCode}`);

  return new Promise(async (resolve, reject) => {
    let response;
    try {
      const params = {
        headers: {
          ...myHeaders,
          Authorization: `Basic ${base64data}`,
        },
      };

      const coreIP = getCoreIP();

      // Actual Data fetch with given url and request description
      response = await fetch(`${coreIP}/login`, params);

      const result = await response.json();

      // Following statements will run only if fetch return resolved value
      if (response.ok && result.action) {
        window.localStorage.setItem(
          window.btoa("MPJUserT"),
          response.headers.get("Authorization") as string,
        );
        resolve(result);
      } else {
        // HTTP Response such as 404 and 500 are considered Resolved fetch data (since it will get something as answer)
        const errorMessage = result && JSON.stringify(result.message);
        reject({ code: response.status, message: errorMessage });
      }
      // Following statements will run if fetch result is rejected or fetch has thrown an Error for connection issues
    } catch (e) {
      console.groupCollapsed("fetchUrl error : ");
      console.error("error : ", e);
      console.groupEnd();
      reject({
        code: 555,
        message:
          "A network error is encountered or there is syntax error in result",
      });
    }
  });
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
