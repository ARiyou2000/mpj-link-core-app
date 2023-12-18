import GeneralHeader from "@/components/GeneralHeader";
import ScenariosList from "@/components/listCardPairs/scenarios/ScenariosList";
import { ServerSideScenarioT } from "@/classes/scenario";
import fetchUrl from "@/utils/fetchUrl";

const FavoritePage = async () => {
  const url = new URL(`${process.env.NEXT_SELF_ABSOLUTE_URL}/api/scenarios`);
  url.searchParams.set("favored", "true");
  const scenarioData = (await fetchUrl(url)) as ServerSideScenarioT[];

  return (
    <>
      <div className={"h-full px-4 pt-4 flex flex-col gap-6"}>
        <GeneralHeader title={"سناریو های مورد علاقه"} />
        <ScenariosList list={scenarioData} hasFavoriteButton={false} />
      </div>
    </>
  );
};

export default FavoritePage;
