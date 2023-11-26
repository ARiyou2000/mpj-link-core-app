import RelayPortOutCard from "../RelayPortOutCard";
import RelayPortInCard from "../RelayPortInCard";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { RelayPortType } from "@/classes/registers/zigbee/relayRegisters";
import { RelayPort as ModbusRelayPort } from "@/classes/registers/modbus/relayRegisters";
import { RelayPort as ZigbeeRelayPort } from "@/classes/registers/zigbee/relayRegisters";

type PropsT = {
  list: null | ModbusRelayPort[] | ZigbeeRelayPort[];
  className?: string;
};

const RelayPortsListComponent = ({ list, className, ...props }: PropsT) => {
  return (
    <>
      {/*<ScrollArea className={cn("w-full h-full", className)}>*/}
      <div
        className={cn(
          "h-full flex flex-row flex-wrap items-center justify-center gap-x-[4%] gap-y-7",
          className,
        )}
        {...props}>
        {list ? (
          list?.length > 0 ? (
            list?.map((relayPortData, index) => {
              const key = `relayPort_${relayPortData.portType}_${index}_${relayPortData.publicId}`,
                props = {
                  className: "basis-[48%]",
                  registerInstance: relayPortData,
                };

              if (relayPortData.portType === RelayPortType.output) {
                return <RelayPortOutCard key={key} {...props} />;
              } else if (relayPortData.portType === RelayPortType.input) {
                return <RelayPortInCard key={key} {...props} />;
              } else {
              }
            })
          ) : (
            "Empty List"
          )
        ) : (
          <LoadingSpinner />
        )}
      </div>
      {/*</ScrollArea>*/}
    </>
  );
};

export const RelayInputPortsList = ({ ...props }) => (
  <RelayPortsListComponent {...props} />
);

export const RelayOutputPortsList = ({ children, ...props }) => (
  <RelayPortsListComponent {...props} />
);

const RelayPortsList = {
  Input: RelayInputPortsList,
  Output: RelayOutputPortsList,
};

export default RelayPortsList;