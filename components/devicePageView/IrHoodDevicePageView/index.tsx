"use client";

import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import { ServerSideRegisterInfoT } from "@/classes/devices/register";
import useDeviceData from "@/hooks/useDeviceData";
import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useRegisterUpdateToast from "@/hooks/useRegisterUpdateToast";
import IrHoodDevicePageBody from "@/components/devicePagesBody/IrHoodDevicePageBody";
import IrHood from "@/classes/devices/IrHood/irHoodDevice";

type PropsT = {
  info: ServerSideDeviceInfoT;
  registers: ServerSideRegisterInfoT[];
};
const IrHoodDevicePageView = ({ info, registers }: PropsT) => {
  const Device = useDeviceData(info, registers) as IrHood;

  const [handleRegistersUpdate] = useRegisterUpdateToast();

  return (
    <>
      <div className={"px-3"}>
        <DeviceHeader
          name={Device?.name}
          description={Device?.description}
          hasPowerButton={true}
          powerValue={false}
          onPowerChange={async () => {
            await handleRegistersUpdate(Device?.changePower);
          }}
        />
      </div>
      <IrHoodDevicePageBody
        className={"flex-1 h-0 w-full"}
        handleDeviceUpdate={handleRegistersUpdate}
        deviceInstance={Device}
      />
    </>
  );
};

export default IrHoodDevicePageView;
