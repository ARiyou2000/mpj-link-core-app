import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { deviceTabContentAndScrollStyleClassName } from "@/components/listCardPairs/devices/DevicesListTab/index";
import DeviceCardLoading from "@/components/listCardPairs/devices/DeviceCard/loading";

const DeviceListLoading = ({ className = "", ...props }) => {
  return (
    <>
      <div className={cn("w-full flex flex-col gap-4", className)} {...props}>
        <div
          className={cn(
            "px-4 w-full max-w-full flex flex-row flex-nowrap gap-x-4 m-x-auto items-center justify-start rounded-none",
            "overflow-auto no-scrollbar py-4",
          )}>
          {new Array(15).fill(null).map(() => {
            return (
              <div
                key={`tabHeader_${Math.random()}`}
                className={
                  "flex-none inline-flex items-center justify-between gap-3 whitespace-nowrap px-3 py-4 min-w-[7.8125rem] " +
                  "text-sm text-milkwhite font-normal " +
                  "border-1 rounded-card border-milkwhite ring-offset-white " +
                  "loading"
                }>
                <h3 className={"w-[4.25rem]"}>&nbsp;</h3>
                {/*<LoadingTitle />*/}
                {/*<LoadingSpinner className={deviceTabIconsStyleClassName} />*/}
                <span className={"w-6 h-6"} />
              </div>
            );
          })}
        </div>

        <div className={"flex-1 h-0 px-1 flex flex-col gap-5 items-start"}>
          <div
            className={deviceTabContentAndScrollStyleClassName}
            key={`tabContent_${Math.random()}`}>
            <ScrollArea className={deviceTabContentAndScrollStyleClassName}>
              <div
                className={cn(
                  "h-full w-full flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-[2%] pb-8",
                  "overflow-auto no-scrollbar",
                )}>
                {new Array(15).fill(null).map(() => {
                  return (
                    <div
                      key={`tabContent_${Math.random()}`}
                      className={"w-full landscape:w-[49%]"}>
                      <DeviceCardLoading />
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceListLoading;
