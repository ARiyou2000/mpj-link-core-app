import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/custom-card";

import { cn } from "@/lib/utils";

const RelayPortCard = ({ registerInstance, children, className, ...props }) => {
  return (
    <>
      <Card
        borderVariant={"gradiant"}
        className={cn(
          "flex flex-col items-center justify-between gap-2.5 pt-6 px-5 pb-11 min-h-[206px]",
          className,
        )}
        {...props}>
        <CardHeader
          className={
            "flex flex-col gap-1 justify-start items-center p-1 text-milkwhite"
          }>
          <CardTitle className={"font-normal text-sm text-center"}>
            {registerInstance.name}
          </CardTitle>
          <CardDescription
            className={
              "font-normal text-[0.625rem] leading-4 text-milkwhite text-right"
            }>
            {registerInstance.description}
          </CardDescription>
        </CardHeader>
        <CardContent className={"p-0 m-0 flex items-center justify-center"}>
          {children}
        </CardContent>
      </Card>
    </>
  );
};

export default RelayPortCard;
