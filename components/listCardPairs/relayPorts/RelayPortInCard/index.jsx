import RelayPortCard from "../RelayPortCard";
import { cn } from "@/lib/utils";

const RelayPortInCard = ({ name, description, checked = false, ...props }) => {
  return (
    <>
      <RelayPortCard name={name} description={description} {...props}>
        <div
          data-state={checked}
          className={cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-transparent ring-1 ring-red transition-all duration-500 data-[state=true]:bg-white data-[state=true]:drop-shadow-active data-[state=true]:ring-0 dark:bg-transparent",
          )}
        />
      </RelayPortCard>
    </>
  );
};

export default RelayPortInCard;
