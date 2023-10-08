import { cn } from "@/lib/utils";
import MainLayoutTabNavigation from "@/components/MainLayoutTabNavigation";

const SystemSettingLandingLayout = ({ children, className, ...props }) => {
  return (
    <>
      <div
        className={cn("h-full flex flex-col justify-between", className)}
        {...props}>
        <div className={"flex-1 h-0"}>{children}</div>
        <MainLayoutTabNavigation />
      </div>
    </>
  );
};

export default SystemSettingLandingLayout;
