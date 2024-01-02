import { cn } from "@/lib/utils";

const LoadingTitle = ({ className = "", ...props }) => (
  <h3 className={cn("loading w-16 h-4", className)} {...props} />
);

export default LoadingTitle;
