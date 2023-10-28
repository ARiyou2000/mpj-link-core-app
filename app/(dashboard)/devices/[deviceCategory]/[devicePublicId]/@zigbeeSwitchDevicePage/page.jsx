"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";

import { ZigbeeSwitchUpdateContext } from "@/contexts/updateProviders";
import Switch from "@/components/devicePagesBody/ZigbeeSwitch";
import { useEffect, useState } from "react";
import useZigbeeDeviceData from "@/hooks/useZigbeeDeviceData";
import { useParams } from "next/navigation";
import setStatus from "@/utils/zigbee/setStatus";

const ZigbeeSwitchDevicePage = () => {
  const urlParams = useParams();
  const deviceId = urlParams?.devicePublicId;

  const data = useZigbeeDeviceData(deviceId);
  const [registersList, setRegistersList] = useState([]);

  console.log("data in page: ", data);

  useEffect(() => {
    if (data) {
      // if (data === deviceId) {
      //   // setDeviceRegisterData
      //   delete data.payload.linkquality;

      const registersData = JSON.parse(data);
      const registers = [
        {
          publicId: "state_left",
          name: "پذیرایی اصلی",
          description: "نورهای لوستر و دیواری",
          value: registersData["state_left"],
        },
        {
          publicId: "state_center",
          name: "نور مخفی",
          description: "روشنایی‌های مخفی زیر کناف",
          value: registersData["state_center"],
        },
        {
          publicId: "state_right",
          name: "سناریو پذیرایی",
          description: "فعال سازی خودکار و هوشمند روشنایی",
          value: registersData["state_right"],
        },
      ];

      setRegistersList(registers);
    }
  }, [data]);

  const handelUpdate = async (publicId, checked) => {
    await setStatus(deviceId, publicId, checked ? "ON" : "OFF");
  };

  return (
    <>
      <DeviceHeader
        name={"روشنایی پذیرایی"}
        description={"پذیرایی شمالی - سمت درب باغ"}
        hasPowerButton={false}
      />
      <ZigbeeSwitchUpdateContext.Provider value={handelUpdate}>
        <Switch className={"flex-1 h-0 w-full"} registersList={registersList} />
      </ZigbeeSwitchUpdateContext.Provider>
    </>
  );
};

export default ZigbeeSwitchDevicePage;
