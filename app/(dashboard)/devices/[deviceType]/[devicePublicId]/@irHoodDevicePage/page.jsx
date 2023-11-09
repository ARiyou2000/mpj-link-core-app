"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import IrHood from "@/components/devicePagesBody/IrHood";
import useRegisterUpdateToast from "@/hooks/useRegisterUpdateToast";

const IrHoodDevicePage = () => {
  const device = useDeviceData();

  const [handleRegistersUpdate] = useRegisterUpdateToast();

  return (
    <>
      <DeviceHeader
        name={device?.name}
        description={device?.description}
        hasPowerButton={true}
        powerValue={false}
        onPowerChange={async () => {
          await handleRegistersUpdate(device.changePower);
        }}
      />
      <IrHood
        className={"flex-1 h-0 w-full"}
        handleDeviceUpdate={handleRegistersUpdate}
        deviceInstance={device}
      />
    </>
  );
};

export default IrHoodDevicePage;
