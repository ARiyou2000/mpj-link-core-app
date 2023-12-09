"use client";

import GeneralHeader from "@/components/GeneralHeader";
import ScenariosList from "@/components/listCardPairs/scenarios/ScenariosList";
import useStaticData from "@/hooks/useStaticData";
import { getFavoredScenarios } from "@/utils/getStaticData";
import Scenario from "@/classes/scenario";

const FavoritePage = () => {
  const [scenarioData] = useStaticData(getFavoredScenarios);
  return (
    <>
      <div className={"h-full p-4 flex flex-col gap-6"}>
        <GeneralHeader title={"سناریو های مورد علاقه"} />
        <ScenariosList
          list={scenarioData?.map(
            ({ publicId, name, description, image, favorite }) =>
              new Scenario(publicId, name, description, image, favorite),
          )}
          hasFavoriteButton={false}
        />
      </div>
    </>
  );
};

export default FavoritePage;
