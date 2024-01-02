import { cn } from "@/lib/utils";
import ZoneCardLoading from "@/components/listCardPairs/zones/ZoneCard/loading";
import { zoneListMainStyleClassName } from "@/components/listCardPairs/zones/ZonesList/index";

const ZonesListLoading = ({ className = "", ...props }) => {
  return (
    <>
      <div className={"w-full"}>
        <div
          className={cn(
            zoneListMainStyleClassName,
            "p-4 overflow-auto no-scrollbar",
            // Remove after getting zone images and description
            "gap-x-3.5",
            className,
          )}
          {...props}>
          {new Array(15).fill(null).map((_, index) => {
            return <ZoneCardLoading key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ZonesListLoading;
