"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import useIsFirstRender from "@/hooks/useIsFirstRender";

const ProgressBarProps = {
  number: false,
  unit: "°",
  // fontColor: "#365b74",
  // fontSize: "0.5rem",
  // fontWeight: 400,
  // textPosition: "0.35em",
  size: "18rem",
  stroke: 3,
  strokeBottom: 3,
  speed: 30,
  cut: 50,
  // fill: "none",
  // animationOff: false,
  // animationSmooth: "1s ease-out",
  rotation: -180,
  // strokeDasharray: "1,2",
  // inverse: false,
  round: true,
  linearGradient: ["rgba(251, 147, 147, 1)", "rgba(122, 171, 251, 1)"],
  // colorSlice: "#4bff00",
  colorCircle: "rgba(152,151,150,0.3)",
  styles: {
    // borderRadius: "50%",
    // boxShadow: "inset 0 0 25px 10px #a2caff",
    position: "relative",
  },
};

const TargetPointMaxValue = 35;
const TargetPointMinValue = 15;

const validTargetTemperatureValue = (value) => {
  if (value < TargetPointMinValue) return TargetPointMinValue;
  if (value > TargetPointMaxValue) return TargetPointMaxValue;
  return value;
};

const shadowClassName = "shadow-[0px_0px_12px_0px_rgba(224,224,224,0.7)]";
const thermostatTempButtonStyleClassName =
  "m-0 p-5 rounded-full border-1.5 disabled:cursor-not-allowed";
const thermostatTempButtonIconStyleClassName = "h-6 w-6";

const CurvedProgressCounter = ({
  targetTemperature,
  currentTemperature,
  onTargetTemperatureChange = (value) => null,
  power = false,
  className,
  ...props
}) => {
  const isFirstRender = useIsFirstRender();

  const [textAnimationPropertyClassName, setTextAnimationPropertyClassName] =
    useState("");
  const [temperatureText, setTemperatureText] = useState({
    number: "initial_state",
    text: "initial_state",
  });
  const [isChangingTargetTemperature, setIsChangingTargetTemperature] =
    useState(false);
  const [progressTemperatureValue, setProgressTemperatureValue] =
    useState(TargetPointMinValue);

  // ---------------------------- Sync with server -------------------------------
  // Sync current temperature with server
  // Change temperature text on first render to current (on first render isChangingTargetTemperature is false).
  // (Prevent rendering current temp in middle of changing set pint value)

  // Sync target temperature with server if user is not changing it right now.
  // Prevent glitch from happening on changing target temp.
  useEffect(() => {
    if (!isChangingTargetTemperature && currentTemperature) {
      setTextAnimationPropertyClassName("opacity-0");
    }
    if (!isChangingTargetTemperature) {
      currentTemperature &&
        setTemperatureText({ number: currentTemperature, text: "دمای فعلی" });
      // targetTemperature && setProgressTemperatureValue(targetTemperature);
      targetTemperature &&
        setProgressTemperatureValue(
          validTargetTemperatureValue(targetTemperature),
        );
    }
  }, [isChangingTargetTemperature, currentTemperature, targetTemperature]);

  // ---------------- Call to API after no interaction for 1.5s --------------------

  // This ref will prevent lag if you start changing value again after updating device
  const isChangingTargetTemperatureTimeout = useRef(null);
  const updateServerTargetTemperature = () => {
    console.log("call to server");
    setTemperatureText({ number: currentTemperature, text: "دمای فعلی" });

    // Release Changing state after 1 second.
    // It will make sure that we have a response of latest call after sending new value to server.
    // Preventing lag and glitch effect of time gap between sending value to server and reading updated value
    isChangingTargetTemperatureTimeout.current = setTimeout(() => {
      setIsChangingTargetTemperature((prevState) => false);
      // [I think(Make sure later)] delay number must be smaller than switching time between current and target temperature text. (Maybe or Maybe NOT)
      //  Delay must be larger than server update time
    }, 1500);
    try {
      onTargetTemperatureChange(progressTemperatureValue);
    } catch (e) {
      console.error("شکست در اعمال وضعیت");
    }
  };

  // Call to api only after spending 2.5s without interaction.
  const [lastFireTime, setLastFireTime] = useState(null);
  const timeoutRef = useRef(null);
  useEffect(() => {
    timeoutRef.current = setTimeout(
      // Prevent useless call to server on first render
      isFirstRender ? () => null : updateServerTargetTemperature,
      2500,
    );
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [lastFireTime]);

  // Increase/Decrease button handler
  const handleChangeSetPointButtonClicked = (value) => {
    setIsChangingTargetTemperature((prevState) => true);
    clearTimeout(isChangingTargetTemperatureTimeout.current);
    setLastFireTime(new Date().getTime());
    setTemperatureText({ number: value, text: "دمای آسایش" });
    setProgressTemperatureValue(value);
    clearTimeout(timeoutRef.current);
  };

  const increaseTargetTemperatureValue = () => {
    const validValue = validTargetTemperatureValue(progressTemperatureValue);
    handleChangeSetPointButtonClicked(
      validValue < TargetPointMaxValue ? validValue + 1 : TargetPointMaxValue,
    );
  };
  const decreaseTargetTemperatureValue = () => {
    const validValue = validTargetTemperatureValue(progressTemperatureValue);
    handleChangeSetPointButtonClicked(
      validValue > TargetPointMinValue ? validValue - 1 : TargetPointMinValue,
    );
  };

  // Animation on text change
  useLayoutEffect(() => {
    setTextAnimationPropertyClassName("opacity-100");
  }, [temperatureText]);

  return (
    <>
      <div className={cn("flex flex-col items-center", className)} {...props}>
        <CircularProgressBar
          percent={
            power && !!progressTemperatureValue
              ? Math.round(
                  ((progressTemperatureValue - TargetPointMinValue) /
                    (TargetPointMaxValue - TargetPointMinValue)) *
                    100,
                )
              : 0
          }
          {...ProgressBarProps}>
          <div
            className={
              "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full p-5"
            }>
            <div
              className={`flex flex-col items-center justify-center gap-1 h-[12.5rem] w-[12.5rem] rounded-full bg-[#1C1F20] ${
                power && shadowClassName
              } text-xl transition-shadow duration-1000 ease-out`}>
              <div
                className={`${textAnimationPropertyClassName} transition-opacity duration-500 ease-in-out`}>
                {temperatureText.number === "initial_state" ? (
                  <LoadingSpinner />
                ) : (
                  <span
                    className={`${
                      power ? "text-milkwhite" : "text-[rgba(152,151,150,1)]"
                    } text-4xl font-normal`}>
                    {power
                      ? !!temperatureText?.number &&
                        `${temperatureText.number}°`
                      : "OFF"}
                  </span>
                )}
              </div>
              <h4
                className={`${textAnimationPropertyClassName} transition-opacity duration-300 ease-in-out text-milkwhite text-xl font-light`}>
                {power &&
                  temperatureText.text !== "initial_state" &&
                  temperatureText.text}
              </h4>
            </div>
          </div>
        </CircularProgressBar>

        <div className={"flex flex-row items-center justify-center gap-16"}>
          <Button
            className={thermostatTempButtonStyleClassName}
            onClick={increaseTargetTemperatureValue}
            disabled={!power}>
            <Plus className={thermostatTempButtonIconStyleClassName} />
          </Button>

          <Button
            className={thermostatTempButtonStyleClassName}
            onClick={decreaseTargetTemperatureValue}
            disabled={!power}>
            <Minus className={thermostatTempButtonIconStyleClassName} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default CurvedProgressCounter;
