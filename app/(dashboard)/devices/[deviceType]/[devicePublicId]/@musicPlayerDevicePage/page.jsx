"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import MusicPlayer from "@/components/devicePagesBody/MusicPlayer";
import { useState } from "react";
import useRegisterUpdateToast from "../../../../../../hooks/useRegisterUpdateToast";

const MusicPlayerDevicePage = () => {
  const device = useDeviceData();

  const [hertakiUpdateFlag, setHertakiUpdateFlag] = useState(false);
  const [registerUpdateHandler] = useRegisterUpdateToast();

  const handelHertakiUpdate = async (fistAction, secoundAction) => {
    setHertakiUpdateFlag((prevState) => !prevState);
    if (hertakiUpdateFlag) {
      await registerUpdateHandler(fistAction);
    } else {
      await registerUpdateHandler(secoundAction);
    }
  };

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
      <MusicPlayer
        className={"flex-1 h-0 w-full"}
        deviceInstance={device}
        updateHandler={handelHertakiUpdate}
      />
    </>
  );
};

export default MusicPlayerDevicePage;
