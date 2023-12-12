import DevicesListTab from "@/components/listCardPairs/devices/DevicesListTab";
import authorizedFetch from "@/utils/authorizedFetch";

const DevicesListPage = async () => {
  const deviceList = await authorizedFetch(
    `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/devices`,
  );

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
