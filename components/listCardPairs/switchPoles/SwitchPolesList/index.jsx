import LoadingSpinner from "@/components/loading/LoadingSpinner";
import SwitchCard from "../SwitchPoleCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const SwitchPolesList = ({ list = [], className, ...props }) => {
  return (
    <>
      <ScrollArea className={cn("w-full h-full", className)}>
        <div
          className={
            "w-full flex flex-col items-center justify-center gap-6 pb-5"
          }
          {...props}>
          {list?.length > 0 ? (
            list?.map((switchPoleData, index) => {
              return (
                <SwitchCard
                  key={`switchPole_${index}_${switchPoleData.publicId}`}
                  className={"w-full"}
                  checked={switchPoleData.value === "02"}
                  {...switchPoleData}
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

export default SwitchPolesList;
