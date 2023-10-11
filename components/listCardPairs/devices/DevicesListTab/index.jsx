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
import getCategorizedDevices from "@/utils/deviceTypeList";
import Link from "next/link";

const tabContentAndScrollStyleClassName = "h-full w-full";
const deviceCardClassName = "my-6";

const DevicesListTab = ({ list = [], className, ...props }) => {
  const [headers, setHeaders] = useState([]);
  const [deviceList, setDeviceList] = useState([]);

  useEffect(() => {
    if (list && list?.length > 0) {
      const [headers, categorizedDeviceList] = getCategorizedDevices(list);
      setHeaders(headers);
      setDeviceList(categorizedDeviceList);
    }
  }, [list]);

  return (
    <>
      <Tabs
        defaultValue="all"
        className={cn("w-full flex flex-col ", className)}
        {...props}>
        <TabsList className="w-full max-w-full flex flex-row flex-nowrap gap-x-2.5 overflow-y-auto m-x-auto items-center justify-start no-scrollbar py-4 bg-black bg-opacity-50 rounded-none">
          {list?.length > 0 ? (
            // <>
            <React.Fragment key={"tabHeader"}>
              <TabsTrigger value={"all"} key={"tabHeader_noIndexing_all"}>
                همه دستگاه ها
              </TabsTrigger>
              {headers?.map((header, index) => {
                return (
                  <TabsTrigger
                    value={header.dataKey}
                    key={`tabHeader_${index}_${header.dataKey}`}>
                    {header.title}
                  </TabsTrigger>
                );
              })}
            </React.Fragment>
          ) : (
            // </>
            <LoadingSpinner />
          )}
        </TabsList>

        <div
          className={
            "flex-1 h-0 px-4 flex flex-col items-center justify-center"
          }>
          {list?.length > 0 ? (
            // <>
            <React.Fragment key={"tabContent"}>
              <TabsContent
                value="all"
                className={tabContentAndScrollStyleClassName}
                key={"tabContent_noIndexing_all"}>
                <ScrollArea className={tabContentAndScrollStyleClassName}>
                  {list?.map((device, deviceIndex) => {
                    return (
                      <Link
                        key={`tabContent_noIndexing_all_${deviceIndex}_device_${device.publicId}`}
                        href={`/devices/${device.category}/${device.publicId}`}>
                        <DeviceCard
                          className={deviceCardClassName}
                          {...device}
                        />
                      </Link>
                    );
                  })}
                </ScrollArea>
              </TabsContent>

              {headers?.map((header, tabContentIndex) => {
                return (
                  <TabsContent
                    value={header.dataKey}
                    className={tabContentAndScrollStyleClassName}
                    key={`tabContent_${tabContentIndex}_${header.dataKey}`}>
                    <ScrollArea className={tabContentAndScrollStyleClassName}>
                      {deviceList[header.dataKey]?.map(
                        (device, deviceIndex) => {
                          return (
                            <Link
                              key={`tabContent_${tabContentIndex}_${header.dataKey}_${deviceIndex}_device_${device.publicId}`}
                              href={`/devices/${device.category}/${device.publicId}`}>
                              <DeviceCard
                                className={deviceCardClassName}
                                {...device}
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
            // </>
            <LoadingSpinner />
          )}
        </div>
      </Tabs>
    </>
  );
};

export default DevicesListTab;
