"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import SplitIR from "@/components/devicePagesBody/SplitIR";
import useRegisterUpdateToast from "@/hooks/useRegisterUpdateToast";

const IrSplitDevicePage = () => {
  const device = useDeviceData();

  const [handleDeviceUpdate] = useRegisterUpdateToast();
  // const handleDeviceUpdate = () => {};

  return (
    <>
      <div className={"px-3"}>
        <DeviceHeader
          name={device?.name}
          description={device?.description}
          hasPowerButton={true}
          powerValue={false}
          onPowerChange={handleDeviceUpdate(device?.changePower)}
        />
      </div>
      <SplitIR
        className={"flex-1 h-0 w-full"}
        handleDeviceUpdate={handleDeviceUpdate}
        deviceInstance={device}
      />
    </>
  );
};

export default IrSplitDevicePage;
