import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  AUX,
  NextTrack,
  PlayPause,
  PreviousTrack,
  SDCard,
} from "@/components/icons";
import { Bluetooth, Mute } from "@/components/icons/dashed";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const musicPlayerInputSourceButtonStyleClassName =
  "flex flex-row flex-nowrap flex-1 whitespace-nowrap items-center px-1.5 py-6 m-0 border rounded-card";
const musicPlayerInputSourceButtonIconStyleClassName = "h-6 w-6";
const musicPlayerVolumeButtonStyleClassName =
  "mx-3 p-1.5 rounded-full border-1.5";
const musicPlayerVolumeButtonIconStyleClassName = "h-4 w-4";

const MusicPlayer = ({
  handleDeviceUpdate = (value) => null,
  className,
  ...props
}) => {
  const [lastHertakiActionType, setLastHertakiActionType] = useState(false);

  return (
    <>
      <ScrollArea className={className}>
        <div
          className={"h-full flex flex-col justify-center gap-6 pb-5"}
          {...props}>
          <div className={"p-5"}>
            <AspectRatio ratio={2} className={""}>
              <Image
                src="/images/musicPlayerBackground.webp"
                alt="Images"
                // width={200}
                // height={100}
                fill
                objectFit={"cover"}
                className="rounded-card object-cover mx-auto saturate-150 contrast-75 brightness-75"
              />
            </AspectRatio>
          </div>

          <div
            className={"flex flex-row justify-between items-center px-16 py-4"}>
            <Button
              className={"p-0 m-0"}
              onClick={() => {
                handleDeviceUpdate("32");
              }}>
              <NextTrack className={"w-8 h-8"} />
            </Button>
            <Button
              className={"p-0 m-0 rounded-full"}
              onClick={() => {
                // setLastHertakiActionType((prevState) => !prevState);
                handleDeviceUpdate(lastHertakiActionType ? "37" : "38");
              }}>
              <PlayPause className={"w-14 h-14"} />
            </Button>
            <Button
              className={"p-0 m-0"}
              onClick={() => {
                handleDeviceUpdate("31");
              }}>
              <PreviousTrack className={"w-8 h-8"} />
            </Button>
          </div>

          <div className={"p-5 pt-7 flex flex-col gap-6"}>
            <div
              className={
                "flex flex-row flex-nowrap items-center justify-between gap-2.5"
              }>
              <Button
                className={musicPlayerInputSourceButtonStyleClassName}
                onClick={() => {
                  handleDeviceUpdate("77");
                }}>
                <span>AUX</span>
                <AUX
                  className={musicPlayerInputSourceButtonIconStyleClassName}
                />
              </Button>
              <Button
                className={musicPlayerInputSourceButtonStyleClassName}
                onClick={() => {
                  handleDeviceUpdate("78");
                }}>
                <span>Bluetooth</span>
                <Bluetooth
                  className={musicPlayerInputSourceButtonIconStyleClassName}
                />
              </Button>
              <Button
                className={musicPlayerInputSourceButtonStyleClassName}
                onClick={() => {
                  handleDeviceUpdate("70");
                }}>
                <span>SD Card</span>
                <SDCard
                  className={musicPlayerInputSourceButtonIconStyleClassName}
                />
              </Button>
            </div>
            <div
              className={
                "flex flex-row flex-nowrap items-center justify-between gap-2.5"
              }>
              <Button
                className={musicPlayerVolumeButtonStyleClassName}
                onClick={() => {
                  handleDeviceUpdate("41");
                }}>
                <Plus className={musicPlayerVolumeButtonIconStyleClassName} />
              </Button>
              <Button
                className={cn(
                  musicPlayerVolumeButtonStyleClassName,
                  "p-2 border-none",
                )}
                onClick={() => {
                  handleDeviceUpdate("43");
                }}>
                <Mute className={"w-8 h-8"} />
              </Button>
              <Button
                className={musicPlayerVolumeButtonStyleClassName}
                onClick={() => {
                  handleDeviceUpdate("42");
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

export default MusicPlayer;
