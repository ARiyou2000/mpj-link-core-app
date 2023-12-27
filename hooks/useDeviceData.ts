"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import useZigbeeDeviceData from "@/hooks/useZigbeeDeviceData";
import Device from "@/classes/devices/device";
import { Protocols } from "@/classes/devices/protocols";
import { ServerSideRegisterInfoT } from "@/classes/devices/register";
import useForceUpdateUI from "@/hooks/useForceUpdateUI";
import getDeviceInstance from "@/utils/getDeviceInstance";

export const getRegistersValueFormString = (str: string): string[] | [] => {
  return str.match(/.{1,2}/g) ?? [];
};

const config = {
  intervalTimeOnCallWithoutError: 200,
  intervalTimeOnCallWithError: 500,
};

const useDeviceData = (
  info: ServerSideDeviceInfoT,
  registersList: ServerSideRegisterInfoT[],
) => {
  const device = useMemo(() => getDeviceInstance(info, registersList), []);

  const router = useRouter();
  const isPagePresent = useRef(true);
  const isThereFetchDataError = useRef(false);

  const generalErrorToaster = (message?: string) => {
    toast.error(message || "اطلاعات از دستگاه خوانده نشد");
    setTimeout(() => {
      router.back();
      // router.push(!!zonePublicId ? `/zones/${zonePublicId}` : "/devices");
    }, 1500);
  };

  const [deviceInstance, setDeviceInstance] = useState<Device>();

  // Device Public ID
  const urlParams = useParams();
  const devicePId = urlParams?.devicePublicId as string;

  const zigbeeData = useZigbeeDeviceData(
    devicePId,
    device?.protocol === Protocols.zigbee,
  );
  const zigbeeDataJson = JSON.stringify(zigbeeData);

  const forceUpdateUI = useForceUpdateUI();

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
      generalErrorToaster(message);
    };

    const getData = async (maxTry = 10) => {
      // Reset to initial state on retying
      // --> This must not reset so method timeout won't be call method again -- isPagePresent.current = true;
      isThereFetchDataError.current = false;
      clearTimeout(recallTimeoutId);

      if (signal.aborted) {
        // Controller must be placed in 'getData' function so that we renew controller on every call
        controller = new AbortController();
      }
      // signal = controller.signal;

      try {
        // -------------------- Device Registers Value --------------------
        if (device && device.registers) {
          // Get device data only if it has feedback
          try {
            await device.getData({ signal }, zigbeeData);
            // This must place here to prevent showing registers list to user on error getting data from server
            setDeviceInstance(device);

            // Since device instance will not change reference we need to force update ui
            // This must be replaced by creating listener in child component to prevent uselessly re-rendering hole tree on every call
            forceUpdateUI();
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
        }
      } catch (e) {
        isThereFetchDataError.current = true;
        console.error("Error getting device info: ", e);
      }

      if (isPagePresent.current) {
        if (!isThereFetchDataError.current) {
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
      resetOnPageLeave();
    };
  }, [zigbeeDataJson]);

  return deviceInstance;
};

export default useDeviceData;
