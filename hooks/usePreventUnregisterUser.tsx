"use client";

import { useEffect } from "react";
import window from "@/utils/window";

const usePreventUnregisterUser = () => {
  useEffect(() => {
    const AuthToken = window.localStorage.getItem(window.btoa("MPJUserT"));
    if (!AuthToken) {
      throw new Error("User is unregistered!");
    }
  }, []);
};

export default usePreventUnregisterUser;
