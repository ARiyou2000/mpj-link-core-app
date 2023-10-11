"use client";

import Card from "@/components/Card";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import fetchUrl from "@/utils/fetchUrl";
import getCoreIP from "@/utils/getCoreIP";
import { ReactNode, useContext } from "react";
import { ScenarioForceUpdateContext } from "@/contexts/forceUpdateContext";
import { useToast } from "@/components/ui/use-toast";
import Scenario from "@/classes/scenario";

const ActivateScenarioAlert = ({
  children,
  scenarioPublicId,
}: {
  children: ReactNode;
  scenarioPublicId: string;
}) => {
  const { toast } = useToast();

  return (
    <>
      <AlertDialog className={"w-full"}>
        <AlertDialogTrigger className={"w-full"}>{children}</AlertDialogTrigger>
        <AlertDialogContent className={"rounded-card bg-white/40 text-white"}>
          <AlertDialogHeader>
            <AlertDialogTitle>سناریوی مورد نظر انجام شود؟</AlertDialogTitle>
            {/*<AlertDialogDescription>*/}
            {/*  This action cannot be undone. This will permanently delete your*/}
            {/*  account and remove your data from our servers.*/}
            {/*</AlertDialogDescription>*/}
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={async () => {
                try {
                  const result = await fetchUrl(
                    `${getCoreIP()}/command/scenario/${scenarioPublicId}`,
                  );
                } catch (e) {
                  toast({
                    variant: "destructive",
                    title: "اعمال سناریو با شکست مواجه شد",
                  });
                  console.error(e);
                }
              }}>
              تایید
            </AlertDialogAction>
            <AlertDialogCancel>لغو</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const MakeScenarioFavoriteAlertDialog = ({
  children,
  favorite,
  scenarioPublicId,
}: {
  children: ReactNode;
  favorite: boolean;
  scenarioPublicId: string;
}) => {
  const scenarioForceUpdate = useContext(ScenarioForceUpdateContext);

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>{children}</AlertDialogTrigger>
        <AlertDialogContent className={"rounded-card bg-white/40 text-white"}>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {favorite
                ? "سناریو مورد نظر از لیست علاقه مندی ها حذف شود؟"
                : "              سناریوی مورد نظر مورد علاقه شود؟"}
            </AlertDialogTitle>
            {/*<AlertDialogDescription>*/}
            {/*  This action cannot be undone. This will permanently delete your*/}
            {/*  account and remove your data from our servers.*/}
            {/*</AlertDialogDescription>*/}
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={async () => {
                try {
                  const result = await fetchUrl(
                    `${getCoreIP()}/scenario/${scenarioPublicId}`,
                    {
                      method: "PUT",
                      body: { favorite: !favorite },
                    },
                  );
                  scenarioForceUpdate();
                } catch (e) {
                  console.error(e);
                }
              }}>
              تایید
            </AlertDialogAction>
            <AlertDialogCancel>لغو</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
const ScenarioCard = ({
  data,
  className = "",
  hasFavoriteButton = true,
  ...props
}: {
  data: Scenario;
  className?: string;
  hasFavoriteButton: boolean;
}) => {
  return (
    <>
      <Card.Normal
        className={cn("flex flex-row p-4 justify-between", className)}
        {...props}>
        <ActivateScenarioAlert scenarioPublicId={data.publicId}>
          <CardHeader className={"basis-2/3 p-4 text-right"}>
            <div
              className={"flex flex-col gap-2 justify-center text-milkwhite"}>
              <CardTitle className={"font-normal text-xs"}>
                {data.name}
              </CardTitle>
              <CardDescription
                className={
                  "font-normal text-[0.5rem] leading-[0.67875rem] text-milkwhite"
                }>
                {data.description}
              </CardDescription>
            </div>
          </CardHeader>
        </ActivateScenarioAlert>
        <CardContent
          className={`basis-1/3 text-left p-2 relative h-[7.4375rem] w-[7.4375rem] max-w-[7.4375rem] rounded-card bg-center bg-opacity-20 bg-cover bg-no-repeat`}
          style={{
            backgroundImage: `url(${data.image}), url(/images/musicPlayerBackground.webp)`,
            // backgroundPosition: "center",
            // borderRadius: "",
            // background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${image}), lightgray 50%`,
          }}>
          {hasFavoriteButton && (
            <MakeScenarioFavoriteAlertDialog
              scenarioPublicId={data.publicId}
              favorite={data.favorite}>
              <div
                className={
                  "rounded-full p-1.5 inline-block bg-milkwhite hover:bg-milkwhite hover:opacity-70"
                }>
                <Heart
                  color={"#222222"}
                  fill={data.favorite ? "#D04848" : "none"}
                  stroke={data.favorite ? "#D04848" : "black"}
                  className={"w-4 h-4"}
                />
              </div>
            </MakeScenarioFavoriteAlertDialog>
          )}
        </CardContent>
        {/*<CardFooter></CardFooter>*/}
      </Card.Normal>
    </>
  );
};

export default ScenarioCard;
