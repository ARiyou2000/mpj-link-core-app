"use client";

import CurvedProgressCounter from "@/components/CurvedProgressCounter";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/thermostat-radio-group";
import { Snow, Steams } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import Carousel from "@/components/Carousel";
import LoadingText from "@/components/loading/LoadingText";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

const fanSpeedsDataTable = [
  { value: "00", name: <LoadingText /> },
  { value: "slow", name: <h4>کم</h4> },
  { value: "medium", name: <h4>متوسط</h4> },
  { value: "fast", name: <h4>زیاد</h4> },
  { value: "auto", name: <h4>خودکار</h4> },
];
// const OPTIONS = { dragFree: true, loop: true };

const ThermostatDevicePageBody = ({
  className,
  deviceInstance,
  registerUpdateHandler = async (callbackFn) => null,
  ...props
}) => {
  if (
    !deviceInstance?.registers ||
    !(Object.values(deviceInstance?.registers).length > 0)
  ) {
    return (
      <>
        <div className={"w-full h-full flex items-center justify-center"}>
          <LoadingSpinner />
        </div>
      </>
    );
  }

  const {
    power,
    seasonMode,
    fanSpeed,
    targetPointTemperature,
    currentTemperature,
  } = deviceInstance?.registers;
  const powerValue = power?.value;
  return (
    <>
      <ScrollArea className={className}>
        <div
          className={"h-full flex flex-col justify-center gap-11 pb-5"}
          {...props}>
          <CurvedProgressCounter
            currentTemperature={Number(currentTemperature?.value)}
            targetTemperature={Number(targetPointTemperature?.value)}
            onTargetTemperatureChange={async (value) => {
              await registerUpdateHandler(() => {
                const stringVal = String(value).padStart(2, "0");
                // await registerUpdateHandler(()=>targetPointTemperature?.updateValue(stringVal));
                deviceInstance.setTargetTemp(stringVal);
              });
            }}
            power={powerValue}
          />

          <div className={"p-6 flex flex-col gap-2.5"}>
            <RadioGroup
              value={powerValue && seasonMode?.value}
              onValueChange={async (value) => {
                // await registerUpdateHandler(()=>seasonMode.updateValue(value));
                if (value === "cold") {
                  await registerUpdateHandler(deviceInstance.coolingMode);
                } else if (value === "hot") {
                  await registerUpdateHandler(deviceInstance.heatingMode);
                }
              }}
              className={"flex flex-row items-center gap-2.5"}
              disabled={!powerValue}>
              <RadioGroupItem value="cold" id="cold" seasonType={"cold"}>
                <h3>سرمایش</h3>
                <Snow className={"h-6 w-6"} />
              </RadioGroupItem>

              <RadioGroupItem value="hot" id="hot" seasonType={"hot"}>
                <h3>گرمایش</h3>
                <Steams className={"h-6 w-6"} />
              </RadioGroupItem>
            </RadioGroup>

            <Carousel
              slides={fanSpeedsDataTable?.map((fanSpeed) => fanSpeed.name)}
              disabled={!powerValue}
              valueIndex={
                !!fanSpeed?.value
                  ? fanSpeedsDataTable.findIndex(({ value }) => {
                      return fanSpeed?.value === value;
                    })
                  : 0
              }
              onChange={async (index) => {
                const value = fanSpeedsDataTable[index].value;
                // await registerUpdateHandler(()=>fanSpeed.updateValue(value));
                switch (value) {
                  case "slow":
                    await registerUpdateHandler(deviceInstance.slowFanSpeed);
                    break;
                  case "medium":
                    await registerUpdateHandler(deviceInstance.mediumFanSpeed);
                    break;
                  case "fast":
                    await registerUpdateHandler(deviceInstance.fastFanSpeed);
                    break;
                  case "auto":
                    await registerUpdateHandler(deviceInstance.autoFanSpeed);
                    break;
                  default:
                    console.error("wrong thermostat fan speed value!");
                }
              }}
              className={"border-1.5"}
            />
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default ThermostatDevicePageBody;
