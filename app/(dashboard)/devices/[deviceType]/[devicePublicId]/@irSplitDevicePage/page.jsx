"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import SplitIR from "@/components/devicePagesBody/SplitIR";
import useRegisterUpdateToast from "@/hooks/useRegisterUpdateToast";
import useHertakiUpdate from "@/hooks/useHertakiUpdate";

const IrSplitDevicePage = () => {
  const device = useDeviceData();

  const [registerUpdateHandler] = useRegisterUpdateToast();
  const handelHertakiUpdate = useHertakiUpdate();

  return (
    <>
      <div className={"px-3"}>
        <DeviceHeader
          name={device?.name}
          description={device?.description}
          hasPowerButton={true}
          powerValue={false}
          onPowerChange={() => {
            handelHertakiUpdate(device?.powerOn, device?.powerOff);
          }}
        />
      </div>
      <SplitIR
        className={"flex-1 h-0 w-full"}
        updateHandler={registerUpdateHandler}
        deviceInstance={device}
      />
    </>
  );
};

export default IrSplitDevicePage;
