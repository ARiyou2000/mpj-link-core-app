"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import useIsFirstRender from "@/hooks/useIsFirstRender";

const config = {
  showLiveStateAfterCallToServerDelay: 2000,
  callToServerDelay: 2500,
};

const nextPrevButtonStyleClassName = "p-2.5 m-0 rounded-full bg-[#383838]";

const TargetPointMaxValue = 4;
const TargetPointMinValue = 1;

const getValidCurrentSliderValue = (value) => {
  if (value < TargetPointMinValue) {
    return TargetPointMinValue;
  } else if (value > TargetPointMaxValue) {
    return TargetPointMaxValue;
  } else {
    return value;
  }
};

const isValidSliderCurrentValue = (value) => {
  const result = value >= TargetPointMinValue && value <= TargetPointMaxValue;
  return result;
};

const Carousel = ({
  slides = [],
  className,
  onChange = (currentValueObject) => null,
  disabled = false,
  valueIndex = 0,
  ...props
}) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const handleButtonsDisable = (value) => {
    if (value === TargetPointMinValue) {
      setPrevBtnDisabled(() => true);
      setNextBtnDisabled(() => false);
    } else if (value === TargetPointMaxValue) {
      setPrevBtnDisabled(() => false);
      setNextBtnDisabled(() => true);
    } else {
      setPrevBtnDisabled(() => false);
      setNextBtnDisabled(() => false);
    }
  };

  const isFirstRender = useIsFirstRender();
  // const [textAnimationPropertyClassName, setTextAnimationPropertyClassName] =
  //   useState("");
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  const [isChangingCurrentValueIndex, setIsChangingCurrentValueIndex] =
    useState(false);
  // const [progressTemperatureValue, setProgressTemperatureValue] = useState(0);

  // ---------------------------- Sync with server -------------------------------
  // Sync current temperature with server
  // Change temperature text on first render to current (on first render isChangingCurrentValueIndex is false).
  // (Prevent rendering current temp in middle of changing set pint value)

  // Sync target temperature with server if user is not changing it right now.
  // Prevent glitch from happening on changing target temp.
  useEffect(() => {
    if (!isChangingCurrentValueIndex) {
      setCurrentValueIndex(getValidCurrentSliderValue(valueIndex));
      handleButtonsDisable(getValidCurrentSliderValue(valueIndex));
    }
  }, [isChangingCurrentValueIndex, valueIndex]);

  // ---------------- Call to API after no interaction for 1.5s --------------------

  // This ref will prevent lag if you start changing value again after updating device
  const isChangingCurrentIndexValueTimeout = useRef(null);
  const updateOnRelease = () => {
    console.log("call to server");

    // Release Changing state after 2 second.
    // It will make sure that we have a response of latest call after sending new value to server.
    // Preventing lag and glitch effect of time gap between sending value to server and reading updated value
    isChangingCurrentIndexValueTimeout.current = setTimeout(() => {
      setIsChangingCurrentValueIndex((prevState) => false);
      // [I think(Make sure later)] delay number must be smaller than switching time between current and target temperature text. (Maybe or Maybe NOT)
      //  Delay must be larger than server update time
    }, config.showLiveStateAfterCallToServerDelay);
    onChange(currentValueIndex);
  };

  // Call to api only after spending 2.5s without interaction.
  const [lastFireTime, setLastFireTime] = useState(null);
  const timeoutRef = useRef(null);
  useEffect(() => {
    timeoutRef.current = setTimeout(
      // Prevent useless call to server on first render
      isFirstRender ? () => null : updateOnRelease,
      config.callToServerDelay,
    );
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [lastFireTime]);

  // Increase/Decrease button handler
  const handleChangeSetPointButtonClicked = (value) => {
    setIsChangingCurrentValueIndex((prevState) => true);
    clearTimeout(isChangingCurrentIndexValueTimeout.current);
    setLastFireTime(new Date().getTime());
    setCurrentValueIndex(() => value);
    handleButtonsDisable(value);
    // setProgressTemperatureValue(value);
    clearTimeout(timeoutRef.current);
  };

  const onNextButtonClick = () => {
    const validValue = getValidCurrentSliderValue(currentValueIndex);
    handleChangeSetPointButtonClicked(
      validValue < TargetPointMaxValue ? validValue + 1 : TargetPointMaxValue,
    );
  };
  const onPrevButtonClick = () => {
    const validValue = getValidCurrentSliderValue(currentValueIndex);
    handleChangeSetPointButtonClicked(
      validValue > TargetPointMinValue ? validValue - 1 : TargetPointMinValue,
    );
  };

  return (
    <>
      <div
        aria-disabled={disabled}
        className={cn(
          "w-full flex flex-row flex-nowrap items-center rounded-2xl border border-milkwhite px-3 py-6 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed",
          className,
        )}
        {...props}>
        {/*<div className="flex flex-row gap-2">*/}
        <Button
          onClick={onPrevButtonClick}
          disabled={disabled || prevBtnDisabled}
          className={nextPrevButtonStyleClassName}>
          <ChevronRight color={"#F4F4F4"} size={"0.625rem"} />
        </Button>

        {/*</div>*/}
        <div
          className={
            "flex-1 flex flex-row overflow-hidden pointer-events-auto"
          }>
          {slides?.map((slide) => (
            <div
              className={`min-w-full text-center transition-all`}
              key={`slide_${slide.value}`}
              style={{
                transform: isValidSliderCurrentValue(currentValueIndex)
                  ? `translateX(${currentValueIndex * 100}%)`
                  : `translateX(0px)`,
              }}>
              {slide}
            </div>
          ))}
        </div>
        <Button
          onClick={onNextButtonClick}
          disabled={disabled || nextBtnDisabled}
          className={nextPrevButtonStyleClassName}>
          <ChevronLeft color={"#F4F4F4"} size={"0.625rem"} />
        </Button>
      </div>
    </>
  );
};

export default Carousel;
