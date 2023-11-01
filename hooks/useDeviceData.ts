"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  getDeviceRegisters,
  getDevices,
  getZoneDeviceRegisters,
  getZoneDevices,
} from "@/utils/getStaticData";
import { getDeviceData } from "@/utils/queueHelper";
import { useToast } from "@/components/ui/use-toast";
import Register from "@/classes/registers/register";
import DeviceInfo from "@/classes/devices/deviceInfo";
import useZigbeeDeviceData from "@/hooks/useZigbeeDeviceData";

export const getRegistersValueFormString = (str: string) => {
  return str.match(/.{1,2}/g) ?? [];
};

type optionsType = {
  hasFeedback?: boolean;
  assignmentCallback?:
    | ((register: Register, registersValueArray: string[]) => string)
    | ((register: Register, deviceState: Object) => string)
    | null;
  deviceType?: "modbus" | "zigbee";
};

const config = {
  intervalTimeOnCallWithoutError: 100,
  intervalTimeOnCallWithError: 500,
};
const useDeviceData = (options: optionsType = {}) => {
  const {
    hasFeedback = true,
    assignmentCallback = null,
    deviceType = "modbus",
  } = options;

  const router = useRouter();
  const { toast } = useToast();

  const [deviceRegistersInfoAndData, setDeviceRegistersInfoAndData] =
    useState<Register[]>();
  const [deviceInfo, setDeviceInfo] = useState<{
    name: string;
    description: string;
  }>();

  // Check if there is query params not. if there is use get getZoneDeviceRegisters instead of getDeviceRegisters
  const searchParams = useSearchParams();
  const zonePublicId = searchParams?.get("zpid");

  // Device Public ID
  const urlParams = useParams();
  const devicePId = urlParams?.devicePublicId as string;

  // // // // // // // // // // // Replace manual fetching data from methods with passing the methods to useStatic Data Hook
  // // Device registers list and info form local storage
  // const deviceRegistersFromStorage = !!zonePublicId
  //   ? useStaticData((signal) =>
  //       getZoneDeviceRegisters(zonePublicId, devicePId, { signal }),
  //     )
  //   : useStaticData((signal) => getDeviceRegisters(devicePId, { signal }));

  const isPagePresent = useRef(true);
  const isThereFetchDataError = useRef(false);

  const zigbeeData = useZigbeeDeviceData(devicePId, deviceType === "zigbee");

  useEffect(() => {
    isPagePresent.current = true;

    let recallTimeoutId: ReturnType<typeof setTimeout>;

    let controller = new AbortController();
    let signal = controller.signal;

    const resetOnPageLeave = () => {
      isPagePresent.current = false;
      clearTimeout(recallTimeoutId);
      controller.abort("Exiting a page that use 'useDeviceData' hook");
    };
    const pushBackOnError = (message?: string) => {
      resetOnPageLeave();

      toast({
        variant: "destructive",
        title: message || "اطلاعات از دستگاه خوانده نشد",
      });
      setTimeout(() => {
        router.back();
        // router.push(!!zonePublicId ? `/zones/${zonePublicId}` : "/devices");
      }, 1500);
    };

    const getData = async (maxTry = 10) => {
      console.log("!!!!!!!!!!!!!!!!!!!Call to get data!!!!!!!!!!!!!!!!!!!");

      console.time();
      // Reset to initial state on retying
      // --> This must not reset so method timeout won't be call method again -- isPagePresent.current = true;
      isThereFetchDataError.current = false;
      clearTimeout(recallTimeoutId);

      console.log("signal before renew", signal.aborted);
      if (signal.aborted) {
        controller = new AbortController();
      }
      // signal = controller.signal;
      console.log("signal after renew", signal.aborted);

      // Controller must be placed in 'getData' function so that we renew controller on every call
      // controller = new AbortController();
      try {
        // -------------------- Device and Its Registers Info --------------------

        // All Device list and info form local storage
        // Make it read form the zone device list instead of all devices if zone is present (For better performance)
        const deviceListFromStorage = !!zonePublicId
          ? await getZoneDevices(zonePublicId, { signal })
          : await getDevices({ signal });

        // Find device form list by device public ID
        const deviceObjFromStorage = deviceListFromStorage?.find(
          (deviceInfo: DeviceInfo) => {
            return deviceInfo.publicId === devicePId;
          },
        ) as DeviceInfo;

        setDeviceInfo({
          name: deviceObjFromStorage.name,
          description: deviceObjFromStorage.description,
        });

        // -------------------- Device Registers Value --------------------
        try {
          // Device registers list and info form local storage
          const deviceRegistersFromStorage = !!zonePublicId
            ? await getZoneDeviceRegisters(zonePublicId, devicePId, { signal })
            : await getDeviceRegisters(devicePId, { signal });

          // Get device data only if it has feedback
          if (deviceType === "modbus") {
            if (hasFeedback) {
              try {
                // Device registers current value form server
                const deviceRegistersValue = await getDeviceData(devicePId, {
                  signal,
                });

                // Get registers value from string
                const registersStringValue = deviceRegistersValue.value;
                if (!registersStringValue || !Number(registersStringValue)) {
                  throw new Error("Registers value is null");
                }

                const registersValueArray =
                  getRegistersValueFormString(registersStringValue);

                // Assign each value to its register object
                deviceRegistersFromStorage.forEach((register, index) => {
                  if (assignmentCallback) {
                    register.value = assignmentCallback(
                      register,
                      registersValueArray,
                    );
                  } else {
                    // Register number represent its value index in value string array
                    register.value =
                      registersValueArray[Number(register.number) - 1];
                  }
                });

                // This must place here to prevent showing registers list to user on error getting data from server
                setDeviceRegistersInfoAndData(deviceRegistersFromStorage);
              } catch (e: {
                code?: number;
                message: string;
              }) {
                // Do not set isThereFetchDataError to true. Because this error will usually happen on Aborted requests
                // isThereFetchDataError.current = true;

                // If Request get aborted this catcher will run - Check queryHelper.ts->getEntityData->getActualData
                // This will happen on 50 null constitutive null query result
                if (e.code && e.code === 560) {
                  // pushBackOnError();
                  // throw the error so it will try again on 50 null query
                  // DO NOT ABORT ON 50 NULL REQUEST OR APP WILL STOP controller.abort();
                  throw e;
                } else if (e.code && e.code === 561) {
                  // in case request fails on command itself or there is network error
                  console.error(e);
                  // throw e;
                }

                console.group("Error getting device data: ");
                console.info(
                  "This error could happen on user abort request on leaving page",
                );
                console.error(e);
                console.groupEnd();
              }
            } else {
              // If device doesn't have feedback set registers info
              setDeviceRegistersInfoAndData(deviceRegistersFromStorage);
            }
          } else if (deviceType === "zigbee") {
            try {
              if (!!zigbeeData) {
                const dataObject = JSON.parse(zigbeeData.toString());
                deviceRegistersFromStorage.forEach((register, index) => {
                  if (assignmentCallback && dataObject) {
                    register.value = assignmentCallback(register, dataObject);
                  }
                });
                setDeviceRegistersInfoAndData(deviceRegistersFromStorage);
              }
            } catch (e) {
              console.error("Error parsing mqtt data: ", zigbeeData, e);
            }
          }
        } catch (e) {
          isThereFetchDataError.current = true;
          console.error(
            "Error getting device registers by device publicID from localstorage: ",
            e,
          );
        }
      } catch (e) {
        isThereFetchDataError.current = true;
        console.error("Error getting device info: ", e);
      }

      if (isPagePresent.current) {
        if (!isThereFetchDataError.current) {
          console.log("with no error");
          recallTimeoutId = setTimeout(
            getData,
            config.intervalTimeOnCallWithoutError,
          );
        } else {
          console.log("-----> with error", maxTry);
          recallTimeoutId = setTimeout(() => {
            getData(maxTry - 1);
          }, config.intervalTimeOnCallWithError);
        }

        if (maxTry < 0) {
          resetOnPageLeave();
          isThereFetchDataError.current = true;
          pushBackOnError("ارتباط با دستگاه با مشکل مواجه شد");
        }
      }
    };

    getData();

    // const myInterval = setInterval(getData, 200);
    return () => {
      console.warn("Exiting useDeviceData");
      console.log("zigbeeData: ", zigbeeData);
      resetOnPageLeave();
    };
  }, [zigbeeData]);

  return [deviceInfo, deviceRegistersInfoAndData];
};

export default useDeviceData;
