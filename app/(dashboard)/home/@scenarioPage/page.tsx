import authorizedFetch from "@/utils/authorizedFetch";
import ScenariosList from "@/components/listCardPairs/scenarios/ScenariosList";
import { ServerSideScenarioT } from "@/classes/scenario";

const ScenarioPage = async () => {
  const scenarioData = (await authorizedFetch(
    `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/scenarios`,
  )) as ServerSideScenarioT[];

  return <ScenariosList list={scenarioData} />;
};

export default ScenarioPage;
