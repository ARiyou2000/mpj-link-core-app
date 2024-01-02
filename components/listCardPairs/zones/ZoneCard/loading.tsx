import { zoneCardMainStyleClassName } from "@/components/listCardPairs/zones/ZoneCard/index";
import { cn } from "@/lib/utils";

const ZoneCardLoading = ({ className = "", ...props }) => {
  return (
    <>
      <div
        className={cn(zoneCardMainStyleClassName, className, "loading")}
        {...props}>
        <h3 className={"loading"} />
      </div>
    </>
  );
};

export default ZoneCardLoading;
