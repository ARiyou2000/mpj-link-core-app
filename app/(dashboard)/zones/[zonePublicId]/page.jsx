"use client";

import ZoneDevicesList from "@/components/listCardPairs/zoneDevices/ZoneDevicesList";
import { useParams } from "next/navigation";
import useStaticData from "@/hooks/useStaticData";
import { getZoneDevices, getZones } from "@/utils/getStaticData";
import ZoneHeader from "@/components/deviceAndZoneHeader/ZoneHeader";
import DeviceInfo from "@/classes/devices/deviceInfo";

const ZonePage = () => {
  const params = useParams();
  const { zonePublicId } = params;
  const [zones] = useStaticData(getZones);
  const zoneInfo = zones.find((zoneInfo) => {
    return zoneInfo.publicId === zonePublicId;
  });
  const [zoneData] = useStaticData((options) =>
    getZoneDevices(zonePublicId, options),
  );

  return (
    <>
      <div className={"h-full px-4 flex flex-col gap-5"}>
        <ZoneHeader name={zoneInfo?.name} description={zoneInfo?.description} />
        <div className={"flex-1 h-0 w-full"}>
          <ZoneDevicesList
            className={"pt-2"}
            list={
              zoneData?.map(
                ({ publicId, name, description, type }) =>
                  new DeviceInfo(publicId, name, description, type),
              ) || []
            }
          />
        </div>
      </div>
    </>
  );
};

export default ZonePage;
