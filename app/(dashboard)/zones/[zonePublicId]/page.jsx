import ZoneDevicesList from "@/components/listCardPairs/zoneDevices/ZoneDevicesList";
import authorizedFetch from "@/utils/authorizedFetch";

const ZonePage = async ({ params }) => {
  const { zonePublicId } = params;

  const url = new URL("api/devices", `${process.env.NEXT_SELF_ABSOLUTE_URL}/`);
  url.searchParams.set("zpid", zonePublicId);

  // `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/devices?zpid=${zonePublicId}`
  const zoneDevices = await authorizedFetch(url);

  return (
    <>
      <ZoneDevicesList className={"pt-2"} list={zoneDevices} />
    </>
  );
};

export default ZonePage;
