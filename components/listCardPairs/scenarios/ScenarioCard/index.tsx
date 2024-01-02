"use client";

import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/custom-card";
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
import { ReactNode, useContext } from "react";
import { ScenarioForceUpdateContext } from "@/contexts/forceUpdateContext";
import { toast } from "sonner";
import Scenario from "@/classes/Scenario";

type ActivateScenarioAlertPropsT = {
  children: ReactNode;
  scenarioActivationHandler: () => Promise<unknown>;
};
const ActivateScenarioAlert = ({
  children,
  scenarioActivationHandler,
}: ActivateScenarioAlertPropsT) => {
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
                  await scenarioActivationHandler();
                } catch (e) {
                  toast.error("اعمال سناریو با شکست مواجه شد");
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

type MakeScenarioFavoriteAlertDialogPropsT = {
  children: ReactNode;
  isFavored: boolean;
  toggleIsFavoredHandler: () => Promise<unknown>;
};
const MakeScenarioFavoriteAlertDialog = ({
  children,
  isFavored,
  toggleIsFavoredHandler,
}: MakeScenarioFavoriteAlertDialogPropsT) => {
  const scenarioForceUpdate = useContext(ScenarioForceUpdateContext);

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>{children}</AlertDialogTrigger>
        <AlertDialogContent className={"rounded-card bg-white/40 text-white"}>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {isFavored
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
                  await toggleIsFavoredHandler();
                  scenarioForceUpdate();
                } catch (e) {
                  toast.error(
                    isFavored
                      ? "حذف سناریو از لیست دلخواه‌ها با شکست مواجه شد!"
                      : "افزودن سناریو به لیست دلخواه‌ها با شکست مواجه شد!",
                  );
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

type ScenarioPropsT = {
  scenarioInstance: Scenario;
  className?: string;
  hasFavoriteButton: boolean;
};
const ScenarioCard = ({
  scenarioInstance,
  className = "",
  hasFavoriteButton = true,
  ...props
}: ScenarioPropsT) => {
  return (
    <>
      <Card className={cn("flex flex-col", className)} {...props}>
        <div className={"flex flex-row p-4 justify-between"}>
          <ActivateScenarioAlert
            scenarioActivationHandler={scenarioInstance?.apply}>
            <CardHeader className={"basis-2/3 p-4 text-right"}>
              <div
                className={"flex flex-col gap-2 justify-center text-milkwhite"}>
                <CardTitle className={"font-normal text-xs"}>
                  {scenarioInstance?.name}
                </CardTitle>
                <CardDescription
                  className={
                    "font-normal text-[0.5rem] leading-[0.67875rem] text-milkwhite"
                  }>
                  {scenarioInstance?.description}
                </CardDescription>
              </div>
            </CardHeader>
          </ActivateScenarioAlert>
          <CardContent
            className={`basis-1/3 text-left p-2 relative h-[7.4375rem] w-[7.4375rem] min-w-[7.4375rem] max-w-[7.4375rem] rounded-card bg-center bg-opacity-20 bg-cover bg-no-repeat`}
            style={{
              backgroundImage: `url(${scenarioInstance?.image}), url(/images/musicPlayerBackground.webp)`,
              // backgroundPosition: "center",
              // borderRadius: "",
              // background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${image}), lightgray 50%`,
            }}>
            {hasFavoriteButton && (
              <MakeScenarioFavoriteAlertDialog
                isFavored={scenarioInstance?.isFavored}
                toggleIsFavoredHandler={scenarioInstance?.toggleIsFavored}>
                <div
                  className={
                    "rounded-full p-1.5 inline-block bg-milkwhite hover:bg-milkwhite hover:opacity-70"
                  }>
                  <Heart
                    color={"#222222"}
                    fill={scenarioInstance?.isFavored ? "#D04848" : "none"}
                    stroke={scenarioInstance?.isFavored ? "#D04848" : "black"}
                    className={"w-4 h-4"}
                  />
                </div>
              </MakeScenarioFavoriteAlertDialog>
            )}
          </CardContent>
        </div>
        {/*<CardFooter className={"flex flex-col"}>*/}
        {/*  <div>Favorite buttons</div>*/}
        {/*  <div>Activation buttons</div>*/}
        {/*</CardFooter>*/}
      </Card>
    </>
  );
};

export default ScenarioCard;
