"use client";

import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import useDeviceData from "@/hooks/useDeviceData";
import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import RelayDevicePageBody from "@/components/devicePagesBody/Relay";

type PropsT = {
  info: ServerSideDeviceInfoT;
  registers: ServerSideRegisterInfoT[];
};
const RelayDevicePageView = ({ info, registers }: PropsT) => {
  const Device = useDeviceData(info, registers);
  const registersList = Device && Object.values(Device?.registers);

  return (
    <>
      <div className={"px-3"}>
        <DeviceHeader
          name={Device?.name}
          description={Device?.description}
          hasPowerButton={false}
        />
      </div>
      <RelayDevicePageBody
        className={"flex-1 h-0 w-full"}
        registersList={registersList}
      />
    </>
  );
};

export default RelayDevicePageView;
