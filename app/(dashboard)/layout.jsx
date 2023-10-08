import { cn } from "@/lib/utils";
import MainLayoutHeader from "@/components/MainLayoutHeader";
import MainLayoutTabNavigation from "@/components/MainLayoutTabNavigation";

export const metadata = {
  title: "Dashboard - MPJ Link App",
  description: "Control dashboard",
};

const MainLayout = ({ children, className, ...props }) => {
  return (
    <>
      <div
        className={cn("h-full w-full flex flex-col justify-between", className)}
        {...props}>
        <MainLayoutHeader />
        <div className={"flex-1 h-0 pt-3"}>{children}</div>
        <MainLayoutTabNavigation />
      </div>
    </>
  );
};

export default MainLayout;
