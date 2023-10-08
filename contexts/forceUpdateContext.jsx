import { createContext, useState } from "react";
import useForceUpdateUI from "@/hooks/useForceUpdateUI";

export const ForceUpdateContext = createContext({});

const ForceUpdateProvider = ({ children }) => {
  const refreshComponent = useForceUpdateUI;
  return (
    <>
      <ForceUpdateContext.Provider value={refreshComponent}>
        {children}
      </ForceUpdateContext.Provider>
    </>
  );
};

export const ScenarioForceUpdateContext = createContext(() => null);

export default ForceUpdateProvider;
