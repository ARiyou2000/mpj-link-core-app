"use client";

import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import { ServerSideRegisterInfoT } from "@/classes/devices/register";
import useDeviceData from "@/hooks/useDeviceData";
import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useRegisterUpdateToast from "@/hooks/useRegisterUpdateToast";
import useHertakiUpdate from "@/hooks/useHertakiUpdate";
import MusicPlayerDevicePageBody from "@/components/devicePagesBody/MusicPlayerDevicePageBody";
import MusicPlayer from "@/classes/devices/MusicPlayer/musicPlayerDevice";

type PropsT = {
  info: ServerSideDeviceInfoT;
  registers: ServerSideRegisterInfoT[];
};
const MusicPlayerDevicePageView = ({ info, registers }: PropsT) => {
  const Device = useDeviceData(info, registers) as MusicPlayer;

  const [registerUpdateHandler] = useRegisterUpdateToast();
  const handelHertakiUpdate = useHertakiUpdate();

  return (
    <>
      <div className={"px-3"}>
        <DeviceHeader
          name={Device?.name}
          description={Device?.description}
          hasPowerButton={true}
          powerValue={false}
          onPowerChange={() => {
            handelHertakiUpdate(Device?.powerOn, Device?.powerOff);
          }}
        />
      </div>
      <MusicPlayerDevicePageBody
        className={"flex-1 h-0 w-full"}
        deviceInstance={Device}
        updateHandler={registerUpdateHandler}
      />
    </>
  );
};

export default MusicPlayerDevicePageView;
