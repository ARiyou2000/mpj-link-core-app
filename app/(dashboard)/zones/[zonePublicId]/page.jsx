import ZoneDevicesList from "@/components/listCardPairs/zoneDevices/ZoneDevicesList";
import ZoneHeader from "@/components/deviceAndZoneHeader/ZoneHeader";
import authorizedFetch from "@/utils/authorizedFetch";

const ZonePage = async ({ params }) => {
  const { zonePublicId } = params;

  const [zones, zoneDevices] = await Promise.all([
    authorizedFetch("zone"),
    authorizedFetch(`zone/${zonePublicId}`),
  ]);

  const zoneInfo = zones?.find((zoneInfo) => {
    return zoneInfo.publicId === zonePublicId;
  });

  return (
    <>
      <div className={"h-full px-1 flex flex-col gap-5"}>
        <div className={"px-3"}>
          <ZoneHeader
            name={zoneInfo?.name}
            description={zoneInfo?.description}
          />
        </div>
        <div className={"flex-1 h-0 w-full"}>
          <ZoneDevicesList className={"pt-2"} list={zoneDevices} />
        </div>
      </div>
    </>
  );
};

export default ZonePage;
