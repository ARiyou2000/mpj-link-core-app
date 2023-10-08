import NormalCard from "../NormalCard";
import { cn } from "@/lib/utils";

const GradiantCard = ({ children, className, ...props }) => {
  return (
    <>
      <NormalCard
        className={cn("border-gradiant", className)}
        // style={{
        //   borderImageSource:
        //     "linear-gradient(215.38deg, #FB9393 -6.7%, #FFFFFF 135.15%)",
        // }}
        {...props}>
        {children}
      </NormalCard>
    </>
  );
};

export default GradiantCard;
