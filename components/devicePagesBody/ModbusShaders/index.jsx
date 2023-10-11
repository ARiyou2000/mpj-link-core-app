import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Lightbulb, Minus, Pause, Plus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Shaders, ShadersClosed, ShadersOpened } from "../../icons";
import { useToast } from "../../ui/use-toast";
import { setRegisterData } from "../../../utils/queueHelper";

const musicPlayerInputSourceButtonStyleClassName =
  "flex flex-row flex-nowrap flex-1 whitespace-nowrap items-center justify-evenly p-8 m-0 border-0.5 rounded-card border-milkwhite";
const musicPlayerVolumeButtonIconStyleClassName = "h-8 w-8";

const ModbusShadersPageBody = ({ registersList = [], className, ...props }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const handleUpdate = async (updateMethod) => {
    setLoading(true);
    const options = { hasFeedback: false };
    try {
      // The order mather
      if (updateMethod === "open") {
        const resultX = await setRegisterData(
          registersList[0]?.publicId,
          "01",
          options,
        );
        const resultY = await setRegisterData(
          registersList[1]?.publicId,
          "02",
          options,
        );
      } else if (updateMethod === "close") {
        const resultY = await setRegisterData(
          registersList[1]?.publicId,
          "01",
          options,
        );
        const resultX = await setRegisterData(
          registersList[0]?.publicId,
          "02",
          options,
        );
      } else {
        const resultX = setRegisterData(
          registersList[0]?.publicId,
          "01",
          options,
        );
        const resultY = setRegisterData(
          registersList[1]?.publicId,
          "01",
          options,
        );
      }
    } catch (e) {
      toast({
        variant: "destructive",
        title: "شما دسترسی تغییر این گزینه را ندارید",
      });
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <>
      <ScrollArea className={className}>
        <div
          className={
            "h-full flex flex-col items-center justify-center gap-24 pb-5"
          }
          {...props}>
          <div>
            <Shaders className={"w-60 h-60"} />
          </div>
          <div className={"w-full flex flex-col gap-4"}>
            <Button
              className={musicPlayerInputSourceButtonStyleClassName}
              onClick={() => {
                handleUpdate("open");
              }}>
              <ShadersOpened
                className={musicPlayerVolumeButtonIconStyleClassName}
              />
              <h3>بازکردن</h3>
            </Button>
            <Button
              className={musicPlayerInputSourceButtonStyleClassName}
              onClick={() => {
                handleUpdate("pause");
              }}>
              <Shaders className={musicPlayerVolumeButtonIconStyleClassName} />
              <h3>توقف</h3>
            </Button>
            <Button
              className={musicPlayerInputSourceButtonStyleClassName}
              onClick={() => {
                handleUpdate("close");
              }}>
              <ShadersClosed
                className={musicPlayerVolumeButtonIconStyleClassName}
              />
              <h3>بستن</h3>
            </Button>
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default ModbusShadersPageBody;
