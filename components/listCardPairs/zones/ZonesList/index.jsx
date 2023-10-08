import ZoneCard from "../ZoneCard";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

const ZonesList = ({ list = [], ...props }) => {
  return (
    <>
      <div
        className={
          "w-full max-w-full flex flex-row items-center justify-start flex-nowrap gap-x-2.5 overflow-y-auto m-x-auto no-scrollbar py-4 px-0"
        }
        {...props}>
        {list?.length > 0 ? (
          list?.map((zone, index) => {
            return (
              <ZoneCard
                {...zone}
                name={zone.name}
                publicId={zone.publicId}
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
