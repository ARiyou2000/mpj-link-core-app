import ScenarioCard from "../ScenarioCard";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const ScenariosList = ({
  list = [],
  hasFavoriteButton = true,
  className,
  ...props
}) => {
  return (
    <>
      <ScrollArea className={cn("flex-1 w-full", className)} {...props}>
        <div className={"h-full flex flex-col gap-6 pb-6"}>
          {list?.length > 0 ? (
            list?.map((scenario, index) => {
              return (
                <ScenarioCard
                  {...scenario}
                  hasFavoriteButton={hasFavoriteButton}
                  key={`scenarioCard_${index}_${scenario.publicId}`}
                />
              );
            })
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </ScrollArea>
    </>
  );
};

export default ScenariosList;
