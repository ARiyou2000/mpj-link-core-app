import ZoneCard from "../ZoneCard";
import Zone, { ServerSideZoneT } from "@/classes/Zone";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import generalListStatus from "@/components/listCardPairs/generalListStatus";

type PropsT = {
  list: null | ServerSideZoneT[];
  className?: string;
};

export const zoneListMainStyleClassName =
  "px-3 py-1 w-full max-w-full flex flex-row flex-nowrap gap-x-4 m-x-auto items-center justify-start";

const ZonesList = ({ list, className = "", ...props }: PropsT) => {
  return (
    <ScrollArea variant={"horizontal"} className={"w-full"}>
      <div
        className={cn(
          zoneListMainStyleClassName,
          // Remove after getting zone images and description
          "gap-x-3.5",
          className,
        )}
        {...props}>
        {generalListStatus({ list }) ||
          list?.map((zoneData) => {
            const { publicId, name, description, image } = zoneData;
            const zone = new Zone(
              publicId,
              name,
              description || "",
              image || "",
            );

            return (
              <ZoneCard ZoneInstance={zone} key={`zoneCard_${zone.publicId}`} />
            );
          })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ZonesList;
