import NormalCard from "../NormalCard";
import { cn } from "@/lib/utils";

const GradiantCard = ({ children, className, ...props }) => {
  return (
    <>
      <NormalCard
        className={cn("border-gradiant border-none [&>*]:z-10", className)}
        {...props}>
        {children}
      </NormalCard>
    </>
  );
};

export default GradiantCard;
