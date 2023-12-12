const getAuthorizationHeaders = (requestHeaders: Headers) => {
  // const reqHeaders = new Headers(requestHeaders);
  const resHeaders = new Headers();

  const authHeader = requestHeaders?.get("Authorization");
  if (!authHeader) {
    throw new Error("No Authorization header present on request.");
  }

  resHeaders.set("Authorization", authHeader);
  // return { Authorization: authHeader };
  return resHeaders;
};

export default getAuthorizationHeaders;
