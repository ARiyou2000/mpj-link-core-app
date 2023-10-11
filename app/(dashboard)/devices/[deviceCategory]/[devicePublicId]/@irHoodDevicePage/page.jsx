"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import IrHood from "@/components/devicePagesBody/IrHood";
import { setRegisterData } from "@/utils/queueHelper";
import { useState } from "react";

const IrHoodDevicePage = () => {
  const [info, deviceRegistersInfoAndData] = useDeviceData({
    hasFeedback: false,
  });

  const handleDeviceUpdate = (value) => {
    setRegisterData(deviceRegistersInfoAndData[0].publicId, value, {
      hasFeedback: false,
    });
  };

  const [lastHertakiPowerActionType, setLastHertakiPowerActionType] =
    useState(false);

  return (
    <>
      <DeviceHeader
        name={info?.name}
        description={info?.description}
        hasPowerButton={true}
        powerValue={false}
        onPowerChange={() => {
          setLastHertakiPowerActionType((prevState) => !prevState);
          handleDeviceUpdate(lastHertakiPowerActionType ? "51" : "52");
        }}
      />
      <IrHood
        className={"flex-1 h-0 w-full"}
        handleDeviceUpdate={handleDeviceUpdate}
      />
    </>
  );
};

export default IrHoodDevicePage;
