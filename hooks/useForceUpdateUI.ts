"use client";

import { useState } from "react";

const useForceUpdateUI = () => {
  const [value, setValue] = useState({});
  const forceUpdate = () => {
    setValue({});
  };
  return forceUpdate;
};

export default useForceUpdateUI;
