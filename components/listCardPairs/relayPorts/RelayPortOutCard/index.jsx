import { Switch } from "@/components/ui/switch";
import RelayPortCard from "../RelayPortCard";
import useRegisterUpdateToast from "@/hooks/useRegisterUpdateToast";

const RelayPortOutCard = ({ registerInstance, ...props }) => {
  const [updateHandler] = useRegisterUpdateToast();
  return (
    <>
      <RelayPortCard registerInstance={registerInstance} {...props}>
        <Switch
          checked={registerInstance.value}
          onCheckedChange={(value) =>
            updateHandler(() => registerInstance.updateValue(value))
          }
          // disabled={loading}
          // loading={loading}
        />
      </RelayPortCard>
    </>
  );
};

export default RelayPortOutCard;
