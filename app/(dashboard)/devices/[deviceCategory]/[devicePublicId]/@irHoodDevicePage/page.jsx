"use client";

import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";
import useDeviceData from "@/hooks/useDeviceData";
import IrHood from "@/components/devicePagesBody/IrHood";
import { setRegisterData } from "@/utils/queueHelper";
import { useState } from "react";
import { useToast } from "../../../../../../components/ui/use-toast";

const IrHoodDevicePage = () => {
  const [info, deviceRegistersInfoAndData] = useDeviceData({
    hasFeedback: false,
  });

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (registerPublicId) => {
    setLoading(true);
    const options = { hasFeedback: false };
    try {
      const result = await setRegisterData(registerPublicId, "01", options);
    } catch (e) {
      toast({
        variant: "destructive",
        title: "شما دسترسی تغییر این گزینه را ندارید",
      });
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <>
      <DeviceHeader
        name={info?.name}
        description={info?.description}
        hasPowerButton={true}
        powerValue={false}
        onPowerChange={() => {
          handleUpdate(deviceRegistersInfoAndData[0].publicId);
        }}
      />
      <IrHood
        className={"flex-1 h-0 w-full"}
        handleDeviceUpdate={handleUpdate}
        registersList={deviceRegistersInfoAndData}
      />
    </>
  );
};

export default IrHoodDevicePage;
