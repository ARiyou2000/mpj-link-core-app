const mqtt = require("mqtt");
import connectionConfig from "@/connection.config";
import { messageType, mqttPacketType, topicType } from "@/mqtt/index";

const { protocol, host, port, mainTopic, options } = connectionConfig.mqtt;
const connectUrl = `${protocol}://${host}:${port}`;

const subscriptionTopic = `${mainTopic}/#`;

const mqttSubscribe = async (onMessage: (prop: mqttPacketType) => any) => {
  try {
    const client = mqtt.connect(connectUrl, options);

    client.on("connect", () => {
      // console.log("! ! ! ! ! ! ! ! ! ! ! MQTT Connected ! ! ! ! ! ! ! ! ! ! !");
      client.subscribe(subscriptionTopic, (err) => {
        if (!err) {
          console.log(
            "! ! ! ! ! ! ! ! ! ! ! MQTT Subscribed to main topic ! ! ! ! ! ! ! ! ! ! !",
          );
        }
      });
    });

    client.on("message", (topic: topicType, message: messageType) => {
      // message is Buffer
      onMessage({
        topic: topic.replace(`${connectionConfig.mqtt.mainTopic}/`, ""),
        message: message.toString(),
      });
    });
  } catch (ex) {
    console.error(ex);
  }
};

export default mqttSubscribe;
