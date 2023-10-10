"use client";

import ZonesList from "@/components/listCardPairs/zones/ZonesList";
import ScenariosList from "@/components/listCardPairs/scenarios/ScenariosList";
import { getScenarios, getZones } from "@/utils/getStaticData";
import useStaticData from "@/hooks/useStaticData";
import { ScenarioForceUpdateContext } from "@/contexts/forceUpdateContext";
// import Scenario from "@/classes/scenario";
// import Zone from "@/classes/zone";

const HomePage = () => {
  const [zonesData] = useStaticData(getZones);
  const [scenarioData, scenarioForceUpdate] = useStaticData(getScenarios);

  return (
    <>
      <div className={"w-full h-full flex flex-col gap-8 pt-8"}>
        <div className={"w-full flex flex-col items-start"}>
          <h3 className={"px-4"}>زون ها</h3>
          <ZonesList
            // list={zonesData?.map((publicId, name) => new Zone(publicId, name))}
            list={zonesData}
          />
        </div>

        <div className={"flex-1 h-0 px-4 flex flex-col gap-5 items-start"}>
          <h3>سناریو ها</h3>
          <ScenarioForceUpdateContext.Provider value={scenarioForceUpdate}>
            <ScenariosList
              // list={scenarioData?.map(
              //   ({ publicId, name, description, favorite, image }) =>
              //     new Scenario(publicId, name, description, favorite, image),
              // )}
              list={scenarioData}
            />
          </ScenarioForceUpdateContext.Provider>
        </div>
      </div>
    </>
  );
};

export default HomePage;
