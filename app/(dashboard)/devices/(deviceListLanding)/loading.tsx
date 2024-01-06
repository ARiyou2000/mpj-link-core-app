import DeviceListLoading from "@/components/listCardPairs/devices/DevicesListTab/loading";

const DeviceListPageLoading = () => {
  return (
    <>
      <div className={"h-full flex flex-col pt-8 landscape:pt-0"}>
        <h3 className={"px-4 font-semibold text-base"}>لیست دستگاه‌ها</h3>
        <DeviceListLoading className={"flex-1 h-full"} />
      </div>
    </>
  );
};
export default DeviceListPageLoading;
