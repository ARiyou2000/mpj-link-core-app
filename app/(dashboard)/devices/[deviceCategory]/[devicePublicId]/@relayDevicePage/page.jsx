"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import Relay from "@/components/devicePagesBody/Relay";
import useDeviceData from "@/hooks/useDeviceData";

const RelayDevicePage = () => {
  const [info, data] = useDeviceData();
  return (
    <>
      <DeviceHeader
        name={info?.name}
        description={info?.description}
        hasPowerButton={false}
      />
      <Relay className={"flex-1 h-0 w-full"} registersList={data} />
    </>
  );
};

export default RelayDevicePage;
