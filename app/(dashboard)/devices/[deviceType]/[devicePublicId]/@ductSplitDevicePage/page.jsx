"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import DuctSplitDevicePageBody from "@/components/devicePagesBody/DuctSplit";
import useDeviceData from "@/hooks/useDeviceData";
import useRegisterUpdateToast from "@/hooks/useRegisterUpdateToast";

const DuctSplitDevicePage = () => {
  const device = useDeviceData();

  const [handleRegistersUpdate, loading] = useRegisterUpdateToast();

  return (
    <>
      <div className={"px-3"}>
        <DeviceHeader
          name={device?.name}
          description={device?.description}
          hasPowerButton={true}
          powerValue={device?.registers?.power}
          onPowerChange={async (value) => {
            await handleRegistersUpdate(
              device?.registers?.power?.updateValue(value),
            );
          }}
        />
      </div>
      <DuctSplitDevicePageBody
        className={"flex-1 h-0 w-full"}
        deviceInstance={device}
        registerUpdateHandler={handleRegistersUpdate}
      />
    </>
  );
};

export default DuctSplitDevicePage;
