"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import ModbusShaders from "@/components/devicePagesBody/ModbusShaders";

const curtainsDevicePage = () => {
  const [info, deviceRegistersInfoAndData] = useDeviceData({
    hasFeedback: false,
  });
  return (
    <>
      <DeviceHeader
        name={info?.name}
        description={info?.description}
        hasPowerButton={false}
      />
      <ModbusShaders
        className={"flex-1 h-0 w-full"}
        registersList={deviceRegistersInfoAndData}
      />
    </>
  );
};

export default curtainsDevicePage;
