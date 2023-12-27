"use client";

import useMqttData from "@/hooks/useMqttData";
import { useEffect, useState } from "react";
import { messageType } from "@/mqtt";
import clientSideAuthorizedFetch from "@/utils/clientSideAuthorizedFetch";

const getDeviceStatusWhileNotConnected = async (
  message: JSON,
  devicePublicId: string,
) => {
  try {
    const dataObject = JSON.parse(message.toString());

    if (!dataObject || !dataObject.linkquality) {
      await clientSideAuthorizedFetch(`/api/devices/${devicePublicId}/data`);
    }
  } catch (e) {
    console.error(e);
  }
};

const getData = async (devicePublicId: string) => {
  try {
    await clientSideAuthorizedFetch(`/api/devices/${devicePublicId}/data`);
  } catch (e) {
    console.error(e);
  }
};

const useZigbeeDeviceData = (devicePublicId: string, isActive: boolean) => {
  const [topic, message, isConnected] = useMqttData(isActive);

  useEffect(() => {
    isActive && isConnected && getData(devicePublicId);
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
