"use client";

import window from "@/utils/window";
import fetchUrl from "@/utils/fetchUrl";
import getCoreIP from "@/utils/getCoreIP";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import Scenario from "@/classes/scenario";
import Zone from "@/classes/zone";
import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";

type fetcherOptionsType = {
  signal: AbortSignal;
};

type getStaticDataOptionsType = fetcherOptionsType & {
  forceUpdate?: boolean;
};

type resultsType =
  | Promise<Zone[]>
  | Promise<Scenario[]>
  | Promise<ServerSideDeviceInfoT[]>
  | Promise<ServerSideRegisterInfoT[]>;

const getStaticData = (
  dataTitle: string,
  dataUrl: string | null,
  options: getStaticDataOptionsType,
): resultsType => {
  const { forceUpdate = false, signal } = options;

  try {
    const localJsonData = window.localStorage.getItem(dataTitle);
    const localData = localJsonData && JSON.parse(localJsonData);

    const getData = async () => {
      try {
        const url = `${getCoreIP()}/${dataUrl || dataTitle}`;

        const result = await fetchUrl(url, { signal: signal });
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

    if (localData && !forceUpdate) {
      // console.log(`Data found for ${dataTitle} from localstorage: `, localData);
      return localData;
    } else {
      const data = getData();
      return data;
    }
  } catch (e) {
    // This might happen when you parse wrong json data from local storage (There is data, but it is in wrong format)
    console.error(e);
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
): Promise<ServerSideDeviceInfoT[]> => getStaticData("device", null, options);

export const getDeviceRegisters = (
  devicePublicId: string,
  options: fetcherOptionsType,
): Promise<ServerSideRegisterInfoT[]> =>
  getStaticData(`device/${devicePublicId}`, null, options);

export const getZoneDevices = (
  zonePublicId: string,
  options: fetcherOptionsType,
): Promise<ServerSideDeviceInfoT[]> =>
  getStaticData(`zone/${zonePublicId}`, null, options);

export const getZoneDeviceRegisters = (
  zonePublicId: string,
  devicePublicId: string,
  options: fetcherOptionsType,
): Promise<ServerSideRegisterInfoT[]> =>
  getStaticData(`zone/${zonePublicId}/device/${devicePublicId}`, null, options);

export default getStaticData;
