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
import {
  DevicesType,
  ServerSideDeviceInfoT,
} from "@/classes/devices/deviceInfo";
import useZigbeeDeviceData from "@/hooks/useZigbeeDeviceData";
import Device from "@/classes/devices/device";
import ModbusSwitch from "@/classes/devices/modbus/switch";
import ZigbeeSwitch from "@/classes/devices/zigbee/switch";
import ModbusRelay from "@/classes/devices/modbus/relay";
import ModbusThermostat from "@/classes/devices/modbus/thermostat";
import { Protocols } from "@/classes/protocols";
import ModbusMusicPlayer from "@/classes/devices/modbus/musicPlayer";
import ZigbeeRelay from "@/classes/devices/zigbee/relay";
import ZigbeeCurtains from "@/classes/devices/zigbee/curtains";
import IrSplit from "@/classes/devices/modbus/irSplit";
import IrHood from "@/classes/devices/modbus/irHood";
import ModbusDuctSplit from "@/classes/devices/modbus/ductSplit";
import useStaticData from "@/hooks/useStaticData";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import useForceUpdateUI from "@/hooks/useForceUpdateUI";

export const getRegistersValueFormString = (str: string): string[] | [] => {
  return str.match(/.{1,2}/g) ?? [];
};

const config = {
  intervalTimeOnCallWithoutError: 200,
  intervalTimeOnCallWithError: 500,
};

const getDeviceInstatnce = (
  info: ServerSideDeviceInfoT,
  registersList: ServerSideRegisterInfoT[],
) => {
  const props = [
    info?.publicId,
    info?.name,
    info?.description,
    info?.type,
    registersList,
  ] as const;

  let Device: Device;
  switch (Number(info?.type)) {
    case DevicesType.modbus_switch_1p:
    case DevicesType.modbus_switch_2p:
    case DevicesType.modbus_switch_3p:
    case DevicesType.modbus_switch_4p:
    case DevicesType.modbus_switch_6p:
      Device = new ModbusSwitch(...props);
      break;
    case DevicesType.zigbee_switch_3p:
      Device = new ZigbeeSwitch(...props);
      break;
    case DevicesType.modbus_relay:
      Device = new ModbusRelay(...props);
      break;
    case DevicesType.zigbee_relay:
      Device = new ZigbeeRelay(...props);
      break;
    case DevicesType.modbus_thermostat:
      Device = new ModbusThermostat(...props);
      break;
    case DevicesType.modbus_music_player:
      Device = new ModbusMusicPlayer(...props);
      break;
    case DevicesType.modbus_duct_split:
      Device = new ModbusDuctSplit(...props);
      break;
    case DevicesType.ir_split:
      Device = new IrSplit(...props);
      break;
    case DevicesType.ir_hood:
      Device = new IrHood(...props);
      break;
    case DevicesType.modbus_curtains:
      Device = new ZigbeeSwitch(...props);
      break;
    case DevicesType.zigbee_curtains:
      Device = new ZigbeeCurtains(...props);
      break;
    case DevicesType.invalid:
    default:
      throw new Error("device type is not mapped with a class!");
  }
  return Device;
};

const useDeviceData = () => {
  const router = useRouter();
  const { toast } = useToast();
  const isPagePresent = useRef(true);
  const isThereFetchDataError = useRef(false);

  const generalErrorToaster = (message?: string) => {
    toast({
      variant: "destructive",
      title: message || "اطلاعات از دستگاه خوانده نشد",
    });
    setTimeout(() => {
      router.back();
      // router.push(!!zonePublicId ? `/zones/${zonePublicId}` : "/devices");
    }, 1500);
  };

  const [deviceInstance, setDeviceInstance] = useState<Device>();

  // Check if there is query params not. if there is use get getZoneDeviceRegisters instead of getDeviceRegisters
  const searchParams = useSearchParams();
  const zonePublicId = searchParams?.get("zpid");

  // Device Public ID
  const urlParams = useParams();
  const devicePId = urlParams?.devicePublicId as string;

  // -------------------- Device and Its Registers Info --------------------

  // Get all Devices list and info from local storage (Search only device in that zone if possible for better performance.)
  const [deviceListFromStorage] = useStaticData(async ({ signal }) => {
    if (!!zonePublicId) {
      return await getZoneDevices(zonePublicId, { signal });
    }
    return await getDevices({ signal });
  }) as [ServerSideDeviceInfoT[]];

  // Device registers list and info form local storage
  const [deviceRegistersFromStorage] = useStaticData(async ({ signal }) => {
    if (!!zonePublicId) {
      return await getZoneDeviceRegisters(zonePublicId, devicePId, { signal });
    }
    return await getDeviceRegisters(devicePId, { signal });
  }) as [ServerSideRegisterInfoT[]];
  const deviceRegistersJsonFromStorage = JSON.stringify(deviceListFromStorage);

  // Find device info
  const deviceObjFromStorage = deviceListFromStorage?.find((deviceInfo) => {
    return deviceInfo?.publicId === devicePId;
  });
  const deviceJsonFromStorage = JSON.stringify(deviceObjFromStorage);

  // const [device, setDevice] = useState<Device | null>(null);
  // useEffect(() => {
  let device: Device | undefined;
  if (
    deviceObjFromStorage &&
    deviceRegistersFromStorage &&
    deviceRegistersFromStorage.length > 0
  ) {
    // try {
    device = getDeviceInstatnce(
      deviceObjFromStorage,
      deviceRegistersFromStorage,
    );
    // setDevice(Device);
    // } catch (e) {
    //   console.error(e);
    //   isPagePresent.current = false;
    //   isThereFetchDataError.current = true;
    //   generalErrorToaster();
    // }
  }
  // }, [deviceJsonFromStorage]);
  const deviceJSON = JSON.stringify(device);

  const zigbeeData = useZigbeeDeviceData(
    devicePId,
    device?.protocol === Protocols.zigbee,
  );

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
        if (
          device &&
          deviceRegistersFromStorage &&
          deviceRegistersFromStorage.length > 0
        ) {
          // Get device data only if it has feedback
          if (device?.protocol === Protocols.modbus) {
            if (device?.hasDataFeedback) {
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

                device?.valueAssignment(registersValueArray);

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
            } else {
              // If device doesn't have feedback set registers info
              setDeviceInstance(device);
            }
          } else if (device?.protocol === Protocols.zigbee) {
            try {
              if (!!zigbeeData) {
                const dataObject = JSON.parse(zigbeeData.toString());
                device.valueAssignment(dataObject);
                setDeviceInstance(device);
              }
            } catch (e) {
              console.error("Error parsing mqtt data: ", zigbeeData, e);
            }
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
  }, [
    zigbeeData,
    deviceJsonFromStorage,
    deviceRegistersJsonFromStorage,
    deviceJSON,
  ]);

  return deviceInstance;
};

export default useDeviceData;
