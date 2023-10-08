import { Switch } from "@/components/ui/switch";
import RelayPortCard from "../RelayPortCard";
import useSwitchUpdate from "@/hooks/useSwitchUpdate";

const RelayPortOutCard = ({
  name,
  description,
  publicId,
  checked = false,
  ...props
}) => {
  const { onSwitchChange, loading } = useSwitchUpdate(publicId);

  return (
    <>
      <RelayPortCard name={name} description={description} {...props}>
        <Switch
          checked={checked}
          onCheckedChange={onSwitchChange}
          disabled={loading}
          loading={loading}
        />
      </RelayPortCard>
    </>
  );
};

export default RelayPortOutCard;
