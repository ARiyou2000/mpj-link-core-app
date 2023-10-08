import Card from "@/components/Card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <Card.Gradiant
        className={cn(
          "flex flex-col gap-6 px-4 py-11 items-center justify-between flex-1",
          className,
        )}
        {...props}>
        <CardHeader
          className={
            "text-center fl flex flex-col gap-6 items-center justify-center p-0 text-milkwhite"
          }>
          <CardTitle className={"font-normal text-base "}>{title}</CardTitle>
        </CardHeader>
        <CardContent className={`p-0 m-0 w-full`}>{children}</CardContent>
        {/*<CardFooter></CardFooter>*/}
      </Card.Gradiant>
    </>
  );
};

const primaryControlIconStyleClassName = "h-[4.25rem] w-[4.25rem]";
const secondaryControlIconStyleClassName = "h-12 w-12";
const controlButtonStyleClassName =
  "p-0 m-0 bg-transparent rounded-full h-full";
const SplitIR = ({
  className,
  handleDeviceUpdate = (value) => null,
  ...props
}) => {
  return (
    <>
      <ScrollArea className={className}>
        <div className={"h-full pb-5"} {...props}>
          <div
            className={
              "px-7 py-[4.5rem] flex flex-row items-center justify-between"
            }>
            <Button className={controlButtonStyleClassName}>
              <Plus className={primaryControlIconStyleClassName} />
            </Button>
            <div
              className={"flex flex-col justify-between items-center gap-12"}>
              <Button className={controlButtonStyleClassName}>
                <Up className={primaryControlIconStyleClassName} />
              </Button>

              <Button className={controlButtonStyleClassName}>
                <Down className={primaryControlIconStyleClassName} />
              </Button>
            </div>
            <Button className={controlButtonStyleClassName}>
              <Minus className={primaryControlIconStyleClassName} />
            </Button>
          </div>

          <div className={"flex flex-row gap-6"}>
            <SplitIRControlCard title={"تغییر حرکت پره ها"}>
              <div className={"flex flex-row justify-between items-center"}>
                <Button className={controlButtonStyleClassName}>
                  <LeftRight className={secondaryControlIconStyleClassName} />
                </Button>
                <Button className={controlButtonStyleClassName}>
                  <UpDown className={secondaryControlIconStyleClassName} />
                </Button>
              </div>
            </SplitIRControlCard>

            <SplitIRControlCard title={"تغییر حالت"}>
              <Button className={controlButtonStyleClassName}>
                <Breeze className={secondaryControlIconStyleClassName} />
              </Button>
            </SplitIRControlCard>
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default SplitIR;