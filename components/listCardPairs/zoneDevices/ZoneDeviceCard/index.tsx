import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/custom-card";

import { cn } from "@/lib/utils";

type propsT = {
  deviceInfo: deviceInfo;
  className?: string;
};
const ZoneDeviceCard = ({ deviceInfo, className = "", ...props }: propsT) => {
  const Icon = deviceInfo.icon;

  return (
    <>
      <Card
        className={cn(
          "flex flex-col items-center justify-center gap-6 p-2.5",
          className,
        )}
        {...props}>
        <CardContent
          className={`m-0 p-0 w-1/3 min-w-[4.375rem] min-h-[4.375rem] [&>svg]:w-full [&>svg]:h-full`}>
          <Icon strokeColor={"gradiant"} />
        </CardContent>
        <CardHeader
          className={"flex-initial flex flex-col gap-2 text-center p-0 m-0"}>
          <CardTitle className={"font-normal text-sm text-milkwhite"}>
            {deviceInfo.name}
          </CardTitle>
          <CardDescription className={"font-normal text-xs text-milkwhite"}>
            {deviceInfo.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
};

export default ZoneDeviceCard;
