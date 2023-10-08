import RelayPortOutCard from "../RelayPortOutCard";
import RelayPortInCard from "../RelayPortInCard";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const RelayPortsListComponent = ({
  list = [],
  type = "output",
  className,
  ...props
}) => {
  const PortModel = type === "output" ? RelayPortOutCard : RelayPortInCard;
  return (
    <>
      <ScrollArea className={cn("w-full h-full", className)}>
        <div
          className={
            "h-full flex flex-row flex-wrap items-center justify-center gap-x-[4%] gap-y-7"
          }
          {...props}>
          {list?.length > 0 ? (
            list?.map((relayPortData, index) => {
              return (
                <PortModel
                  key={`relayPort_${type}_${index}_${relayPortData.publicId}`}
                  className={"basis-[48%]"}
                  checked={relayPortData.value === "02"}
                  {...relayPortData}
                />
              );
            })
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </ScrollArea>
    </>
  );
};

export const RelayInputPortsList = ({ ...props }) => (
  <RelayPortsListComponent type={"input"} {...props} />
);

export const RelayOutputPortsList = ({ children, ...props }) => (
  <RelayPortsListComponent type={"output"} {...props} />
);

const RelayPortsList = {
  Input: RelayInputPortsList,
  Output: RelayOutputPortsList,
};

export default RelayPortsList;
