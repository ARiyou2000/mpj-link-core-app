import MainLayoutHeader from "@/components/MainLayoutHeader";
import MainLayoutTabNavigation from "@/components/MainLayoutTabNavigation";
import { ReactNode } from "react";

export const metadata = {
  title: "Dashboard - MPJ Link App",
  description: "Control dashboard",
};

type PropsT = { children: ReactNode };
const MainLayout = ({ children }: PropsT) => {
  return (
    <>
      <div
        className={
          "h-full w-full flex flex-col landscape:flex-row justify-between"
        }>
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

export default MainLayout;
