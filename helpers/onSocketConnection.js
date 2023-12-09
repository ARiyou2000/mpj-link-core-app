import mqttSubscribe from "@/mqtt/subscribe";

const AVAILABILITY_FEATURE_TOPIC_ENDING = "/availability";

const registerOnSocketConnection = async (io, socket) => {
  console.log(`socket ${socket.id} connected`);

  await mqttSubscribe(({ topic, message }) => {
    try {
      if (topic.endsWith(AVAILABILITY_FEATURE_TOPIC_ENDING)) {
        // this.processAvailabilityMessage(data);
      } else if (topic.startsWith("bridge/")) {
        // this.processBridgeMessage(data);
      } else {
        // this.processDeviceStateMessage(data);
        console.log("Message from MQTT: ", { topic, message });
        socket.broadcast.emit("receiveDeviceData", { topic, message });
      }
    } catch (e) {
      // NotificationManager.error(e.message);
      // console.error(event.data);
      console.error(e);
    }
  });

  // socket.on("sendDeviceData", mqttPublish);
  // socket.on("connect");

  socket.on("close", (reason) => {
    console.log(`socket ${socket.id} 'closed' due to ${reason}`);
  });

  socket.on("disconnect", (reason) => {
    console.log(`socket ${socket.id} 'disconnected' due to ${reason}`);
  });
};

export default registerOnSocketConnection;
