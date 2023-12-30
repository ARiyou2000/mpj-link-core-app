import mqttSubscribe from "@/mqtt/subscribe";
import mqttCategorizedMessage from "@/mqtt/mqttCategorizedMessage";

const registerOnSocketConnection = async (io, socket) => {
  console.log(`socket ${socket.id} connected`);

  await mqttSubscribe(({ topic, message }) => {
    mqttCategorizedMessage(topic, message, {
      onDataMassage: () => {
        socket.broadcast.emit("receiveDeviceData", { topic, message });
      },
    });
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
