import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const useRegisterUpdateToast = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleRegistersUpdate = async (callbackFn) => {
    setLoading((prevState) => true);
    try {
      const result = await callbackFn();
    } catch (e) {
      toast({
        variant: "destructive",
        title: "شما دسترسی تغییر این گزینه را ندارید",
      });
      console.error(e);
    }
    setLoading((prevState) => false);
  };

  return [handleRegistersUpdate, loading];
};

export default useRegisterUpdateToast;
