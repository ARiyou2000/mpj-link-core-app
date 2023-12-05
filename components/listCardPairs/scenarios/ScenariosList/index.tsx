"use client";

import ScenarioCard from "../ScenarioCard";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Scenario, { ServerSideScenarioT } from "@/classes/scenario";
import generalListStatus from "@/components/listCardPairs/generalListStatus";

type propsType = {
  list: null | ServerSideScenarioT[];
  hasFavoriteButton?: boolean;
  className?: string;
};
const ScenariosList = ({
  list,
  hasFavoriteButton = true,
  className = "",
  ...props
}: propsType) => {
  return (
    <>
      <ScrollArea className={cn("flex-1 w-full", className)} {...props}>
        {generalListStatus({ list }) || (
          <div
            className={
              "h-full flex flex-row flex-wrap gap-y-6 gap-x-[4%] pb-6"
            }>
            {list?.map((scenarioData) => {
              const { publicId, name, description, image, favorite, active } =
                scenarioData;
              const scenario = new Scenario(
                publicId,
                name,
                description,
                image,
                favorite,
                active,
              );

              return (
                <ScenarioCard
                  scenarioInstance={scenario}
                  hasFavoriteButton={hasFavoriteButton}
                  key={`scenarioCard_${scenario.publicId}`}
                  className={"w-full landscape:w-[48%]"}
                />
              );
            })}
          </div>
        )}
      </ScrollArea>
    </>
  );
};

export default ScenariosList;
