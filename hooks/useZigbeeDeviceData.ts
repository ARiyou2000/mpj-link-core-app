import useMqttData from "@/hooks/useMqttData";
import { useEffect, useState } from "react";
import { messageType } from "@/mqtt";
import getStatus from "@/utils/zigbee/getStatus";

const useZigbeeDeviceData = (devicePublicId: string) => {
  const [topic, message] = useMqttData();

  useEffect(() => {
    getStatus(devicePublicId);
  }, [devicePublicId]);

  const [data, setData] = useState<messageType>("");
  useEffect(() => {
    // getStatus(devicePublicId);

    if (topic === devicePublicId) {
      setData(message);
    }
  }, [topic, message]);

  return data;
};

export default useZigbeeDeviceData;
