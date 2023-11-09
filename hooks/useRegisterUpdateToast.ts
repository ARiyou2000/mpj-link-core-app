import { useToast } from "@/components/ui/use-toast";

const useRegisterUpdateToast = () => {
  const { toast } = useToast();

  const handleRegistersUpdate = async (callbackFn) => {
    try {
      const result = await callbackFn();
    } catch (e) {
      toast({
        variant: "destructive",
        title: "شما دسترسی تغییر این گزینه را ندارید",
      });
      console.error(e);
    }
  };

  return handleRegistersUpdate;
};

export default useRegisterUpdateToast;
