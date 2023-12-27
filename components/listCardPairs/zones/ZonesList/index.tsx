import ZoneCard from "../ZoneCard";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Zone, { ServerSideZoneT } from "@/classes/Zone";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ZonesList = ({
  list,
  className = "",
  ...props
}: {
  list: ServerSideZoneT[];
  className?: string;
}) => {
  return (
    <div className={"w-full"}>
      <ScrollArea variant={"horizontal"}>
        <div
          className={cn(
            "px-3 py-1 w-full max-w-full flex flex-row flex-nowrap gap-x-4 m-x-auto items-center justify-start",
            // Remove after getting zone images and description
            "gap-x-3.5",
            className,
          )}
          {...props}>
          {!!list ? (
            list?.length > 0 ? (
              list?.map((zoneData) => {
                const { publicId, name, description, image } = zoneData;
                const zone = new Zone(
                  publicId,
                  name,
                  description || "",
                  image || "",
                );

                return (
                  <ZoneCard data={zone} key={`zoneCard_${zone.publicId}`} />
                );
              })
            ) : (
              "Empty List"
            )
          ) : (
            <LoadingSpinner />
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ZonesList;
