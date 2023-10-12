"use client";

import window from "@/utils/window";
import fetchUrl from "@/utils/fetchUrl";
import getCoreIP from "@/utils/getCoreIP";
import Register from "@/classes/registers/register";
import DeviceInfo from "@/classes/devices/deviceInfo";
import Scenario from "@/classes/scenario";
import Zone from "@/classes/zone";

type fetcherOptionsType = {
  signal: AbortSignal;
};

type getStaticDataOptionsType = fetcherOptionsType & {
  forceUpdate?: boolean;
};

type resultsType =
  | Promise<Zone[]>
  | Promise<Scenario[]>
  | Promise<DeviceInfo[]>
  | Promise<Register[]>;

const getStaticData = (
  dataTitle: string,
  dataUrl: string | null,
  options: getStaticDataOptionsType,
): resultsType => {
  const { forceUpdate = false } = options;
  const localJsonData = window.localStorage.getItem(dataTitle);
  const localData = localJsonData && JSON.parse(localJsonData);
  if (localData && !forceUpdate) {
    // console.log(`Data found for ${dataTitle} from localstorage: `, localData);
    return localData;
  } else {
    const getData = async () => {
      try {
        const url = `${getCoreIP()}/${dataUrl || dataTitle}`;

        const result = await fetchUrl(url, { signal: options.signal });
        // console.log(
        //   `Result for '${dataTitle}' with URL of ${url} has been set to localstorage: `,
        //   result,
        // );
        window.localStorage.setItem(dataTitle, JSON.stringify(result));
        return result;
      } catch (e) {
        console.error(e);
        // Return local data in case of error happening getting online data
        return localData;
        // throw e;
      }
    };
    const data = getData();
    return data;
  }
};

export const getZones = (options: fetcherOptionsType): Promise<Zone[]> =>
  getStaticData("zone", null, options);

export const getScenarios = (
  options: fetcherOptionsType,
): Promise<Scenario[]> =>
  getStaticData("scenario", null, { forceUpdate: true, ...options });

export const getFavoredScenarios = (
  options: fetcherOptionsType,
): Promise<Scenario[]> =>
  getStaticData("favoredScenario", "scenario?favorite=true", {
    forceUpdate: true,
    ...options,
  });

export const getDevices = (
  options: fetcherOptionsType,
): Promise<DeviceInfo[]> => getStaticData("device", null, options);

export const getDeviceRegisters = (
  devicePublicId: string,
  options: fetcherOptionsType,
): Promise<Register[]> =>
  getStaticData(`device/${devicePublicId}`, null, options);

export const getZoneDevices = (
  zonePublicId: string,
  options: fetcherOptionsType,
): Promise<DeviceInfo[]> =>
  getStaticData(`zone/${zonePublicId}`, null, options);

export const getZoneDeviceRegisters = (
  zonePublicId: string,
  devicePublicId: string,
  options: fetcherOptionsType,
): Promise<Register[]> =>
  getStaticData(`zone/${zonePublicId}/device/${devicePublicId}`, null, options);

export default getStaticData;
