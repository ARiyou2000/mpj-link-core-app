"use client";

import { useEffect, useRef, useState } from "react";

const useMarquee = () => {
  const element = useRef();
  const [shouldMarquee, setShouldMarquee] = useState(false);
  const [marqueeClassName, setMarqueeClassName] = useState(
    "marquee-text-candidate",
  );

  useEffect(() => {
    if (
      element.current &&
      element.current.offsetWidth < element.current.scrollWidth
    ) {
      setShouldMarquee(true);
      setMarqueeClassName("marquee-text-candidate marquee-text");
    }
  }, [element.current]);

  return [element, marqueeClassName, shouldMarquee];
};

export default useMarquee;
