"use client";

import window from "@/utils/window";
import fetchUrl from "@/utils/fetchUrl";
import getCoreIP from "@/utils/getCoreIP";

type fetcherOptionsType = {
  signal: AbortSignal;
};

type getStaticDataOptionsType = fetcherOptionsType & {
  forceUpdate?: boolean;
};

const getStaticData = (
  dataTitle: string,
  dataUrl: string | null,
  options: getStaticDataOptionsType = {
    forceUpdate: false,
    signal: new AbortSignal(),
  },
) => {
  const localJsonData = window.localStorage.getItem(dataTitle);
  const localData = localJsonData && JSON.parse(localJsonData);
  if (localData && !options.forceUpdate) {
    // console.log(`Data found for ${dataTitle} from localstorage: `, localData);
    return localData;
  } else {
    const getData = async () => {
      try {
        const url = `${getCoreIP()}/${dataUrl || dataTitle}`;

        const result = await fetchUrl(url, { signal: options.signal });
        console.log(
          `Result for '${dataTitle}' with URL of ${url} has been set to localstorage: `,
          result,
        );
        window.localStorage.setItem(dataTitle, JSON.stringify(result));
        return result;
      } catch (e) {
        console.error(e);
        return localData;
      }
    };
    const data = getData();
    return data;
  }
};

export const getZones = (options: fetcherOptionsType) =>
  getStaticData("zone", null, { ...options });

export const getScenarios = (options: fetcherOptionsType) =>
  getStaticData("scenario", null, { forceUpdate: true, ...options });

export const getFavoredScenarios = (options: fetcherOptionsType) =>
  getStaticData("favoredScenario", "scenario?favorite=true", {
    forceUpdate: true,
    ...options,
  });

export const getDevices = (options: fetcherOptionsType) =>
  getStaticData("device", null, { ...options });

export const getDeviceRegisters = (
  devicePublicId: string,
  options: fetcherOptionsType,
) => getStaticData(`device/${devicePublicId}`, null, { ...options });

export const getZoneDevices = (
  zonePublicId: string,
  options: fetcherOptionsType,
) => getStaticData(`zone/${zonePublicId}`, null, { ...options });

export const getZoneDeviceRegisters = (
  zonePublicId: string,
  devicePublicId: string,
  options: fetcherOptionsType,
) =>
  getStaticData(`zone/${zonePublicId}/device/${devicePublicId}`, null, {
    ...options,
  });

export default getStaticData;
