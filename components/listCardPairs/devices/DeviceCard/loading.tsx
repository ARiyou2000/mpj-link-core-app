import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/custom-card";
import { cn } from "@/lib/utils";
import LoadingTitle from "@/components/loading/LoadingTitle";
import LoadingDescription from "@/components/loading/LoadingDescription";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

const DeviceCardLoading = ({ className = "", ...props }) => {
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
            <LoadingTitle />
          </CardTitle>
          <CardDescription className={"font-normal text-xs text-milkwhite"}>
            <LoadingDescription />
          </CardDescription>
        </CardHeader>
        <CardContent
          className={`basis-1/3 w-1/3 p-2.5 m-0 [&>svg]:w-full [&>svg]:h-full`}>
          <LoadingSpinner />
        </CardContent>
      </Card>
    </>
  );
};

export default DeviceCardLoading;
