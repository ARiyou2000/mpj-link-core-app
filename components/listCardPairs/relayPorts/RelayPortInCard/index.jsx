import RelayPortCard from "../RelayPortCard";
import { cn } from "@/lib/utils";

const RelayPortInCard = ({ registerInstance, ...props }) => {
  return (
    <>
      <RelayPortCard registerInstance={registerInstance} {...props}>
        <div
          data-state={registerInstance.value}
          className={cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-transparent ring-1 ring-red transition-all duration-500 data-[state=true]:bg-white data-[state=true]:drop-shadow-active data-[state=true]:ring-0 dark:bg-transparent",
          )}
        />
      </RelayPortCard>
    </>
  );
};

export default RelayPortInCard;
