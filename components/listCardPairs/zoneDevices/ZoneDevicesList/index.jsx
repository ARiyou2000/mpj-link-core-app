"use client";

import { cn } from "@/lib/utils";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import ZoneDeviceCard from "../ZoneDeviceCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { useParams } from "next/navigation";

const ZoneDevicesList = ({ list = [], className, ...props }) => {
  const params = useParams();
  const zonePublicId = params.zonePublicId;

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
          {list?.length > 0 ? (
            list?.map((zoneDevice, index) => {
              return (
                <Link
                  key={`zone_${zonePublicId}_device_${zoneDevice.publicId}`}
                  href={`/fa/devices/${zoneDevice.category}/${zoneDevice.publicId}?zpid=${zonePublicId}`}
                  className={`${
                    list?.length < 4
                      ? "max-h-[50%] flex-1"
                      : `basis-[calc(100%/2-(1.5rem*1/2))] min-h-[16.5rem] ${
                          list?.length === 4
                            ? "h-[calc(100%/2-(1.5rem*1/2))]"
                            : "h-[16.5rem]"
                        }`
                  }`}>
                  <ZoneDeviceCard
                    {...zoneDevice}
                    key={`scenarioCard_${index}_${zoneDevice.publicId}`}
                    name={zoneDevice.name}
                    description={zoneDevice.description}
                    publicId={zoneDevice.publicId}
                    icon={zoneDevice.icon}
                    className={"w-full h-full"}
                  />
                </Link>
              );
            })
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </ScrollArea>
    </>
  );
};

export default ZoneDevicesList;
