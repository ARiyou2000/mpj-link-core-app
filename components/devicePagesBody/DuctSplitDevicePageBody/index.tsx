import DuctSplit from "@/classes/devices/DuctSplit/ductSplitDevice";
import { ScrollArea } from "@/components/ui/scroll-area";
import CurvedProgressCounter from "@/components/CurvedProgressCounter";
import Carousel from "@/components/Carousel";
import LoadingText from "@/components/loading/LoadingText";

type PropsT = {
  deviceInstance?: DuctSplit;
  className?: string;
  registerUpdateHandler: (callbackFn: () => void) => Promise<null>;
};

const fanSpeedsDataTable = [
  { value: "00", name: <LoadingText /> },
  { value: "slow", name: <h4>کم</h4> },
  { value: "medium", name: <h4>متوسط</h4> },
  { value: "fast", name: <h4>زیاد</h4> },
  { value: "auto", name: <h4>خودکار</h4> },
];

const modeDataTable = [
  { value: "00", name: <LoadingText /> },
  { value: "plasma", name: <h4>پلاسما</h4> },
  { value: "cold", name: <h4>سرمایش</h4> },
  { value: "hot", name: <h4>گرمایش</h4> },
  { value: "auto", name: <h4>خودکار</h4> },
];

const DuctSplitDevicePageBody = ({
  deviceInstance,
  className = "",
  registerUpdateHandler = async (callbackFn) => null,
  ...props
}: PropsT) => {
  const { power, mode, fanSpeed, targetPointTemperature, currentTemperature } =
    deviceInstance?.registers;
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

            <Carousel
              slides={modeDataTable?.map((mode) => mode.name)}
              disabled={!powerValue}
              valueIndex={
                !!mode?.value
                  ? modeDataTable.findIndex(({ value }) => {
                      return mode?.value === value;
                    })
                  : 0
              }
              onChange={async (index) => {
                const value = fanSpeedsDataTable[index].value;
                // await registerUpdateHandler(()=>mode.updateValue(value));
                switch (value) {
                  case "plasma":
                    await registerUpdateHandler(deviceInstance.plasmaMode);
                    break;
                  case "cold":
                    await registerUpdateHandler(deviceInstance.coolingMode);
                    break;
                  case "hot":
                    await registerUpdateHandler(deviceInstance.heatingMode);
                    break;
                  case "auto":
                    await registerUpdateHandler(deviceInstance.autoMode);
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

export default DuctSplitDevicePageBody;
