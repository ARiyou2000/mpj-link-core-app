"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import Switch from "@/components/devicePagesBody/Switch";

const SwitchDevicePage = () => {
  const [info, data] = useDeviceData();
  console.log(data);
  return (
    <>
      <DeviceHeader
        name={info?.name}
        description={info?.description}
        hasPowerButton={false}
      />
      <Switch className={"flex-1 h-0 w-full"} registersList={data} />
    </>
  );
};

export default SwitchDevicePage;
