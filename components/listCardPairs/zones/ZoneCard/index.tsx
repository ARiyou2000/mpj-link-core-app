import { cn } from "@/lib/utils";
import Link from "next/link";
import Zone from "@/classes/Zone";

type propsType = {
  ZoneInstance: Zone;
  className?: string;
  loading?: boolean;
};

export const zoneCardMainStyleClassName =
  "min-w-[11.5rem] max-w-[65vw] h-32 px-3 py-2 rounded-card border-1 border-milkwhite transition-all duration-700 " +
  "flex-none inline-flex flex-col items-center justify-start gap-2 " +
  "rounded-card text-sm text-milkwhite font-normal " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "hover:bg-white hover:bg-opacity-[0.06] hover:backdrop-blur-sm hover:scale-110 hover:shadow-active hover:border-2 " +
  // Remove after getting zone image and description
  "min-w-[6.5625rem] h-9";

const ZoneCard = ({ ZoneInstance, className = "", ...props }: propsType) => {
  return (
    <Link
      href={`/zones/${ZoneInstance?.publicId}`}
      className={cn(zoneCardMainStyleClassName, className)}
      {...props}>
      <h3
        className={
          "w-full text-center text-white font-normal text-sm truncate"
        }>
        {ZoneInstance?.name}
      </h3>
      {/*<span className={"w-10 h-10"}>{ZoneInstance?.image}</span>*/}
      {/*<p className={"w-full text-start text-xs"}>{ZoneInstance?.description}</p>*/}
    </Link>
  );
};

export default ZoneCard;
