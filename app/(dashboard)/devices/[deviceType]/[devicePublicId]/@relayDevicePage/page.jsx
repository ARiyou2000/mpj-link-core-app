"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import Relay from "@/components/devicePagesBody/Relay";
import useDeviceData from "@/hooks/useDeviceData";

const RelayDevicePage = () => {
  const Device = useDeviceData();
  const registersList = (Device && Object.values(Device?.registers)) || [];

  return (
    <>
      <DeviceHeader
        name={Device?.name}
        description={Device?.description}
        hasPowerButton={false}
      />
      <Relay className={"flex-1 h-0 w-full"} registersList={registersList} />
    </>
  );
};

export default RelayDevicePage;
