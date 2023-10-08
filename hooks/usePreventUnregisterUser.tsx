"use client";

import { useEffect } from "react";
import WINDOW from "@/utils";

const usePreventUnregisterUser = () => {
  useEffect(() => {
    const AuthToken = WINDOW.localStorage.getItem(WINDOW.btoa("MPJUserT"));
    if (!AuthToken) {
      throw new Error("User is unregistered!");
    }
  }, []);
};

export default usePreventUnregisterUser;
