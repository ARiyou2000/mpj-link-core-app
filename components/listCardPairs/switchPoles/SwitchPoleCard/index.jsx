"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/custom-card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import useRegisterUpdateToast from "@/hooks/useRegisterUpdateToast";

const SwitchCard = ({ registerInstance, className, ...props }) => {
  const [updateHandler] = useRegisterUpdateToast();
  return (
    <>
      <Card
        className={cn(
          "flex flex-row px-4 py-6 items-center justify-between",
          className,
        )}
        borderVariant={"gradiant"}
        {...props}>
        <CardHeader
          className={
            "basis-2/3 text-right flex flex-col gap-2.5 justify-center p-2.5 text-milkwhite"
          }>
          <CardTitle className={"font-normal text-base"}>
            {registerInstance.name}
          </CardTitle>
          <CardDescription className={"font-normal text-xs text-milkwhite"}>
            {registerInstance.description}
          </CardDescription>
        </CardHeader>
        <CardContent
          className={`flex items-center justify-center h-full p-0 m-0`}>
          <Switch
            checked={registerInstance.value}
            onCheckedChange={(value) =>
              updateHandler(() => registerInstance.updateValue(value))
            }
            // disabled={loading}
            // loading={loading}
          />
        </CardContent>
        {/*<CardFooter></CardFooter>*/}
      </Card>
    </>
  );
};

export default SwitchCard;
