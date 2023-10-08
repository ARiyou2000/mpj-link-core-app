"use client";

import { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";

let socket;

const useSocket = () => {
  const [value, setValue] = useState("");

  const socketInitializer = useCallback(async () => {
    // We call this just to make sure we turn on the websocket server
    await fetch("/api/socket");

    socket = io(undefined, {
      path: "/api/my_awesome_socket",
    });

    socket.on("connect", () => {
      console.log("Connected", socket.id);
    });

    socket.on("receiveDeviceData", (msg) => {
      console.log("New message in client", msg);
      setValue(msg);
    });
  }, []);

  useEffect(() => {
    !socket && socketInitializer();

    return () => {
      socket?.close();
    };
  }, []);

  const publishHandler = async (value) => {
    if (!socket) return;
    socket.emit("sendDeviceData", value);
  };

  return [value, publishHandler];
};

export default useSocket;
