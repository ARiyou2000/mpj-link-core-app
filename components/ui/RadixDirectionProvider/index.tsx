"use client";

import { DirectionProvider } from "@radix-ui/react-direction";
import { ReactNode } from "react";

type PropsT = { dir: "rtl" | "ltr"; children: ReactNode };

const RadixDirectionProvider = ({ dir, children }: PropsT) => {
  return <DirectionProvider dir={dir}>{children}</DirectionProvider>;
};

export default RadixDirectionProvider;
