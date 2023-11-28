export type FetchInitT = {
  method?: string;
  headers?: object;
  next?: object;
  body?: object | string;
  signal?: AbortSignal | null;
};

export type FetchHeadersT = {
  "Content-Type": string;
  Authorization?: string | null;
};

const basicHeaders = {
  "Content-Type": "application/json",
};

// const nextGlobalFetchPrams = { revalidate: 1 };

const fetchUrl = async (url: string, init: FetchInitT = {}) => {
  const { method = "GET", headers: customHeaders = {}, next = {}, body } = init;

  return new Promise(async (resolve, reject) => {
    let response;
    try {
      const headers: FetchHeadersT = {
        ...basicHeaders,
        ...customHeaders,
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

      // // attach JWT to headers Here
      // const userAuth = window.localStorage.getItem(window.btoa("MPJUserT"));
      //
      // if (userAuth) {
      //   params.headers.Authorization = userAuth;
      // }

      // console.log(`Request params for ${url}: \n`, params);

      // Actual Data fetch with given url and request description
      // @ts-ignore
      console.log("+++++++++++++++++++++++++++++++++++");
      console.log(url, params);
      response = (await fetch(url, params)) as Response;
      // console.log(`Response in fetchUrl for ${url}: `, response);
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
        // console.log(`JSON Response in fetchUrl for ${url}: `, result);

        // Following statements will run only if fetch return resolved value
        if (result.action) {
          resolve(result.result);
        } else {
          // HTTP Response such as 404 and 500 are considered Resolved fetch data (since it will get something as answer)
          const errorMessage = JSON.stringify(result.message);
          reject(`Response action is 'false'!: ${errorMessage}`);
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

export default fetchUrl;
