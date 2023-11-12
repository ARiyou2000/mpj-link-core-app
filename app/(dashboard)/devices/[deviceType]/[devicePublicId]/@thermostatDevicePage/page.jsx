"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import Thermostat from "@/components/devicePagesBody/Thermostat";
import useRegisterUpdateToast from "@/hooks/useRegisterUpdateToast";

const ThermostatDevicePage = () => {
  const device = useDeviceData();

  const [handleRegistersUpdate, loading] = useRegisterUpdateToast();

  return (
    <>
      <div className={"px-3"}>
        <DeviceHeader
          name={device?.name}
          description={device?.description}
          hasPowerButton={true}
          powerValue={device?.registers?.power?.value}
          onPowerChange={() => handleRegistersUpdate(device?.togglePower)}
        />
      </div>
      <Thermostat
        className={"flex-1 h-0 w-full"}
        deviceInstance={device}
        registerUpdateHandler={handleRegistersUpdate}
      />
    </>
  );
};

export default ThermostatDevicePage;
