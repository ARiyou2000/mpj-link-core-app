"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import Curtains from "@/components/devicePagesBody/Curtains";

const CurtainsDevicePage = () => {
  const device = useDeviceData();
  return (
    <>
      <div className={"px-3"}>
        <DeviceHeader
          name={device?.name}
          description={device?.description}
          hasPowerButton={false}
        />
      </div>
      <Curtains deviceInstance={device} className={"flex-1 h-0 w-full"} />
    </>
  );
};

export default CurtainsDevicePage;
