"use client";

import styles from "./UnlockSlider.module.css";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const config = {
  debounceOnAndroid: 50,
  // The higher, the smoother
  sliderMaxValue: 1000,
  // The lower, the smoother
  sliderValueDecrementSpeed: 60,
  // For instance when we need center value of 0 and mines value for left side
  sliderMinValue: 0,
};
const UnlockSlider = ({
  className,
  onUnlock = () => null,
  shouldResetOnUnlock = true,
  ...props
}) => {
  const sliderCurrentValue = useRef(config.sliderMinValue);
  const [sliderValue, setSliderValue] = useState(config.sliderMinValue);
  const sliderValueChangeHandler = (e) => {
    sliderCurrentValue.current = e.target.value;
    setSliderValue(e.target.value);
    // Safety-check for animation errors
    // if (e.target.value === e.target.max) {
    // setShowCodeInput(true)
    // }
  };

  // Check if slider position == sliderMaxValue
  const CheckUnlocked = async () => {
    // check if current value is lower than max value
    if (sliderValue < config.sliderMaxValue - config.debounceOnAndroid) {
      // Not unlocked -> set value back to sliderMinValue
      ResetCurrVal();
    } else {
      onUnlock();
      shouldResetOnUnlock && ResetCurrVal();
    }
  };

  // Make text disappear gracefully with slider value
  //     function AnimateText() {
  //
  //         document.querySelector(".slide-text").style.opacity = (slider.max - (currVal + 55)) / slider.max
  //
  //         if (currVal == slider.max) {
  //             document.querySelector(".slide-text").style.visibility = 'hidden'
  //         } else {
  //             document.querySelector(".slide-text").style.visibility = 'visible'
  //         }
  //     }

  // Reset slider and text when slider position != sliderMaxValue
  function ResetCurrVal() {
    // update input range
    if (sliderCurrentValue.current > config.sliderMinValue) {
      window.requestAnimationFrame(ResetCurrVal);
    }
    // decrement value
    sliderCurrentValue.current =
      sliderCurrentValue.current - config.sliderValueDecrementSpeed;
    setSliderValue(sliderCurrentValue.current);
    // document.querySelector(".slide-text").style.opacity = (slider.max - currVal) / slider.max
  }

  return (
    <div
      className={cn("flex flex-col flex-nowrap gap-2 w-full", className)}
      {...props}
      dir={"ltr"}>
      <div className={"flex items-center justify-center"}>
        <div>
          <div className={styles["my-container"]} dir={"ltr"}>
            <div className={styles["slide-wrapper"]}>
              <input
                className={styles["slider"]}
                type="range"
                min={config.sliderMinValue}
                max={config.sliderMaxValue}
                onChange={sliderValueChangeHandler}
                onTouchEnd={CheckUnlocked}
                onMouseUp={CheckUnlocked}
                value={sliderValue}
              />
              <h1
                className={`${styles["slide-text"]} m-auto align-bottom`}
                style={{
                  opacity:
                    (config.sliderMaxValue - sliderValue / (3 / 5)) /
                    config.sliderMaxValue,
                }}>
                باز کردن
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockSlider;
