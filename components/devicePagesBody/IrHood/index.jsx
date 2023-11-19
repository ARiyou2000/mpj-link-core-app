import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Lightbulb, Minus, Plus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Hood } from "@/components/icons/colored";

const musicPlayerInputSourceButtonStyleClassName =
  "flex flex-row flex-nowrap flex-1 whitespace-nowrap items-center justify-center p-3 m-0 border-0.5 rounded-card border-milkwhite";
const musicPlayerVolumeButtonStyleClassName = "p-1.5 rounded-full border-0.5";
const musicPlayerVolumeButtonIconStyleClassName = "h-8 w-8";

const IrHoodDevicePageBody = ({
  handleDeviceUpdate = () => null,
  deviceInstance,
  className,
  ...props
}) => {
  return (
    <>
      <ScrollArea className={className}>
        <div
          className={
            "h-full flex flex-col items-center justify-center gap-24 pb-5"
          }
          {...props}>
          <div>
            <Hood strokeColor={"gradiant"} className={"w-40 h-44"} />
          </div>
          <div className={"w-full flex flex-col gap-4"}>
            <Button
              className={musicPlayerInputSourceButtonStyleClassName}
              onClick={() => {
                handleDeviceUpdate(deviceInstance.changeLight);
              }}>
              <div className={"rounded-full border-1.5 border-milkwhite p-2.5"}>
                <Lightbulb className={"w-8 h-8"} />
              </div>
            </Button>

            <div
              className={cn(
                musicPlayerInputSourceButtonStyleClassName,
                "p-4 justify-evenly",
              )}>
              <Button
                className={musicPlayerVolumeButtonStyleClassName}
                onClick={() => {
                  handleDeviceUpdate(deviceInstance.increaseFanSpeed);
                }}>
                <Plus className={musicPlayerVolumeButtonIconStyleClassName} />
              </Button>
              <h3 className={"text-center"}>سرعت فن</h3>
              <Button
                className={musicPlayerVolumeButtonStyleClassName}
                onClick={() => {
                  handleDeviceUpdate(deviceInstance.decreaseFanSpeed);
                }}>
                <Minus className={musicPlayerVolumeButtonIconStyleClassName} />
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default IrHoodDevicePageBody;
