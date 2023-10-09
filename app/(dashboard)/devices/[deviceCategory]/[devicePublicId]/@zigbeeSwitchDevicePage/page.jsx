"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";

import useSocket from "@/hooks/useSocket";
import {ZigbeeSwitchUpdateContext} from "@/contexts/updateProviders";
import Register from "@/classes/registers/register";
import Switch from "@/components/devicePagesBody/ZigbeeSwitch";
import {useState} from "react";

const ZigbeeSwitchDevicePage = () => {
  const deviceId = "0xa4c1381c25a1daf0";
  const [data, publishHandler] = useSocket();
  const [registersList, setRegistersList] = useState([]);

  if (data?.topic === deviceId) {
    // setDeviceRegisterData
    delete data.payload.linkquality;

    const registers = [
      {
        publicId: "status_left",
        name: "پذیرایی اصلی",
        description: "نورهای لوستر و دیواری",
        value: data.payload["status_left"],
      },
      {
        publicId: "status_center",
        name: "نور مخفی",
        description: "روشنایی‌های مخفی زیر کناف",
        value: data.payload["status_center"],
      },
      {
        publicId: "status_right",
        name: "سناریو پذیرایی",
        description: "فعال سازی خودکار و هوشمند روشنایی",
        value: data.payload["status_right"],
      },
    ];

    setRegistersList(registers);
  }

  const handelUpdate = (publicId, checked) => {
    publishHandler(
      JSON.stringify({
        topic: deviceId,
        message: {[publicId]: checked ? "ON" : "OFF"},
      }),
    );
  };

  return (
    <>
      <DeviceHeader
        name={"روشنایی پذیرایی"}
        description={"پذیرایی شمالی - سمت درب باغ"}
        hasPowerButton={false}
      />
      <ZigbeeSwitchUpdateContext.Provider value={handelUpdate}>
        <Switch className={"flex-1 h-0 w-full"} registersList={registersList}/>
      </ZigbeeSwitchUpdateContext.Provider>
    </>
  );
};

export default ZigbeeSwitchDevicePage;
