import Card from "@/components/Card";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { ZigbeeSwitchUpdateContext } from "@/contexts/updateProviders";

const SwitchCard = ({
  name,
  description,
  publicId,
  number,
  checked = false,
  className,
  ...props
}) => {
  // const { onSwitchChange, loading } = useSwitchUpdate(publicId);
  const onSwitchChange = useContext(ZigbeeSwitchUpdateContext);

  const loading = false;

  return (
    <>
      <Card.Gradiant
        className={cn(
          "flex flex-row px-4 py-6 items-center justify-between",
          className,
        )}
        {...props}>
        <CardHeader
          className={
            "basis-2/3 text-right flex flex-col gap-2.5 justify-center p-2.5 text-milkwhite"
          }>
          <CardTitle className={"font-normal text-base"}>{name}</CardTitle>
          <CardDescription className={"font-normal text-xs text-milkwhite"}>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent
          className={`flex items-center justify-center h-full p-0 m-0`}>
          <Switch
            checked={checked}
            onCheckedChange={(checked) => {
              onSwitchChange(number, checked);
            }}
            disabled={loading}
            loading={loading}
          />
        </CardContent>
        {/*<CardFooter></CardFooter>*/}
      </Card.Gradiant>
    </>
  );
};

export default SwitchCard;
