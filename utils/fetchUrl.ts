export type FetchInitT = RequestInit & {
  next?: object;
  body?: object | string;
};

export type FetchHeadersT = {
  "Content-Type": string;
  Authorization?: string | null;
};

const basicHeaders = {
  "Content-Type": "application/json",
};

// const nextGlobalFetchPrams = { revalidate: 1 };

const fetchUrl = async (url: URL | string, init: FetchInitT = {}) => {
  const {
    method = "GET",
    headers: customHeaders,
    next = {},
    body,
    ...otherInit
  } = init;

  return new Promise(async (resolve, reject) => {
    let response;

    const headers = new Headers(customHeaders);
    headers.set("Content-Type", "application/json");

    try {
      const params = {
        method,
        headers,
        next: {
          // ...nextGlobalFetchPrams,
          ...next,
        },
        ...otherInit,
      };

      // Replace init object body with string body
      if (init?.method !== "GET") {
        if (typeof body === "string") {
          params.body = body;
        } else {
          params.body = JSON.stringify(body);
        }
      } else {
        delete params.body;
      }

      // console.log(`Request params for ${url}: \n`, params);

      // Actual Data fetch with given url and request description
      response = (await fetch(url, params)) as Response;
      // console.log(`Response in fetchUrl for ${url}: `, response);
    } catch (e) {
      console.error("Network error : ", e);
      reject({
        status: -113,
        message:
          "A network error is encountered or there is syntax error in result",
      });
    }

    // Following statements will run only if fetch return resolved value
    if (response?.ok) {
      try {
        const result = await response.json();
        // console.log(`Actual result in fetchUrl for ${url}: `, result);

        result.action ? resolve(result.result) : reject(result);
      } catch (e) {
        console.error("Error parsing response data: ", e);
        throw { status: 570, error: e, message: e };
      }
    } else {
      // HTTP Response such as 404 and 500 are considered Resolved fetch data (since it will get something as answer)
      reject(response);
    }
  });
};

export default fetchUrl;
