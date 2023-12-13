"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/custom-card";

const ConnectionCheckContainer = ({
  icon,
  title,
  buttonText,
  buttonColor,
  onButtonClicked = () => null,
  className,
  ...props
}) => {
  return (
    <>
      <Card
        className={cn(
          "flex flex-col items-center justify-center px-14 py-4",
          className,
        )}
        {...props}>
        <div className={"flex flex-col items-center justify-center gap-5 py-6"}>
          <div className={"[&>svg]:w-[6.25rem] [&>svg]:h-[6.25rem] p-2"}>
            {icon}
          </div>
          <CardTitle className={"text-milkwhite text-base text-center"}>
            {title}
          </CardTitle>
        </div>
        {buttonText && (
          <Button
            className={"p-2.5 text-white text-base w-full rounded-3xl"}
            style={{ backgroundColor: buttonColor }}
            onClick={onButtonClicked}>
            {buttonText}
          </Button>
        )}
      </Card>
    </>
  );
};
export default ConnectionCheckContainer;
