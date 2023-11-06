import { useEffect, useRef, useState } from "react";
import window from "@/utils/window";

const useResizableContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<number | undefined>(undefined);
  const handleWindowSizeChange = (event: Event) => {
    if (containerRef.current) {
      setSize(window.visualViewport?.height);

      // if (containerRef.current.style) {
      //   const height = `${window.visualViewport?.height}px`;
      //   containerRef.current.style.height = height;
      //   containerRef.current.style.maxHeight = height;
      // }
    }
  };

  useEffect(() => {
    if (containerRef.current && containerRef.current.style) {
      containerRef.current.style.height = "100%";
    }
    window.visualViewport?.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.visualViewport?.removeEventListener(
        "resize",
        handleWindowSizeChange,
      );
    };
  }, []);

  return [
    containerRef,
    size,
    {
      height: size || "100%",
      maxHeight: size || "100%",
    },
  ];
};

export default useResizableContainer;
