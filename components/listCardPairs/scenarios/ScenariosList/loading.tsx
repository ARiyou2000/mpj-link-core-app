import { cn } from "@/lib/utils";
import ScenarioCardLoading from "@/components/listCardPairs/scenarios/ScenarioCard/loading";

const ScenariosListLoading = ({ className = "", ...props }) => {
  return (
    <div
      className={cn(
        "h-full flex flex-row flex-wrap gap-y-6 gap-x-[4%] pb-6",
        "flex-1 w-full overflow-auto no-scrollbar px-3",
        className,
      )}
      {...props}>
      {new Array(25).fill(null).map((_, index) => {
        return (
          <ScenarioCardLoading
            hasFavoriteButton={true}
            key={`scenarioCard_${index}`}
            className={"w-full landscape:w-[48%]"}
          />
        );
      })}
    </div>
  );
};

export default ScenariosListLoading;
