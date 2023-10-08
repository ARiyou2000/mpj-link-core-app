import Card from "@/components/Card";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ZoneDeviceCard = ({
  name,
  description,
  publicId,
  icon,
  className,
  ...props
}) => {
  const Icon = icon;

  return (
    <>
      <Card.Normal
        className={cn(
          "flex flex-col items-center justify-center gap-6 p-2.5",
          className,
        )}
        {...props}>
        <CardContent
          className={`m-0 p-0 w-1/3 min-w-[4.375rem] min-h-[4.375rem] [&>svg]:w-full [&>svg]:h-full`}>
          <Icon />
        </CardContent>
        <CardHeader
          className={"flex-initial flex flex-col gap-2 text-center p-0 m-0"}>
          <CardTitle className={"font-normal text-sm text-milkwhite"}>
            {name}
          </CardTitle>
          <CardDescription className={"font-normal text-xs text-milkwhite"}>
            {description}
          </CardDescription>
        </CardHeader>
      </Card.Normal>
    </>
  );
};

export default ZoneDeviceCard;
