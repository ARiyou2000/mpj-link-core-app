import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/custom-card";
import LoadingTitle from "@/components/loading/LoadingTitle";
import LoadingDescription from "@/components/loading/LoadingDescription";

type PropsT = {
  hasFavoriteButton?: boolean;
  isFavored: boolean;
  className?: string;
};
const ScenarioCardLoading = ({
  hasFavoriteButton = true,
  isFavored,
  className = "",
  ...props
}: PropsT) => {
  return (
    <>
      <Card className={cn("flex flex-col", className)} {...props}>
        <div className={"flex flex-row p-4 justify-between items-center"}>
          <CardHeader className={"basis-2/3 p-4 text-right w-full"}>
            <div
              className={"flex flex-col gap-2 justify-center text-milkwhite"}>
              <CardTitle className={"font-normal text-xs"}>
                <LoadingTitle />
              </CardTitle>
              <CardDescription
                className={
                  "font-normal text-[0.5rem] leading-[0.67875rem] text-milkwhite"
                }>
                <LoadingDescription />
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent
            className={`basis-1/3 text-left p-2 relative h-[7.4375rem] w-[7.4375rem] min-w-[7.4375rem] max-w-[7.4375rem] rounded-card bg-center bg-opacity-20 bg-cover bg-no-repeat`}
            style={{
              backgroundImage: `url(/images/musicPlayerBackground.webp)`,
            }}>
            {hasFavoriteButton && (
              <div
                className={
                  "rounded-full p-1.5 inline-block bg-milkwhite hover:bg-milkwhite hover:opacity-70"
                }>
                <Heart
                  color={"#222222"}
                  fill={isFavored ? "#D04848" : "none"}
                  stroke={isFavored ? "#D04848" : "black"}
                  className={"w-4 h-4"}
                />
              </div>
            )}
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default ScenarioCardLoading;
