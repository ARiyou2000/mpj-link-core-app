"use client";

import { cn } from "@/lib/utils";
import DevicesListTab from "@/components/listCardPairs/devices/DevicesListTab";
import { getDevices } from "@/utils/getStaticData";
import useStaticData from "@/hooks/useStaticData";
import DeviceInfo from "@/classes/devices/deviceInfo";

const DevicesListPage = ({ className }) => {
  const [data] = useStaticData(getDevices);
  return (
    <>
      <div className={cn("h-full flex flex-col pt-8", className)}>
        <h3 className={"px-4 font-semibold text-base"}>لیست دستگاه ها</h3>
        <DevicesListTab
          className={"flex-1 h-0"}
          list={
            data?.map(
              ({ publicId, name, description, type }) =>
                new DeviceInfo(publicId, name, description, type),
            ) || []
          }
        />
      </div>
    </>
  );
};

export default DevicesListPage;
