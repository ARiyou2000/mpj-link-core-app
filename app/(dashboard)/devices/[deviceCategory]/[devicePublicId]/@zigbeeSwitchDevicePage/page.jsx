"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import { ZigbeeSwitchUpdateContext } from "@/contexts/updateProviders";
import Switch from "@/components/devicePagesBody/ZigbeeSwitch";
import { useParams } from "next/navigation";
import setStatus from "@/utils/zigbee/setStatus";
import useDeviceData from "@/hooks/useDeviceData";

const ZigbeeSwitchDevicePage = () => {
  const urlParams = useParams();
  const deviceId = urlParams?.devicePublicId;

  const [deviceInfo, registersList] = useDeviceData({
    deviceType: "zigbee",
    assignmentCallback: (register, deviceState) => {
      return deviceState[register.number];
    },
  });

  const handelUpdate = async (publicId, checked) => {
    await setStatus(deviceId, publicId, checked ? "ON" : "OFF");
  };

  return (
    <>
      <DeviceHeader
        name={deviceInfo?.name}
        description={deviceInfo?.description}
        hasPowerButton={false}
      />
      <ZigbeeSwitchUpdateContext.Provider value={handelUpdate}>
        <Switch className={"flex-1 h-0 w-full"} registersList={registersList} />
      </ZigbeeSwitchUpdateContext.Provider>
    </>
  );
};

export default ZigbeeSwitchDevicePage;
