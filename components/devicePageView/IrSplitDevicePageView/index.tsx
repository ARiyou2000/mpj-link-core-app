"use client";

import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import useDeviceData from "@/hooks/useDeviceData";
import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useRegisterUpdateToast from "@/hooks/useRegisterUpdateToast";
import useHertakiUpdate from "@/hooks/useHertakiUpdate";
import SplitIR from "@/components/devicePagesBody/SplitIR";
import IrSplit from "@/classes/devices/modbus/irSplit";

type PropsT = {
  info: ServerSideDeviceInfoT;
  registers: ServerSideRegisterInfoT[];
};
const IrSplitDevicePageiew = ({ info, registers }: PropsT) => {
  const Device = useDeviceData(info, registers) as IrSplit;

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
      <SplitIR
        className={"flex-1 h-0 w-full"}
        updateHandler={registerUpdateHandler}
        deviceInstance={Device}
      />
    </>
  );
};

export default IrSplitDevicePageiew;
