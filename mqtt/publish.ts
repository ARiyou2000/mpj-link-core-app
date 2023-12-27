const mqtt = require("mqtt");
import connectionConfig from "@/connection.config";
import { mqttPacketType } from "@/mqtt/index";

const protocol = connectionConfig.mqtt.protocol;
const host = connectionConfig.mqtt.host;
const port = connectionConfig.mqtt.port;

const connectUrl = `${protocol}://${host}:${port}`;

const mqttPublish = async ({ topic, message }: mqttPacketType) => {
  console.log("message to publish: ", { topic, message });
  try {
    const client = mqtt.connect(connectUrl, connectionConfig.mqtt.options);
    client.publish(topic, message);
  } catch (ex) {
    console.error(ex);
  }
};

export default mqttPublish;
