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
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import getCategorizedDevices from "@/utils/getCategorizedDevices";
import Link from "next/link";
import DeviceInfo from "@/classes/devices/deviceInfo";

const tabContentAndScrollStyleClassName = "h-full w-full";
const deviceCardClassName = "";
const tabIconsStyleClassName = "w-6 h-6";

type propsT = {
  className?: string;
  list: DeviceInfo[];
};
const DevicesListTab = ({ list, className = "", ...props }: propsT) => {
  if (!list) {
    return (
      <div className={"flex w-full h-full items-center justify-center"}>
        <LoadingSpinner />
      </div>
    );
  }

  const [headers, categorizedDeviceList] = getCategorizedDevices(list);

  return (
    <>
      <Tabs
        defaultValue="all"
        className={cn("w-full flex flex-col gap-4", className)}
        {...props}>
        <TabsList className="w-full max-w-full flex flex-row flex-nowrap gap-x-4 overflow-y-auto m-x-auto items-center justify-start no-scrollbar py-4 rounded-none">
          {list?.length > 0 ? (
            <React.Fragment key={"tabHeader"}>
              {headers?.map((header) => {
                const Icon = header.icon;
                return (
                  <TabsTrigger
                    value={header.dataKey}
                    key={`tabHeader_${header.dataKey}`}>
                    <span>{header.title}</span>
                    <Icon className={tabIconsStyleClassName} />
                  </TabsTrigger>
                );
              })}
            </React.Fragment>
          ) : (
            "Empty list"
          )}
        </TabsList>

        <div className={"flex-1 h-0 px-1 flex flex-col gap-5 items-start"}>
          {list?.length > 0 ? (
            <React.Fragment key={"tabContent"}>
              {headers?.map((header) => {
                return (
                  <TabsContent
                    value={header.dataKey}
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
          ) : (
            "Empty list"
          )}
        </div>
      </Tabs>
    </>
  );
};

export default DevicesListTab;
