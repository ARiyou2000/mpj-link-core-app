"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import MusicPlayer from "@/components/devicePagesBody/MusicPlayer";
const MusicPlayerDevicePage = () => {
  const device = useDeviceData();

  return (
    <>
      <DeviceHeader
        name={device?.name}
        description={device?.description}
        hasPowerButton={true}
        powerValue={false}
        onPowerChange={device?.powerOn}
      />
      <MusicPlayer className={"flex-1 h-0 w-full"} deviceInstance={device} />
    </>
  );
};

export default MusicPlayerDevicePage;
