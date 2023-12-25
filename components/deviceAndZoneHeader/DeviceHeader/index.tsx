"use client";

import { Power } from "lucide-react";
import { PowerToggle } from "@/components/ui/power-toggle";
import DeviceAndZoneHeaderContainer, {
  DeviceAndZoneHeaderContainerT,
} from "../DeviceAndZoneHeaderContainer";

type PropsT = DeviceAndZoneHeaderContainerT & {
  hasPowerButton?: boolean;
  powerValue?: boolean;
  onPowerChange?: (value: boolean) => null;
};
const DeviceHeader = ({
  name,
  description,
  className,
  hasPowerButton = true,
  powerValue = true,
  onPowerChange = (value) => null,
  ...props
}: PropsT) => {
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
