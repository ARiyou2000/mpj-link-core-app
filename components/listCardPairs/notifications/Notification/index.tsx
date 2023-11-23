import { Alert, AlertTitle } from "@/components/ui/alert";
import NotificationClass from "@/classes/Notification";
import { cn } from "@/lib/utils";

type PropsT = {
  data: NotificationClass;
  className?: string;
};
const Notification = ({ data, className, ...props }: PropsT) => {
  const Icon = data.image;
  return (
    <>
      <Alert
        className={cn(
          "w-full bg-transparent text-white p-4 text-sm rounded-3xl border border-milkwhite/50",
          className,
        )}
        {...props}>
        <div className={"flex flex-row items-center gap-2"}>
          <span>
            <Icon className={"w-4 h-4"} />
          </span>
          <AlertTitle className={"m-0 p-0"}>{data?.name}</AlertTitle>
        </div>
        {/*<AlertDescription>{children}</AlertDescription>*/}
      </Alert>
    </>
  );
};

export default Notification;
