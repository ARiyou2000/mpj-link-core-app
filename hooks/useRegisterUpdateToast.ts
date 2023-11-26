"use client";

// import { toast } from "sonner";
import { useState } from "react";

const useRegisterUpdateToast = () => {
  const [loading, setLoading] = useState(false);

  const handleRegistersUpdate = async (
    callbackFn: () => unknown = async () => null,
  ) => {
    // setLoading((prevState) => true);
    try {
      const result = await callbackFn();
    } catch (e) {
      // toast.error({"شما دسترسی تغییر این گزینه را ندارید"});
      console.error(e);
    }
    // setLoading((prevState) => false);
  };

  return [handleRegistersUpdate, loading];
};

export default useRegisterUpdateToast;
