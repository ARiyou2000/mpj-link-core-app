import useMqttData from "@/hooks/useMqttData";
import { useEffect, useState } from "react";
import { messageType } from "@/mqtt";

const useZigbeeDeviceData = (devicePublicId: string) => {
  const [topic, message] = useMqttData();

  console.log(topic, message);
  const [data, setData] = useState<messageType>("");
  useEffect(() => {
    if (topic === devicePublicId) {
      setData(message);
    }
  }, [topic, message]);

  return data;
};

export default useZigbeeDeviceData;
