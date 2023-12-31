"use client";

import { cn } from "@/lib/utils";
import ZoneDeviceCard from "../ZoneDeviceCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { useParams } from "next/navigation";
import generalListStatus from "@/components/listCardPairs/generalListStatus";
import DeviceInfo, {
  ServerSideDeviceInfoT,
} from "@/classes/devices/deviceInfo";

const ZoneDevicesList = ({
  list,
  className,
  ...props
}: {
  className?: string;
  list: ServerSideDeviceInfoT[];
}) => {
  const params = useParams();
  const zonePublicId = params?.zonePublicId;

  return (
    <>
      <ScrollArea className={"h-full"}>
        <div
          className={cn(
            `w-full pb-5 h-full flex gap-6 ${
              list?.length < 4
                ? "flex-col"
                : "flex-row flex-wrap items-center justify-between"
            }`,
            className,
          )}
          {...props}>
          {generalListStatus({ list }) ||
            list.map(({ publicId, name, description, type }) => {
              const zoneDevice = new DeviceInfo(
                publicId,
                name,
                description,
                type,
              );
              return (
                <Link
                  key={`zone_${zonePublicId}_device_${zoneDevice.publicId}`}
                  href={`/devices/${zoneDevice.type}/${zoneDevice.publicId}?zpid=${zonePublicId}`}
                  className={`${
                    list?.length < 4
                      ? "max-h-[50%] landscape:max-h-full flex-1"
                      : `basis-[calc(100%/2-(1.5rem*1/2))] min-h-[16.5rem] ${
                          list?.length === 4
                            ? "h-[calc(100%/2-(1.5rem*1/2))]"
                            : "h-[16.5rem]"
                        }`
                  }`}>
                  <ZoneDeviceCard
                    key={`scenarioCard_${zoneDevice.publicId}`}
                    deviceInfo={zoneDevice}
                    className={"w-full h-full"}
                  />
                </Link>
              );
            })}
        </div>
      </ScrollArea>
    </>
  );
};

export default ZoneDevicesList;
