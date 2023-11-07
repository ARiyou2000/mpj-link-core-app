"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import { setRegisterData } from "@/utils/queueHelper";
import SplitIR from "@/components/devicePagesBody/SplitIR";
import { useState } from "react";

const IrSplitDevicePage = () => {
  const [info, deviceRegistersInfoAndData] = useDeviceData({
    hasFeedback: false,
  });

  const handleDeviceUpdate = (registerIndex, value) => {
    setRegisterData(
      deviceRegistersInfoAndData[registerIndex]?.publicId,
      value,
      {
        hasFeedback: false,
      },
    );
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
          handleDeviceUpdate(0, lastHertakiPowerActionType ? "01" : "02");
        }}
      />
      <SplitIR
        className={"flex-1 h-0 w-full"}
        handleDeviceUpdate={handleDeviceUpdate}
      />
    </>
  );
};

export default IrSplitDevicePage;
