"use client";

import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import useDeviceData from "@/hooks/useDeviceData";
import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import CurtainsDevicePageBody from "@/components/devicePagesBody/CurtainsDevicePageBody";
import Curtains from "@/classes/devices/modbus/curtains";

type PropsT = {
  info: ServerSideDeviceInfoT;
  registers: ServerSideRegisterInfoT[];
};
const CurtainsDevicePageView = ({ info, registers }: PropsT) => {
  const Device = useDeviceData(info, registers) as Curtains;

  return (
    <>
      <div className={"px-3"}>
        <DeviceHeader
          name={Device?.name}
          description={Device?.description}
          hasPowerButton={false}
        />
      </div>
      <CurtainsDevicePageBody
        deviceInstance={Device}
        className={"flex-1 h-0 w-full"}
      />
    </>
  );
};

export default CurtainsDevicePageView;
