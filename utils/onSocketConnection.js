const mqtt = require("mqtt");
const serverAddress = "mqtt://localhost:15672";

const mqttPublish = async ({ topic, message }) => {
  try {
    const client = mqtt.connect(serverAddress);
    client.publish(topic, message);
  } catch (ex) {
    console.error(ex);
  }
};

const mqttToSocket = async (socketInstance) => {
  try {
    const client = mqtt.connect(serverAddress);

    client.on("message", (topic, message) => {
      // message is Buffer
      socketInstance.broadcast.emit("receiveDeviceData", { topci, message });
      console.log(message.toString());
    });
  } catch (ex) {
    console.error(ex);
  }
};

const registerOnConnection = (io, socket) => {
  mqttToSocket(socket);

  socket.on("sendDeviceData", mqttPublish);
  socket.on("close", (reason) => {
    console.error("Socket Closed: ", reason);
  });
};

export default registerOnConnection;
