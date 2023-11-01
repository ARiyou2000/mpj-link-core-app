import useMqttData from "@/hooks/useMqttData";
import { useEffect, useState } from "react";
import { messageType } from "@/mqtt";
import getStatus from "@/utils/zigbee/getStatus";

const useZigbeeDeviceData = (devicePublicId: string, isActive: boolean) => {
  const [topic, message, isConnected] = useMqttData(isActive);

  useEffect(() => {
    if (isActive && isConnected) {
      getStatus(devicePublicId);
    }
  }, [devicePublicId, isConnected]);

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
  }, [topic, message]);

  return data;
};

export default useZigbeeDeviceData;
