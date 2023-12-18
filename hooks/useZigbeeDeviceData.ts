"use client";

import useMqttData from "@/hooks/useMqttData";
import { useEffect, useState } from "react";
import { messageType } from "@/mqtt";
import fetchUrl from "@/utils/fetchUrl";

const getDeviceStatusWhileNotConnected = async (
  message: JSON,
  devicePublicId: string,
) => {
  try {
    const dataObject = JSON.parse(message.toString());

    if (!dataObject || !dataObject.linkquality) {
      await fetchUrl(`/api/devices/${devicePublicId}`);
    }
  } catch (e) {}
};

const useZigbeeDeviceData = (devicePublicId: string, isActive: boolean) => {
  const [topic, message, isConnected] = useMqttData(isActive);

  useEffect(() => {
    if (isActive && isConnected) {
      const getData = async () => {
        await fetchUrl(`/api/devices/${devicePublicId}`);
      };
      getData();
    }
  }, [devicePublicId, isActive, isConnected]);

  const [data, setData] = useState<messageType>("");
  useEffect(() => {
    // getStatus(devicePublicId);

    if (
      !!topic &&
      !!devicePublicId &&
      topic === devicePublicId &&
      isActive &&
      isConnected
    ) {
      setData(message);
    }
  }, [topic, message, isConnected, isActive]);

  return data;
};

export default useZigbeeDeviceData;
