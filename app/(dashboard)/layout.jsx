import { cn } from "@/lib/utils";
import MainLayoutHeader from "@/components/MainLayoutHeader";
import MainLayoutTabNavigation from "@/components/MainLayoutTabNavigation";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Dashboard - MPJ Link App",
  description: "Control dashboard",
};

const MainLayout = ({ children, className, ...props }) => {
  return (
    <>
      <div
        className={cn(
          "h-full w-full flex flex-col landscape:flex-row justify-between",
          className,
        )}
        {...props}>
        <MainLayoutHeader className={"landscape:hidden"} />
        <div className={"flex-1 h-0 pt-3"}>{children}</div>
        <MainLayoutTabNavigation />
      </div>
      <Toaster />
    </>
  );
};

export default MainLayout;
