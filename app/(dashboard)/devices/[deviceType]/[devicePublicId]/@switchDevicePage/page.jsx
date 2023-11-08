"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import Switch from "@/components/devicePagesBody/Switch";

const SwitchDevicePage = () => {
  const Device = useDeviceData();
  const registersList = (Device && Object.values(Device?.registers)) || [];

  return (
    <>
      <DeviceHeader
        name={Device?.name}
        description={Device?.description}
        hasPowerButton={false}
      />
      <Switch className={"flex-1 h-0 w-full"} registersList={registersList} />
    </>
  );
};

export default SwitchDevicePage;
