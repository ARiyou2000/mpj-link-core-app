import { messageType, topicType } from "@/mqtt/index";

type PropsT = {
  onDataMassage?: () => any;
  onBridgeMassage?: () => any;
  onAvailabilityMassage?: () => any;
};

const mqttCategorizedMessage = (
  topic: topicType,
  message: messageType,
  { onBridgeMassage, onAvailabilityMassage, onDataMassage }: PropsT,
) => {
  try {
    if (topic.endsWith("/availability") && onAvailabilityMassage) {
      onAvailabilityMassage();
    } else if (topic.startsWith("bridge/") && onBridgeMassage) {
      onBridgeMassage();
    } else if (onDataMassage) {
      const data = JSON.parse(message);
      if (data.linkquality) {
        onDataMassage();
      }
    } else {
      //   No topic like:
      // {
      //   level: "info",
      //   message: "................"
      // }
    }
  } catch (e) {
    console.error(e);
  }
};

export default mqttCategorizedMessage;
