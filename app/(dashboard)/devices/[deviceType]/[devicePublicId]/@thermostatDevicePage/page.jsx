"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import Thermostat from "@/components/devicePagesBody/Thermostat";
import { setRegisterData } from "@/utils/queueHelper";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const handelGastroenterologistAssignment = (register, valueArray) => {
  switch (Number(register.number)) {
    case 1:
      return valueArray[0];
    case 2:
      return valueArray[1];
    case 4:
      return valueArray[2];
    case 5:
      return valueArray[3];
    case 7:
      return valueArray[4];
    default:
      return undefined;
  }
};

const ThermostatDevicePage = () => {
  const [info, data] = useDeviceData({
    assignmentCallback: handelGastroenterologistAssignment,
  });
  const powerRegister = data?.find((register) => Number(register.number) === 7);
  const { toast } = useToast();

  const handleRegistersUpdate = async (registerPublicId, value) => {
    try {
      const result = await setRegisterData(registerPublicId, value);
    } catch (e) {
      toast({
        variant: "destructive",
        title: "شما دسترسی تغییر این گزینه را ندارید",
      });
      console.error(e);
    }
  };

  const [loading, setLoading] = useState(false);
  return (
    <>
      <DeviceHeader
        name={info?.name}
        description={info?.description}
        hasPowerButton={true}
        powerValue={powerRegister?.value === "02"}
        onPowerChange={async (power) => {
          setLoading(true);
          await handleRegistersUpdate(
            powerRegister?.publicId,
            power ? "02" : "01",
          );
          setLoading(false);
        }}
      />
      <Thermostat
        className={"flex-1 h-0 w-full"}
        registersList={data}
        registerUpdateHandler={handleRegistersUpdate}
      />
    </>
  );
};

export default ThermostatDevicePage;
