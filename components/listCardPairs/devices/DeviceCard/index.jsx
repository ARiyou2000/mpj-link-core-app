import Card from "@/components/Card";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const DeviceCard = ({
  name,
  description,
  type,
  publicId,
  className,
  icon,
  ...props
}) => {
  const Icon = icon;

  return (
    <>
      <Card.Normal
        className={cn(
          "flex flex-row py-4 px-8 items-center justify-between",
          className,
        )}
        {...props}>
        <CardHeader
          className={"basis-2/3 w-2/3 flex-initial flex flex-col gap-2 "}>
          <CardTitle className={"font-normal text-sm text-milkwhite"}>
            {name}
          </CardTitle>
          <CardDescription className={"font-normal text-xs text-milkwhite"}>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent
          className={`basis-1/3 w-1/3 p-2.5 m-0 [&>svg]:w-full [&>svg]:h-full`}>
          <Icon />
        </CardContent>
      </Card.Normal>
    </>
  );
};

export default DeviceCard;
