"use client";

import { Power } from "lucide-react";
import { PowerToggle } from "@/components/ui/power-toggle";
import DeviceAndZoneHeaderContainer from "./DeviceAndZoneHeaderContainer";

const DeviceHeader = ({
  name,
  description,
  className,
  hasPowerButton = true,
  powerValue = true,
  onPowerChange = (value) => null,
  ...props
}) => {
  return (
    <>
      <DeviceAndZoneHeaderContainer
        className={className}
        name={name}
        description={description}
        {...props}>
        {hasPowerButton && (
          <>
            <PowerToggle
              variant={"outline"}
              pressed={powerValue}
              onPressedChange={onPowerChange}>
              <Power className={"w-5 h-5"} />
            </PowerToggle>
          </>
        )}
      </DeviceAndZoneHeaderContainer>
    </>
  );
};

export default DeviceHeader;
