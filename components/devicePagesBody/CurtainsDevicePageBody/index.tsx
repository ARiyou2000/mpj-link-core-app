import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ShadersHalfway,
  ShadersClosed,
  ShadersOpened,
} from "@/components/icons";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { Curtains as CurtainsGradiantDeviceIcon } from "@/components/icons/colored";
import ModbusCurtains from "@/classes/devices/Curtains/curtainsDevice";

const curtainsButtonStyleClassName =
  "flex flex-row flex-nowrap flex-1 whitespace-nowrap items-center justify-evenly p-8 m-0 border-0.5 rounded-card border-milkwhite";
const curtainsButtonIconStyleClassName = "h-8 w-8";

type PropsT = {
  className?: string;
  deviceInstance: ModbusCurtains | null | undefined;
};

const CurtainsDevicePageBody = ({
  deviceInstance,
  className,
  ...props
}: PropsT) => {
  return (
    <>
      <ScrollArea className={className}>
        <div
          className={
            "h-full flex flex-col items-center justify-center gap-24 pb-5"
          }
          {...props}>
          {deviceInstance ? (
            <>
              <div>
                <CurtainsGradiantDeviceIcon
                  strokeColor={"gradiant"}
                  className={"w-60 h-60"}
                />
              </div>
              <div className={"w-full flex flex-col gap-4"}>
                <Button
                  className={curtainsButtonStyleClassName}
                  onClick={deviceInstance?.open}>
                  <ShadersOpened className={curtainsButtonIconStyleClassName} />
                  <h3>
                    {"بازکردن" || deviceInstance?.registers?.openRegister?.name}
                  </h3>
                </Button>
                <Button
                  className={curtainsButtonStyleClassName}
                  onClick={deviceInstance?.pause}>
                  <ShadersHalfway
                    className={curtainsButtonIconStyleClassName}
                  />
                  <h3>توقف</h3>
                </Button>
                <Button
                  className={curtainsButtonStyleClassName}
                  onClick={deviceInstance?.close}>
                  <ShadersClosed className={curtainsButtonIconStyleClassName} />
                  <h3>
                    {"بستن" || deviceInstance?.registers?.closeRegister?.name}
                  </h3>
                </Button>
              </div>
            </>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </ScrollArea>
    </>
  );
};

export default CurtainsDevicePageBody;
