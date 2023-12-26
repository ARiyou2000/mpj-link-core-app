import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/relay-tabs";
import {
  RelayInputPortsList,
  RelayOutputPortsList,
} from "@/components/listCardPairs/relayPorts/RelayPortsList";
import { ScrollArea } from "@/components/ui/scroll-area";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { RelayPortType } from "@/classes/registers/relayRegisters";

const tabContentStyleClassName = "h-full pt-6 pb-5";
const relayPortStyleClassName = "h-full";

const RelayDevicePageBody = ({ registersList = [], className, ...props }) => {
  // const inputs = registersList.filter((register) => register.number < 8);

  const inputs = [];
  const outputs = [];

  registersList?.forEach((register) => {
    if (register.portType === RelayPortType.output) {
      outputs.push(register);
    } else if (register.portType === RelayPortType.input) {
      inputs.push(register);
    } else {
    }
  });

  return (
    <>
      {registersList?.length > 0 ? (
        <Tabs
          defaultValue={
            registersList?.length
              ? outputs.length > 0
                ? RelayPortType.output
                : RelayPortType.input
              : RelayPortType.output
          }
          className={cn("w-full flex flex-col gap-2", className)}
          {...props}>
          <TabsList>
            {outputs?.length > 0 && (
              <TabsTrigger value={RelayPortType.output}>خروجی</TabsTrigger>
            )}
            {inputs?.length > 0 && (
              <TabsTrigger value={RelayPortType.input}>ورودی</TabsTrigger>
            )}
          </TabsList>

          <ScrollArea className={"flex-1 w-full"}>
            {outputs?.length > 0 && (
              <TabsContent
                value={RelayPortType.output}
                className={tabContentStyleClassName}>
                <RelayOutputPortsList
                  list={outputs}
                  className={relayPortStyleClassName}
                />
              </TabsContent>
            )}

            {inputs?.length > 0 && (
              <TabsContent
                value={RelayPortType.input}
                className={tabContentStyleClassName}>
                <RelayInputPortsList
                  list={inputs}
                  className={relayPortStyleClassName}
                />
              </TabsContent>
            )}
          </ScrollArea>
        </Tabs>
      ) : (
        <div className={"w-full h-full flex items-center justify-center"}>
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default RelayDevicePageBody;
