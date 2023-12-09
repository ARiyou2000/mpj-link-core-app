import { Server } from "socket.io";
import connectionConfig from "@/connection.config";
import registerOnSocketConnection from "@/helpers/onSocketConnection";

export default async function handler(req, res) {
  // console.log("res.socket", res.socket.server.io)
  if (res.socket.server.io) {
    console.log("<-----\t\t\t! ! ! Server already started! ! ! !\t\t\t----->");

    res.end();
    return;
  }

  const io = new Server(res.socket.server, {
    path: connectionConfig.socket.key,
  });
  res.socket.server.io = io;

  io.on("connection", async (socket) => {
    await registerOnSocketConnection(io, socket);
  });

  console.log(
    "<------------------ Socket server started successfully! ------------------>",
  );
  res.end();
}
