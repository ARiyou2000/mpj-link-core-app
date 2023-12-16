"use server";

import fetchUrl from "@/utils/fetchUrl";

const config = {
  retryNullQueryInterval: 200,
  maxTryForNullQuery: 20,
};

type commandResultType = {
  actionPublicId: string;
};
type queryResultType = {
  value: string | null;
};

export type getDataOptionsType = RequestInit & {
  signal: AbortSignal;
};

type setDataOptionsType = {
  hasFeedback?: boolean;
};

type getEntityDataOptionsType = getDataOptionsType & setDataOptionsType;

// Command (Implementation)
const registerNewRequest = async (
  entityType: string,
  entityId: string,
  value: string | null,
  options: getDataOptionsType,
  customUrl?: string,
) => {
  try {
    const result = value
      ? ((await fetchUrl(
          `${
            customUrl || process.env.NEXT_CORE_ABSOLUTE_URL
          }/command/${entityType}/${entityId}`,
          {
            method: "PUT",
            body: { value },
            ...options,
          },
        )) as commandResultType)
      : ((await fetchUrl(
          `${
            customUrl || process.env.NEXT_CORE_ABSOLUTE_URL
          }/command/${entityType}/${entityId}`,
          options,
        )) as commandResultType);

    return result.actionPublicId;
  } catch (e) {
    throw e;
  }
};

// Command - Get
export const registerNewGetRequest = (
  entityType: string,
  entityId: string,
  options: getDataOptionsType,
  customUrl?: string,
) => {
  return registerNewRequest(entityType, entityId, null, options, customUrl);
};

// Command - Set
export const registerNewSetRequest = (
  entityType: string,
  entityId: string,
  value: string,
  options: getDataOptionsType,
  customUrl?: string,
) => {
  return registerNewRequest(entityType, entityId, value, options, customUrl);
};

// Query
export const getRequestedData = async (
  requestId: string,
  options: getDataOptionsType,
  customUrl?: string,
) => {
  try {
    const result = await fetchUrl(
      `${customUrl || process.env.NEXT_CORE_ABSOLUTE_URL}/query/${requestId}`,
      options,
    );
    return result;
  } catch (e) {
    throw e;
  }
};

// --------- Main Request handler ----------
export const getEntityData = async (
  entityType: string,
  entityId: string,
  value: string | null,
  options: getEntityDataOptionsType,
  customUrl?: string,
) => {
  const { hasFeedback = true } = options;
  let reqId: string;

  // Command can omit the original signal. you can replace it with mockController signal
  try {
    // Register new Get/Set Command
    reqId = value
      ? await registerNewSetRequest(
          entityType,
          entityId,
          value,
          options,
          customUrl,
        )
      : await registerNewGetRequest(entityType, entityId, options, customUrl);
  } catch (e) {
    // This error could contain user abort request
    console.log("Failed on command. (There is likely a connection error): ", e);
    throw {
      code: 561,
      message: "Couldn't result for command on device",
      originalErrorObject: e,
    };
  }

  if (hasFeedback) {
    try {
      // Read Data from Query
      const getActualData = async (maxTry = config.maxTryForNullQuery) => {
        const result = (await getRequestedData(
          reqId,
          options,
          customUrl,
        )) as queryResultType;

        // // Reject immediately if device data is invalid (`0000` or `NaN`)
        // if (!Number(result.value)) {
        //   throw new Error({ code: 560, message: "Couldn't read from device" });
        // }

        if (!result) {
          //  If the result is empty
        } else if (!result.value || !Number(result.value)) {
          // Do query again if result is null, `0000`, or `NaN`
          return await new Promise((resolve, reject) => {
            if (maxTry < 0) {
              reject({ code: 560, message: "Couldn't read from device" });
            } else {
              setTimeout(() => {
                resolve(getActualData(maxTry - 1));
              }, config.retryNullQueryInterval);
            }
          });
        }
        return result;
      };

      const res = await getActualData();
      return res;
    } catch (e) {
      console.error("failed to get query result: ", e);
      throw e;
    }
  }
};

// Set only need 'signal'
export const getDeviceData = (
  devicePId: string,
  options: getDataOptionsType,
  customUrl?: string,
): Promise<queryResultType> =>
  getEntityData("device", devicePId, null, options, customUrl);

export const getRegisterData = (
  registerPId: string,
  options: getDataOptionsType,
  customUrl?: string,
) => getEntityData("port", registerPId, null, options, customUrl);

// Set only need 'hasFeedback'
const mockController = new AbortController();
export const setRegisterData = (
  registerPId: string,
  value: string,
  options?: setDataOptionsType,
  customUrl?: string,
) =>
  getEntityData(
    "port",
    registerPId,
    value,
    { signal: mockController.signal, ...options },
    customUrl,
  );

export default registerNewRequest;
