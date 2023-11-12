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
      response = (await fetch(`${coreIP}/login`, params)) as Response;
    } catch (e) {
      console.error("Network error : ", e);
      reject({
        code: 555,
        message:
          "A network error is encountered or there is syntax error in result",
      });
    }

    // Following statements will run only if fetch return resolved value
    if (response?.ok) {
      try {
        const result = await response.json();
        if (result.action) {
          window.localStorage.setItem(
            window.btoa("MPJUserT"),
            response.headers.get("Authorization") as string,
          );
          resolve(result);
        } else {
          reject("Response action is `false`!");
        }
      } catch (e) {
        console.error("Error parsing response data: ", e);
        throw e;
      }
    } else {
      // HTTP Response such as 404 and 500 are considered Resolved fetch data (since it will get something as answer)
      reject({ code: response?.status });
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
