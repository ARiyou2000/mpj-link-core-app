import MainLayoutHeader from "@/components/MainLayoutHeader";
import MainLayoutTabNavigation from "@/components/MainLayoutTabNavigation";
import { Toaster } from "sonner";

export const metadata = {
  title: "Dashboard - MPJ Link App",
  description: "Control dashboard",
};

const MainLayout = ({ children }) => {
  return (
    <>
      <div
        className={
          "h-full w-full flex flex-col landscape:flex-row justify-between"
        }>
        <MainLayoutHeader className={"landscape:hidden"} />
        <div
          className={"flex-1 h-0 landscape:w-0 w-full landscape:h-full pt-3"}>
          {children}
        </div>
        <MainLayoutTabNavigation />
      </div>
      <Toaster richColors toastOptions={{ className: "font-sans" }} />
    </>
  );
};

export default MainLayout;
