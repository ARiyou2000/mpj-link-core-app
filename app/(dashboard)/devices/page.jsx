"use client";

import DevicesListTab from "@/components/listCardPairs/devices/DevicesListTab";
import { getDevices } from "@/utils/getStaticData";
import useStaticData from "@/hooks/useStaticData";
import DeviceInfo from "@/classes/devices/deviceInfo";

const DevicesListPage = () => {
  const [data] = useStaticData(getDevices);
  const deviceList =
    data?.map(
      ({ publicId, name, description, type }) =>
        new DeviceInfo(publicId, name, description, type),
    ) || [];

  return (
    <>
      <div className={"h-full flex flex-col pt-8 landscape:pt-0"}>
        <h3 className={"px-4 font-semibold text-base"}>لیست دستگاه‌ها</h3>
        <DevicesListTab className={"flex-1 h-0"} list={deviceList} />
      </div>
    </>
  );
};

export default DevicesListPage;
