"use client";

import { useState } from "react";
import { setRegisterData } from "@/utils/queueHelper";
import { useToast } from "@/components/ui/use-toast";

const useSwitchUpdate = (publicId: string) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const onSwitchChange = async (checked: boolean) => {
    setLoading(true);
    try {
      const result = await setRegisterData(publicId, checked ? "02" : "01");
    } catch (e) {
      toast({
        variant: "destructive",
        title: "شما دسترسی تغییر این گزینه را ندارید",
      });
      console.error(e);
    }
    setLoading(false);
  };

  return { onSwitchChange, loading };
};

export default useSwitchUpdate;
