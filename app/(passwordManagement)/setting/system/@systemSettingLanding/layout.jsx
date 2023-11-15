import { cn } from "@/lib/utils";
import MainLayoutTabNavigation from "@/components/MainLayoutTabNavigation";

const SystemSettingLandingLayout = ({ children, className, ...props }) => {
  return (
    <>
      <div
        className={cn(
          "h-full landscape:w-full flex flex-col landscape:flex-row justify-between",
          className,
        )}
        {...props}>
        <div className={"flex-1"}>{children}</div>
        <MainLayoutTabNavigation />
      </div>
    </>
  );
};

export default SystemSettingLandingLayout;
