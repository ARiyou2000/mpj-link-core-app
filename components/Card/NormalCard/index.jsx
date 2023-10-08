import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const NormalCard = ({ children, className = "", ...props }) => {
  return (
    <>
      <Card
        className={cn(
          "p-2 border border-solid rounded-card text-milkwhite bg-transparent",
          className,
        )}
        {...props}>
        {children}
      </Card>
    </>
  );
};

export default NormalCard;
