import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/custom-card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Breeze,
  Down,
  LeftRight,
  Minus,
  Plus,
  Up,
  UpDown,
} from "@/components/icons/dashed";
import { ScrollArea } from "@/components/ui/scroll-area";

const SplitIRControlCard = ({ title, children, className, ...props }) => {
  return (
    <>
      <Card
        className={cn(
          "flex flex-col gap-6 px-4 py-11 items-center justify-center flex-1",
          className,
        )}
        borderVariant={"gradiant"}
        {...props}>
        <CardHeader
          className={
            "text-center fl flex flex-col gap-6 items-center justify-center p-0 text-milkwhite"
          }>
          <CardTitle className={"font-normal text-base "}>{title}</CardTitle>
        </CardHeader>
        <CardContent className={`p-0 m-0 w-full`}>{children}</CardContent>
        {/*<CardFooter></CardFooter>*/}
      </Card>
    </>
  );
};

const primaryControlIconStyleClassNameGroup = "h-[5.1rem] w-[5.1rem]";
const secondaryControlIconStyleClassName = "h-12 w-12";
const controlButtonStyleClassName =
  "p-0 m-0 bg-transparent rounded-full h-full";
const primaryControlButtonWrapperStyleClassName =
  "p-2.5 flex content-center bg-[#090A0A]";

const SplitIR = ({
  className,
  updateHandler = async (callbackFn) => null,
  deviceInstance,
  ...props
}) => {
  return (
    <>
      <ScrollArea className={className}>
        <div className={"h-full pb-5 flex flex-col justify-center"} {...props}>
          <div
            className={
              "py-[4.5rem] flex flex-row items-center justify-center drop-shadow-[0.5rem_0.375rem_0.875rem_#000]"
            }>
            <div
              className={cn(
                primaryControlButtonWrapperStyleClassName,
                "rounded-r-full pl-0",
              )}>
              <Button
                className={controlButtonStyleClassName}
                onClick={() =>
                  updateHandler(deviceInstance?.increaseTemperature)
                }>
                <Plus className={primaryControlIconStyleClassNameGroup} />
              </Button>
            </div>
            <div
              className={cn(
                primaryControlButtonWrapperStyleClassName,
                "flex flex-col justify-between items-center gap-[5.1rem]",
                "rounded-full",
              )}>
              <Button
                className={cn(controlButtonStyleClassName, "")}
                onClick={() => updateHandler(deviceInstance?.increaseFanSpeed)}>
                <Up className={primaryControlIconStyleClassNameGroup} />
              </Button>

              <Button
                className={cn(controlButtonStyleClassName, "")}
                onClick={() => updateHandler(deviceInstance?.decreaseFanSpeed)}>
                <Down className={primaryControlIconStyleClassNameGroup} />
              </Button>
            </div>
            <div
              className={cn(
                primaryControlButtonWrapperStyleClassName,
                "rounded-l-full pr-0",
              )}>
              <Button
                className={controlButtonStyleClassName}
                onClick={() =>
                  updateHandler(deviceInstance?.decreaseTemperature)
                }>
                <Minus className={primaryControlIconStyleClassNameGroup} />
              </Button>
            </div>
          </div>

          <div className={"flex flex-row gap-6"}>
            <SplitIRControlCard title={"تغییر حرکت پره ها"}>
              <div className={"flex flex-row justify-between items-center"}>
                <Button
                  className={controlButtonStyleClassName}
                  onClick={() =>
                    updateHandler(deviceInstance?.changeMovementDirection)
                  }>
                  <LeftRight className={secondaryControlIconStyleClassName} />
                </Button>
                <Button
                  className={controlButtonStyleClassName}
                  onClick={() =>
                    updateHandler(deviceInstance?.changeMovementDirection)
                  }>
                  <UpDown className={secondaryControlIconStyleClassName} />
                </Button>
              </div>
            </SplitIRControlCard>

            <SplitIRControlCard title={"تغییر حالت"}>
              <div className={"flex items-center justify-center"}>
                <Button
                  className={controlButtonStyleClassName}
                  onClick={() => updateHandler(deviceInstance?.changeMode)}>
                  <Breeze className={secondaryControlIconStyleClassName} />
                </Button>
              </div>
            </SplitIRControlCard>
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default SplitIR;
