"use client";

import ZonesList from "@/components/listCardPairs/zones/ZonesList";
import ScenariosList from "@/components/listCardPairs/scenarios/ScenariosList";
import { getScenarios, getZones } from "@/utils/getStaticData";
import useStaticData from "@/hooks/useStaticData";
import { ScenarioForceUpdateContext } from "@/contexts/forceUpdateContext";
import Scenario from "@/classes/scenario";
import Zone from "@/classes/zone";

const HomePage = () => {
  const [zonesData] = useStaticData(getZones);
  const [scenarioData, scenarioForceUpdate] = useStaticData(getScenarios);

  return (
    <>
      <div
        className={
          "w-full h-full flex flex-col gap-8 landscape:gap-2.5 pt-8 landscape:pt-0"
        }>
        <div className={"w-full flex flex-col items-start"}>
          <h3 className={"px-4"}>زون ها</h3>
          <ZonesList
            list={zonesData?.map(
              ({ publicId, name, description, image }, index) =>
                new Zone(publicId, name, description || "", image || ""),
            )}
          />
        </div>

        <div className={"flex-1 h-0 px-1 flex flex-col gap-5 items-start"}>
          <h3 className={"px-3"}>سناریو ها</h3>
          <ScenarioForceUpdateContext.Provider value={scenarioForceUpdate}>
            <ScenariosList
              list={scenarioData?.map(
                ({ publicId, name, description, image, favorite }, index) =>
                  new Scenario(publicId, name, description, image, favorite),
              )}
            />
          </ScenarioForceUpdateContext.Provider>
        </div>
      </div>
    </>
  );
};

export default HomePage;
