import { Alert, AlertTitle } from "@/components/ui/alert";
import { Warning } from "@/components/icons/dashed";

const Notification = ({ icon = Warning, title, children, ...props }) => {
  const Icon = icon;
  return (
    <>
      <Alert
        className={
          "w-full bg-transparent text-white p-4 text-sm rounded-3xl border border-milkwhite/50"
        }
        {...props}>
        <div className={"flex flex-row items-center gap-2"}>
          <span>
            <Icon className={"w-4 h-4"} />
          </span>
          <AlertTitle className={"m-0 p-0"}>{title}</AlertTitle>
        </div>
        {/*<AlertDescription>{children}</AlertDescription>*/}
      </Alert>
    </>
  );
};

export default Notification;
