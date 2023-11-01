import fetchUrl from "@/utils/fetchUrl";
import getCoreIP from "@/utils/getCoreIP";

interface getDataRequest {
  customUrl: string;
  entityType: string;
  entityId: string;
}

interface entityDataRequest extends getDataRequest {
  value: string;
}

type commandResultType = {
  actionPublicId: string;
};
type queryResultType = {
  value: string | null;
};

type fetcherOptionsType = {
  signal: AbortSignal;
};

type getEntityDataOptionsType = fetcherOptionsType & {
  hasFeedback?: boolean;
};

// Command (Implementation)
const registerNewRequest = async (
  entityType: string,
  entityId: string,
  value: string | null,
  options: fetcherOptionsType,
  customUrl?: string,
) => {
  try {
    const { signal } = options;
    const coreIP = getCoreIP();
    const result = value
      ? ((await fetchUrl(
          `${customUrl || coreIP}/command/${entityType}/${entityId}`,
          {
            method: "PUT",
            body: { value },
            signal,
          },
        )) as commandResultType)
      : ((await fetchUrl(
          `${customUrl || coreIP}/command/${entityType}/${entityId}`,
          { signal },
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
  options: fetcherOptionsType,
  customUrl?: string,
) => {
  return registerNewRequest(entityType, entityId, null, options, customUrl);
};

// Command - Set
export const registerNewSetRequest = (
  entityType: string,
  entityId: string,
  value: string,
  options: fetcherOptionsType,
  customUrl?: string,
) => {
  return registerNewRequest(entityType, entityId, value, options, customUrl);
};

// Query
export const getRequestedData = async (
  requestId: string,
  options: fetcherOptionsType,
  customUrl?: string,
) => {
  try {
    const coreIP = getCoreIP();
    const result = await fetchUrl(
      `${customUrl || coreIP}/query/${requestId}`,
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
  const { hasFeedback = true, signal } = options;
  let reqId: string;

  try {
    // Register new Get/Set Command
    reqId = value
      ? await registerNewSetRequest(
          entityType,
          entityId,
          value,
          { signal },
          customUrl,
        )
      : await registerNewGetRequest(
          entityType,
          entityId,
          { signal },
          customUrl,
        );
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
      const getActualData = async (maxTry = 50) => {
        const result = (await getRequestedData(
          reqId,
          { signal },
          customUrl,
        )) as queryResultType;

        // Do query again if result is null, 0000, or NaN
        if (!result.value || !Number(result.value)) {
          return await new Promise((resolve, reject) => {
            setTimeout(() => {
              if (maxTry < 0) {
                reject({ code: 560, message: "Couldn't read from device" });
              } else {
                resolve(getActualData(maxTry - 1));
              }
            }, 150);
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
  options: fetcherOptionsType,
  customUrl?: string,
): Promise<queryResultType> =>
  getEntityData("device", devicePId, null, options, customUrl);

export const getRegisterData = (
  registerPId: string,
  options: fetcherOptionsType,
  customUrl?: string,
) => getEntityData("port", registerPId, null, options, customUrl);

// Set only need 'hasFeedback'
const mockController = new AbortController();
export const setRegisterData = (
  registerPId: string,
  value: string,
  options: getEntityDataOptionsType,
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
