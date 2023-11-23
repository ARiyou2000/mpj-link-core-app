import ScenarioCard from "../ScenarioCard";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Scenario from "@/classes/scenario";

type propsType = {
  list: null | Scenario[];
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
        {list ? (
          list?.length > 0 ? (
            <div className={"h-full flex flex-col gap-6 pb-6"}>
              {list?.map((scenario: Scenario, index) => {
                return (
                  <ScenarioCard
                    scenarioInstance={scenario}
                    hasFavoriteButton={hasFavoriteButton}
                    key={`scenarioCard_${index}_${scenario.publicId}`}
                  />
                );
              })}
            </div>
          ) : (
            <h3 className={"w-full h-full flex items-center justify-center"}>
              Empty List
            </h3>
          )
        ) : (
          <div className={"w-full h-full flex items-center justify-center"}>
            <LoadingSpinner />
          </div>
        )}
      </ScrollArea>
    </>
  );
};

export default ScenariosList;
