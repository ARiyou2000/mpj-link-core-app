"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import { setRegisterData } from "@/utils/queueHelper";
import SplitIR from "@/components/devicePagesBody/SplitIR";

const MusicPlayerDevicePage = () => {
  const [info, deviceRegistersInfoAndData] = useDeviceData({
    hasFeedback: false,
  });

  const handleDeviceUpdate = (value) => {
    setRegisterData(deviceRegistersInfoAndData[0].publicId, value, {
      hasFeedback: false,
    });
  };

  return (
    <>
      <DeviceHeader
        name={info?.name}
        description={info?.description}
        hasPowerButton={true}
        powerValue={false}
      />
      <SplitIR
        className={"flex-1 h-0 w-full"}
        handleDeviceUpdate={handleDeviceUpdate}
      />
    </>
  );
};

export default MusicPlayerDevicePage;
