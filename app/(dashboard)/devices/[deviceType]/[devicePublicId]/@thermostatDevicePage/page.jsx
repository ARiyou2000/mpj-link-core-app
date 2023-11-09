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
      <DeviceHeader
        name={device?.name}
        description={device?.description}
        hasPowerButton={true}
        powerValue={device.registers?.power}
        onPowerChange={async (value) => {
          await handleRegistersUpdate(
            device.registers.power?.updateValue(value),
          );
        }}
      />
      <Thermostat
        className={"flex-1 h-0 w-full"}
        deviceInstance={device}
        registerUpdateHandler={handleRegistersUpdate}
      />
    </>
  );
};

export default ThermostatDevicePage;
