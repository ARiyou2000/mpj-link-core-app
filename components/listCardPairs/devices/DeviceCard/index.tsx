import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/custom-card";
import { cn } from "@/lib/utils";
import deviceInfo from "@/classes/devices/deviceInfo";

type propsT = {
  deviceInfo: deviceInfo;
  className?: string;
};
const DeviceCard = ({ deviceInfo, className = "", ...props }: propsT) => {
  const Icon = deviceInfo.icon;

  return (
    <>
      <Card
        className={cn(
          "flex flex-row py-4 px-8 items-center justify-between",
          className,
        )}
        {...props}>
        <CardHeader
          className={"basis-2/3 w-2/3 flex-initial flex flex-col gap-2 "}>
          <CardTitle className={"font-normal text-sm text-milkwhite"}>
            {deviceInfo.name}
          </CardTitle>
          <CardDescription className={"font-normal text-xs text-milkwhite"}>
            {deviceInfo.description}
          </CardDescription>
        </CardHeader>
        <CardContent
          className={`basis-1/3 w-1/3 p-2.5 m-0 [&>svg]:w-full [&>svg]:h-full`}>
          <Icon strokeColor={"gradiant"} />
        </CardContent>
      </Card>
    </>
  );
};

export default DeviceCard;
