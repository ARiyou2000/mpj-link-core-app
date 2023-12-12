import { cn } from "@/lib/utils";
import MainLayoutTabNavigation from "@/components/MainLayoutTabNavigation";
import MainLayoutHeader from "@/components/MainLayoutHeader";

const SystemSettingLandingLayout = ({ children, className, ...props }) => {
  return (
    <>
      <div
        className={cn(
          "h-full landscape:w-full flex flex-col landscape:flex-row justify-between",
          className,
        )}
        {...props}>
        <div
          className={
            "flex-1 h-0 w-full landscape:h-full landscape:w-0 flex flex-col"
          }>
          <MainLayoutHeader />
          <div className={"flex-1 h-0 w-full pt-3"}>{children}</div>
        </div>
        <MainLayoutTabNavigation />
      </div>
    </>
  );
};

export default SystemSettingLandingLayout;
