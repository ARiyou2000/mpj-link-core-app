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
import React, { useEffect, useState } from "react";
import getCategorizedDevices, {
  DevicesCategoryHeadersT,
} from "@/utils/getCategorizedDevices";
import Link from "next/link";
import DeviceInfo, { deviceCategories } from "@/classes/devices/deviceInfo";
import { Grip } from "@/components/icons/dashed";
import { Switches } from "@/components/icons/colored";

const tabContentAndScrollStyleClassName = "h-full w-full";
const deviceCardClassName = "my-6";
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
        className={cn("w-full flex flex-col ", className)}
        {...props}>
        <TabsList className="w-full max-w-full flex flex-row flex-nowrap gap-x-4 overflow-y-auto m-x-auto items-center justify-start no-scrollbar py-4 rounded-none">
          {list?.length > 0 ? (
            <React.Fragment key={"tabHeader"}>
              {headers?.map((header, index) => {
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

        <div
          className={
            "flex-1 h-0 p-1 flex flex-col items-center justify-center"
          }>
          {list?.length > 0 ? (
            <React.Fragment key={"tabContent"}>
              {headers?.map((header, tabContentIndex) => {
                return (
                  <TabsContent
                    value={header.dataKey}
                    className={tabContentAndScrollStyleClassName}
                    key={`tabContent_${tabContentIndex}_${header.dataKey}`}>
                    <ScrollArea className={tabContentAndScrollStyleClassName}>
                      {categorizedDeviceList[header.dataKey]?.map(
                        (device, deviceIndex) => {
                          return (
                            <Link
                              key={`tabContent_${tabContentIndex}_${header.dataKey}_${deviceIndex}_device_${device.publicId}`}
                              href={`/devices/${device.type}/${device.publicId}`}>
                              <DeviceCard
                                className={deviceCardClassName}
                                deviceInfo={device}
                              />
                            </Link>
                          );
                        },
                      )}
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
