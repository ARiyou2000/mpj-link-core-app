"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import Curtains from "@/components/devicePagesBody/Curtains";

const CurtainsDevicePage = () => {
  const device = useDeviceData();
  return (
    <>
      <DeviceHeader
        name={device?.name}
        description={device?.description}
        hasPowerButton={false}
      />
      <Curtains deviceInstance={device} className={"flex-1 h-0 w-full"} />
    </>
  );
};

export default CurtainsDevicePage;
