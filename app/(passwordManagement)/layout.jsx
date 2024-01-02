"use client";

import useResizableContainer from "@/hooks/useResizableContainer";

const PasswordManagementLayout = ({ children }) => {
  const [containerRef, size, styleObject] = useResizableContainer();
  return (
    <>
      <div
        className={"h-full w-full flex flex-col justify-between duration-200"}
        style={styleObject}
        ref={containerRef}>
        <div
          className={
            "flex-1 w-full h-0 landscape:h-full flex flex-col gap-3 landscape:gap-0"
          }>
          {children}
        </div>
      </div>
    </>
  );
};

export default PasswordManagementLayout;
