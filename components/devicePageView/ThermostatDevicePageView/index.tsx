"use client";

import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import { ServerSideRegisterInfoT } from "@/classes/devices/register";
import useDeviceData from "@/hooks/useDeviceData";
import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useRegisterUpdateToast from "@/hooks/useRegisterUpdateToast";
import ThermostatDevicePageBody from "@/components/devicePagesBody/ThermostatDevicePageBody";
import Thermostat from "@/classes/devices/Thermostat/thermostatDevice";

type PropsT = {
  info: ServerSideDeviceInfoT;
  registers: ServerSideRegisterInfoT[];
};
const ThermostatDevicePageView = ({ info, registers }: PropsT) => {
  const Device = useDeviceData(info, registers) as Thermostat;

  const [handleRegistersUpdate, loading] = useRegisterUpdateToast();

  return (
    <>
      <div className={"px-3"}>
        <DeviceHeader
          name={Device?.name}
          description={Device?.description}
          hasPowerButton={true}
          powerValue={Device?.registers?.power?.value}
          onPowerChange={() => handleRegistersUpdate(Device?.togglePower)}
        />
      </div>
      <ThermostatDevicePageBody
        className={"flex-1 h-0 w-full"}
        deviceInstance={Device}
        registerUpdateHandler={handleRegistersUpdate}
      />
    </>
  );
};

export default ThermostatDevicePageView;
