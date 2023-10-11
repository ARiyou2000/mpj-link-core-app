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

// Command (Implementation)
const registerNewRequest = async (
  entityType: string,
  entityId: string,
  value: string | null,
  options: { signal: AbortSignal },
  customUrl?: string,
) => {
  try {
    const coreIP = getCoreIP();
    const result = value
      ? ((await fetchUrl(
        `${customUrl || coreIP}/command/${entityType}/${entityId}`,
        {
          method: "PUT",
          body: {value},
          signal: options.signal
        },
      )) as commandResultType)
      : ((await fetchUrl(
        `${customUrl || coreIP}/command/${entityType}/${entityId}`, {signal: options.signal}
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
  options: { signal: AbortSignal },
  customUrl?: string,
) => {
  return registerNewRequest(entityType, entityId, null, options, customUrl);
};

// Command - Set
export const registerNewSetRequest = (
  entityType: string,
  entityId: string,
  value: string,
  options: { signal: AbortSignal },
  customUrl?: string,
) => {
  return registerNewRequest(entityType, entityId, value, options, customUrl);
};

// Query
export const getRequestedData = async (
  requestId: string,
  options: {
    signal?: AbortSignal | null;
  } = {},
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
  options: {
    hasFeedback?: boolean | null;
    abortSignal?: AbortSignal | null;
  },
  customUrl?: string,
) => {
  const {hasFeedback = true, abortSignal = null} = options;

  try {
    // Register new Get/Set Command
    const reqId = value
      ? await registerNewSetRequest(entityType, entityId, value, options, customUrl)
      : await registerNewGetRequest(entityType, entityId, options, customUrl);

    if (hasFeedback) {
      // Read Data from Query
      const getActualData = async (maxTry = 50) => {
        const result = (await getRequestedData(
          reqId,
          { signal: abortSignal },
          customUrl,
        )) as queryResultType;

        if (!result.value) {
          // return getActualData();
          return await new Promise((resolve, reject) => {
            setTimeout(() => {
              // console.log(new Date().getTime());
              if (maxTry < 0) {
                reject({code: 401, message: "Couldn't read from device"});
              } else {
                resolve(getActualData(maxTry - 1));
              }
              // resolve(getActualData(maxTry - 1));
            }, 100);
          });
        }

        return result;
      };

      const res = await getActualData();
      return res;
    }
  } catch (e) {
    // This error could contain user abort request
    throw e;
  }
};

export const getDeviceData = (
  devicePId: string,
  options = {},
  customUrl?: string,
) => getEntityData("device", devicePId, null, options, customUrl);

export const getRegisterData = (
  registerPId: string,
  options = {},
  customUrl?: string,
) => getEntityData("port", registerPId, null, options, customUrl);

export const setRegisterData = (
  registerPId: string,
  value: string,
  options: {
    hasFeedback: boolean;
  } = {hasFeedback: true},
  customUrl?: string,
) => getEntityData("port", registerPId, value, options, customUrl);

export default registerNewRequest;
