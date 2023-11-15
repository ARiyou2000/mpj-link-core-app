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
        <MainLayoutHeader className={"landscape:hidden"} />
        <div
          className={"flex-1 w-full h-0 landscape:h-full pt-3 landscape:pt-0"}>
          {children}
        </div>
      </div>
    </>
  );
};

export default PasswordManagementLayout;
