import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shaders, ShadersClosed, ShadersOpened } from "@/components/icons";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

const musicPlayerInputSourceButtonStyleClassName =
  "flex flex-row flex-nowrap flex-1 whitespace-nowrap items-center justify-evenly p-8 m-0 border-0.5 rounded-card border-milkwhite";
const musicPlayerVolumeButtonIconStyleClassName = "h-8 w-8";

const Curtains = ({ deviceInstance, className, ...props }) => {
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
                <Shaders className={"w-60 h-60"} />
              </div>
              <div className={"w-full flex flex-col gap-4"}>
                <Button
                  className={musicPlayerInputSourceButtonStyleClassName}
                  onClick={deviceInstance.open}>
                  <ShadersOpened
                    className={musicPlayerVolumeButtonIconStyleClassName}
                  />
                  <h3>بازکردن</h3>
                </Button>
                <Button
                  className={musicPlayerInputSourceButtonStyleClassName}
                  onClick={deviceInstance.pause}>
                  <Shaders
                    className={musicPlayerVolumeButtonIconStyleClassName}
                  />
                  <h3>توقف</h3>
                </Button>
                <Button
                  className={musicPlayerInputSourceButtonStyleClassName}
                  onClick={deviceInstance.close}>
                  <ShadersClosed
                    className={musicPlayerVolumeButtonIconStyleClassName}
                  />
                  <h3>بستن</h3>
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

export default Curtains;
