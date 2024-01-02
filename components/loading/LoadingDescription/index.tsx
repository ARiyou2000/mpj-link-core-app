import { cn } from "@/lib/utils";

const LoadingDescription = ({ className = "", ...props }) => (
  <p className={cn("loading w-32 h-3", className)} {...props} />
);
export default LoadingDescription;
