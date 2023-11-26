import LoadingSpinner from "@/components/loading/LoadingSpinner";
import SwitchCard from "../SwitchPoleCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { SwitchPole as ModbusSwitchPole } from "@/classes/registers/modbus/switchRegister";
import { SwitchPole as ZigbeeSwitchPole } from "@/classes/registers/zigbee/switchRegister";

type PropsT = {
  list: null | ModbusSwitchPole[] | ZigbeeSwitchPole[];
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
          {list ? (
            list?.length > 0 ? (
              list?.map((switchPoleData, index) => {
                return (
                  <SwitchCard
                    key={`switchPole_${index}_${switchPoleData.publicId}`}
                    className={"w-full"}
                    registerInstance={switchPoleData}
                  />
                );
              })
            ) : (
              "Empty List"
            )
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </ScrollArea>
    </>
  );
};

export default SwitchPolesList;