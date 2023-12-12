import authorizedFetch from "@/utils/authorizedFetch";
import ZonesList from "@/components/listCardPairs/zones/ZonesList";
import { ServerSideZoneT } from "@/classes/zone";

const ZonePage = async () => {
  const zonesData = (await authorizedFetch(
    `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/zones`,
  )) as ServerSideZoneT[];

  return <ZonesList list={zonesData} />;
};

export default ZonePage;
