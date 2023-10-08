"use client";

import ZoneDevicesList from "@/components/listCardPairs/zoneDevices/ZoneDevicesList";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import useStaticData from "@/hooks/useStaticData";
import { getZoneDevices, getZones } from "@/utils/getStaticData";
import ZoneHeader from "@/components/deviceAndZoneHeader/ZoneHeader";
import Device from "@/classes/device";

const ZonePage = ({ className }) => {
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
            className={cn("pt-2", className)}
            list={
              zoneData?.map(
                ({ publicId, name, description, type }) =>
                  new Device(publicId, name, description, type),
              ) || []
            }
          />
        </div>
      </div>
    </>
  );
};

export default ZonePage;
