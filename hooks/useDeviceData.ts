"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  getDeviceRegisters,
  getDevices,
  getZoneDeviceRegisters,
} from "@/utils/getStaticData";
import { getDeviceData } from "@/utils/queueHelper";
import { useToast } from "@/components/ui/use-toast";
import Register from "@/classes/registers/register";

export const getRegistersValueFormString = (str: string) => {
  return str.match(/.{1,2}/g) ?? [];
};

type optionsType = {
  hasFeedback?: boolean;
  assignmentCallback?:
    | ((register: Register, registersValueArray: string[]) => string)
    | null;
};

const useDeviceData = (
  options: optionsType = { hasFeedback: true, assignmentCallback: null },
) => {
  const { hasFeedback = true, assignmentCallback = null } = options;

  const router = useRouter();
  const urlParams = useParams();
  const { toast } = useToast();

  const [deviceRegistersInfoAndData, setDeviceRegistersInfoAndData] = useState(
    [],
  );
  const [deviceInfo, setDeviceInfo] = useState("");

  // Check if there is query params not. if there is use get getZoneDeviceRegisters instead of getDeviceRegisters
  const searchParams = useSearchParams();
  const zonePublicId = searchParams?.get("zpid");

  const isPagePresent = useRef(true);
  const isThereFetchDataError = useRef(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    let recallTimeoutId = 0;
    const getData = async (maxTry = 10) => {
      clearTimeout(recallTimeoutId);
      try {
        // Device Public ID
        const devicePId = urlParams?.devicePublicId;

        // -------------------- Device and Its Registers Info --------------------

        // ################# Make it read form the zone device list if possible instead of all devices

        // All Device list and info form local storage
        const deviceListFromStorage = getDevices();
        // Find device form list by device public ID
        const deviceObjFromStorage = deviceListFromStorage?.find(
          (deviceInfo) => {
            return deviceInfo.publicId === devicePId;
          },
        );

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

          try {
            // Get device data only if it has feedback
            if (hasFeedback) {
              // Device registers current value form server
              const deviceRegistersValue = await getDeviceData(devicePId, {
                abortSignal: signal,
                shouldContinueQuery: true,
              });

              // Get registers value from string
              const registersStringValue = deviceRegistersValue.value;
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
                  register.value = registersValueArray[register.number - 1];
                }
              });
            }

            // This must place here to prevent showing registers list to user on error getting data from server
            setDeviceRegistersInfoAndData(deviceRegistersFromStorage);
          } catch (e) {
            // If Request get aborted this catcher will run
            if (e.code && e.code === 401) {
              toast({
                variant: "destructive",
                title: "اطلاعات از دستگاه خوانده نشد",
              });
              setTimeout(() => {
                router.back();
              }, 1500);
            }
            console.group("Error getting device data: ");
            console.info(
              "This error could happen on user abort request on leaving page",
            );
            console.error(e);
            console.groupEnd();
          }
        } catch (e) {
          console.error(
            "Error getting device registers by device publicID form localstorage: ",
            e,
          );
        }
      } catch (e) {
        isThereFetchDataError.current = true;
        console.error("Error getting device info: ", e);
      }

      if (isPagePresent.current) {
        if (!isThereFetchDataError.current) {
          recallTimeoutId = setTimeout(getData, 100);
        } else {
          recallTimeoutId = setTimeout(() => {
            getData(maxTry - 1);
          }, 500);
        }

        if (maxTry < 0) {
          toast({
            variant: "destructive",
            title: "اطلاعات از دستگاه خوانده نشد",
          });
          setTimeout(() => {
            router.back();
          }, 1500);
        }
      }
    };

    getData();

    // const myInterval = setInterval(getData, 200);
    return () => {
      isPagePresent.current = false;
      // clearInterval(myInterval);
      clearTimeout(recallTimeoutId);
      controller.abort();
    };
  }, []);

  return [deviceInfo, deviceRegistersInfoAndData];
};

export default useDeviceData;
