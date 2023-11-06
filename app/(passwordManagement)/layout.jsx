"use client";

import MainLayoutHeader from "@/components/MainLayoutHeader";
import useResizableContainer from "@/hooks/useResizableContainer";

const PasswordManagementLayout = ({ children }) => {
  const [containerRef, size, styleObject] = useResizableContainer();
  return (
    <>
      <div
        className={"h-full w-full flex flex-col justify-between duration-200"}
        style={styleObject}
        ref={containerRef}>
        <MainLayoutHeader />
        <div className={"flex-1 h-0 pt-3"}>{children}</div>
      </div>
    </>
  );
};

export default PasswordManagementLayout;
