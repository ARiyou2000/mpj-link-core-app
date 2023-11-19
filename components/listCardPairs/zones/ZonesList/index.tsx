import ZoneCard from "../ZoneCard";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Zone from "@/classes/zone";
import { cn } from "@/lib/utils";

const ZonesList = ({ list = [], className = "", ...props }) => {
  return (
    <>
      <div
        className={cn(
          "w-full max-w-full flex flex-row items-center justify-start flex-nowrap gap-x-4 overflow-y-auto m-x-auto no-scrollbar py-4 px-0",
          // Remove after getting zone images and description
          "gap-x-3.5",
          className,
        )}
        {...props}>
        {list?.length > 0 ? (
          list?.map((zone: Zone, index) => {
            return (
              <ZoneCard
                data={zone}
                key={`zoneCard_${index}_${zone.publicId}`}
              />
            );
          })
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
};

export default ZonesList;
