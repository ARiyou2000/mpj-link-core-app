"use client";

import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import useDeviceData from "@/hooks/useDeviceData";
import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import DuctSplitDevicePageBody from "@/components/devicePagesBody/DuctSplit";
import useRegisterUpdateToast from "@/hooks/useRegisterUpdateToast";

type PropsT = {
  info: ServerSideDeviceInfoT;
  registers: ServerSideRegisterInfoT[];
};
const DuctSplitDevicePageView = ({ info, registers }: PropsT) => {
  const Device = useDeviceData(info, registers);

  const [handleRegistersUpdate, loading] = useRegisterUpdateToast();

  return (
    <>
      <div className={"px-3"}>
        <DeviceHeader
          name={Device?.name}
          description={Device?.description}
          hasPowerButton={true}
          powerValue={Device?.registers?.power}
          onPowerChange={async (value) => {
            await handleRegistersUpdate(
              Device?.registers?.power?.updateValue(value),
            );
          }}
        />
      </div>
      <DuctSplitDevicePageBody
        className={"flex-1 h-0 w-full"}
        deviceInstance={Device}
        registerUpdateHandler={handleRegistersUpdate}
      />
    </>
  );
};

export default DuctSplitDevicePageView;
