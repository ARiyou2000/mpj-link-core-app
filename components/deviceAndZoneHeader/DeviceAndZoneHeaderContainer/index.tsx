import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import LoadingTitle from "@/components/loading/LoadingTitle";
import LoadingDescription from "@/components/loading/LoadingDescription";

export type DeviceAndZoneHeaderContainerT = {
  name?: string;
  description?: string;
  className?: string;
};

const DeviceAndZoneHeaderContainer = ({
  name,
  description,
  children,
  className,
  ...props
}: DeviceAndZoneHeaderContainerT & {
  children?: ReactNode;
}) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-between gap-2 bg-black bg-opacity-50 rounded-2xl p-4 min-h-[5.625rem] " +
            "landscape:absolute landscape:left-3 landscape:right-3 landscape:top-3",
          className,
        )}
        {...props}>
        <div className={"hidden landscape:block"} />

        {/* Name and Description */}
        <div
          className={
            "flex flex-col gap-2.5 justify-center items-start landscape:items-center landscape:justify-center"
          }>
          <h3 className={"text-xl font-bold text-milkwhite"}>
            {name || <LoadingTitle className={"w-16"} />}
          </h3>
          <h4 className={"text-sm font-thin text-milkwhite"}>
            {description || <LoadingDescription className={"w-28"} />}
          </h4>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
};

export default DeviceAndZoneHeaderContainer;
