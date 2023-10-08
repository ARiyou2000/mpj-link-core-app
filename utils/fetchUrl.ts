import window from "@/utils/window";

type fetchInitType = {
  method?: string;
  header?: object;
  next?: object;
  body?: object | string;
  signal?: AbortSignal | null;
};

type headersType = {
  "Content-Type": string;
  Authorization?: string | null;
};

const basicHeaders = {
  "Content-Type": "application/json",
};

// const nextGlobalFetchPrams = { revalidate: 1 };

const fetchUrl = async (url: string, init: fetchInitType = {}) => {
  const { method = "GET", header = {}, next = {}, body } = init;

  return new Promise(async (resolve, reject) => {
    let response;
    try {
      const headers: headersType = {
        ...basicHeaders,
        ...header,
      };

      const params = {
        ...init,
        method,
        headers,
        next: {
          // ...nextGlobalFetchPrams,
          ...next,
        },
      };

      // Replace init object body with string body
      if (method !== "GET") {
        if (typeof body === "string") {
          params.body = body;
        } else {
          params.body = JSON.stringify(body);
        }
      } else {
        delete params.body;
      }

      // attach JWT to headers Here
      const userAuth = window.localStorage.getItem(window.btoa("MPJUserT"));

      params.headers.Authorization = userAuth;

      // console.log(`Request params for ${url}: \n`, params);

      // Actual Data fetch with given url and request description
      // @ts-ignore
      response = await fetch(url, params);
      // return response;

      const result = await response.json();

      // console.log(`Response in fetchUrl for ${url}: `, response);
      // console.log(`JSON Response in fetchUrl for ${url}: `, result);

      // Following statements will run only if fetch return resolved value
      if (response.ok && result.action) {
        resolve(result.result);
      } else {
        // HTTP Response such as 404 and 500 are considered Resolved fetch data (since it will get something as answer)
        const errorMessage = JSON.stringify(result.message);
        reject(errorMessage);
      }
      // Following statements will run if fetch result is rejected or fetch has thrown an Error for connection issues
    } catch (e) {
      console.groupCollapsed(`fetchUrl error for ${url}: `);
      console.error("error : ", e);
      console.groupEnd();
      reject(
        "A network error is encountered or there is syntax error in result",
      );
    }
  });
};

export default fetchUrl;
