"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";

import useSocket from "@/hooks/useSocket";
import { ZigbeeSwitchUpdateContext } from "@/contexts/updateProviders";
import Register from "@/classes/registers/register";
import Switch from "@/components/devicePagesBody/ZigbeeSwitch";
import { useState } from "react";

const ZigbeeSwitchDevicePage = () => {
  const [data, publishHandler] = useSocket();
  const [registersList, setRegistersList] = useState([]);

  if (data?.topic === "0xa4c1381c25a1daf0") {
    // setDeviceRegisterData
    delete data.payload.linkquality;
    const registers = Object.keys(data.payload).map((keyName) => {
      return new Register(keyName, keyName, "", data.payload[keyName]);
    });
    setRegistersList(registers);
  }

  const handelUpdate = (publicId, checked) => {
    publishHandler(
      JSON.stringify({
        topic: "0xa4c1381c25a1daf0/set",
        payload: { [publicId]: checked ? "ON" : "OFF" },
      }),
    );
  };

  return (
    <>
      <DeviceHeader
        name={"کلید zigbee"}
        description={"کلید هوشمند وایرلس"}
        hasPowerButton={false}
      />
      <ZigbeeSwitchUpdateContext.Provider value={handelUpdate}>
        <Switch className={"flex-1 h-0 w-full"} registersList={registersList} />
      </ZigbeeSwitchUpdateContext.Provider>
    </>
  );
};

export default ZigbeeSwitchDevicePage;
