"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/devices-tabs";
import DeviceCard from "../DeviceCard";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React, { useCallback } from "react";
import getCategorizedDevices from "@/utils/getCategorizedDevices";
import Link from "next/link";
import DeviceInfo, {
  ServerSideDeviceInfoT,
} from "@/classes/devices/deviceInfo";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import GeneralListStatus from "@/components/listCardPairs/GeneralListStatus";

const tabContentAndScrollStyleClassName = "h-full w-full";
const deviceCardClassName = "";
const tabIconsStyleClassName = "w-6 h-6";

type propsT = {
  className?: string;
  list: ServerSideDeviceInfoT[];
};

const DevicesListTab = ({ list, className = "", ...props }: propsT) => {
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const [headers, categorizedDeviceList] = getCategorizedDevices(
    list.map(({ publicId, name, description, type }) => {
      return new DeviceInfo(publicId, name, description, type);
    }),
  );

  const filterValue = searchParams?.get("filter");

  return (
    <>
      <Tabs
        value={filterValue || "all"}
        onValueChange={(value) => {
          router.push(pathname + "?" + createQueryString("filter", value));
        }}
        className={cn("w-full flex flex-col gap-4", className)}
        {...props}>
        <ScrollArea variant={"horizontal"}>
          <TabsList className="px-4 w-full max-w-full flex flex-row flex-nowrap gap-x-4 m-x-auto items-center justify-start rounded-none">
            {GeneralListStatus({ list }) || (
              <React.Fragment key={"tabHeader"}>
                {headers?.map((header) => {
                  const Icon = header.icon;
                  return (
                    <TabsTrigger
                      value={header.dataKey.toString()}
                      key={`tabHeader_${header.dataKey}`}>
                      <span>{header.title}</span>
                      <Icon className={tabIconsStyleClassName} />
                    </TabsTrigger>
                  );
                })}
              </React.Fragment>
            )}
          </TabsList>
          <ScrollBar orientation={"horizontal"} />
        </ScrollArea>

        <div className={"flex-1 h-0 px-1 flex flex-col gap-5 items-start"}>
          {GeneralListStatus({ list }) || (
            <React.Fragment key={"tabContent"}>
              {headers?.map((header) => {
                return (
                  <TabsContent
                    value={header.dataKey.toString()}
                    className={tabContentAndScrollStyleClassName}
                    key={`tabContent_${header.dataKey}`}>
                    <ScrollArea className={tabContentAndScrollStyleClassName}>
                      <div
                        className={
                          "h-full w-full flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-[2%] pb-8"
                        }>
                        {categorizedDeviceList[header.dataKey]?.map(
                          (device) => {
                            return (
                              <Link
                                key={`tabContent_${header.dataKey}_device_${device.publicId}`}
                                href={`/devices/${device.type}/${device.publicId}`}
                                className={"w-full landscape:w-[49%]"}>
                                <DeviceCard
                                  className={deviceCardClassName}
                                  deviceInfo={device}
                                />
                              </Link>
                            );
                          },
                        )}
                      </div>
                    </ScrollArea>
                  </TabsContent>
                );
              })}
            </React.Fragment>
          )}
        </div>
      </Tabs>
    </>
  );
};

export default DevicesListTab;
