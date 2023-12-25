import { cn } from "@/lib/utils";
import { ReactNode } from "react";

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
          "flex flex-row items-center justify-between gap-2 bg-black bg-opacity-50 rounded-2xl p-4 min-h-[5.625rem]",
          className,
        )}
        {...props}>
        <div className={"flex flex-col gap-2.5 justify-center items-start"}>
          <h3 className={"text-xl font-bold text-milkwhite"}>
            {name || <div dir={"ltr"} className={"w-16 h-4 loading"} />}
          </h3>
          <h4 className={"text-sm font-thin text-milkwhite"}>
            {description || <div className={"w-28 h-3 loading"} />}
          </h4>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
};

export default DeviceAndZoneHeaderContainer;
