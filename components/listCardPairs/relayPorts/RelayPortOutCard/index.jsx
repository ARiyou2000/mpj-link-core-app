import { Switch } from "@/components/ui/switch";
import RelayPortCard from "../RelayPortCard";

const RelayPortOutCard = ({ registerInstance, ...props }) => {
  return (
    <>
      <RelayPortCard registerInstance={registerInstance} {...props}>
        <Switch
          checked={registerInstance.value}
          onCheckedChange={registerInstance.updateValue}
          // disabled={loading}
          // loading={loading}
        />
      </RelayPortCard>
    </>
  );
};

export default RelayPortOutCard;
