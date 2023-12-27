import RelayPortOutCard from "../RelayPortOutCard";
import RelayPortInCard from "../RelayPortInCard";
import { cn } from "@/lib/utils";
import { RelayPortType } from "@/classes/devices/Relay/relayRegisters";
import { RelayPort } from "@/classes/devices/Relay/relayRegisters";
import generalListStatus from "@/components/listCardPairs/generalListStatus";

type PropsT = {
  list: null | RelayPort[];
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
        {generalListStatus({ list }) ||
          list?.map((relayPortData) => {
            const key = `relayPort_${relayPortData.portType}_${relayPortData.publicId}`,
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
          })}
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
