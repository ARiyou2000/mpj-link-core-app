import ZoneCard from "../ZoneCard";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Zone from "@/classes/zone";

const ZonesList = ({ list = [], ...props }) => {
  return (
    <>
      <div
        className={
          "w-full max-w-full flex flex-row items-center justify-start flex-nowrap gap-x-2.5 overflow-y-auto m-x-auto no-scrollbar py-4 px-0"
        }
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
