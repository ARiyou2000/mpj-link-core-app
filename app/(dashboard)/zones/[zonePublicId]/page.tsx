import ZoneDevicesList from "@/components/listCardPairs/zoneDevices/ZoneDevicesList";
import authorizedFetch from "@/utils/authorizedFetch";
import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";

type PropsT = { params: { zonePublicId: string } };
const ZonePage = async ({ params }: PropsT) => {
  const { zonePublicId } = params;

  const url = new URL(`${process.env.NEXT_SELF_ABSOLUTE_URL}/api/devices`);
  url.searchParams.set("zpid", zonePublicId);

  const zoneDevices = (await authorizedFetch(url)) as ServerSideDeviceInfoT[];

  return (
    <>
      <ZoneDevicesList className={"pt-2"} list={zoneDevices} />
    </>
  );
};

export default ZonePage;
