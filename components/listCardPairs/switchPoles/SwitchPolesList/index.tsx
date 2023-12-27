import SwitchCard from "../SwitchPoleCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { SwitchPole } from "@/classes/devices/Switch/switchRegister";

import generalListStatus from "@/components/listCardPairs/generalListStatus";

type PropsT = {
  list: null | SwitchPole[];
  className?: string;
};

const SwitchPolesList = ({ list, className, ...props }: PropsT) => {
  return (
    <>
      <ScrollArea className={cn("w-full h-full", className)}>
        <div
          className={
            "w-full h-full flex flex-col items-center justify-center gap-6 pb-5"
          }
          {...props}>
          {generalListStatus({ list }) ||
            list?.map((switchPoleData) => {
              return (
                <SwitchCard
                  key={`switchPole_${switchPoleData.publicId}`}
                  className={"w-full"}
                  registerInstance={switchPoleData}
                />
              );
            })}
        </div>
      </ScrollArea>
    </>
  );
};

export default SwitchPolesList;
