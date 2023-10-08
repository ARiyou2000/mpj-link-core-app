import { cn } from "@/lib/utils";
import MainLayoutHeader from "@/components/MainLayoutHeader";

const SystemSettingLayout = ({ children, className, ...props }) => {
  return (
    <>
      <div
        className={cn("h-full w-full flex flex-col justify-between", className)}
        {...props}>
        <MainLayoutHeader />
        <div className={"flex-1 h-0 pt-3"}>{children}</div>
      </div>
    </>
  );
};

export default SystemSettingLayout;
