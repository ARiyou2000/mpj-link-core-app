"use client";

import styles from "./UnlockSlider.module.css";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const UnlockSlider = ({ className, onUnlock = () => null, ...props }) => {
  // The higher, the smoother
  const sliderMaxValue = 1000;
  // The lower, the smoother
  const sliderValueDecrementSpeed = 60;
  // For instance when we need center value of 0 and mines value for left side
  const sliderMinValue = 0;

  // const router = useRouter();
  const sliderCurrentValue = useRef(sliderMinValue);
  const [sliderValue, setSliderValue] = useState(sliderMinValue);
  // const [reqPasswordStorage] = useLocalStorage(
  //   "X2jzse6EECCG5448x5KFqFZ6vVQxST3wM54mU7RK",
  // );
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
    if (sliderValue < sliderMaxValue) {
      // Not unlocked -> set value back to sliderMinValue
      ResetCurrVal();
    } else {
      // Unlocked -> next page
      console.log("Unlocked!!!");
      onUnlock();
      // reqPasswordStorage !== "8pK426ytybYqqZ6YDjva8hJcagMVT7tQgVxrkHcN"
      //   ? setShowCodeInput(true)
      //   : router.push("/dashboard");
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
    if (sliderCurrentValue.current > sliderMinValue) {
      window.requestAnimationFrame(ResetCurrVal);
    }
    // decrement value
    sliderCurrentValue.current =
      sliderCurrentValue.current - sliderValueDecrementSpeed;
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
                min={sliderMinValue}
                max={sliderMaxValue}
                onChange={sliderValueChangeHandler}
                onTouchEnd={CheckUnlocked}
                onMouseUp={CheckUnlocked}
                value={sliderValue}
              />
              <h1
                className={`${styles["slide-text"]} m-auto align-bottom`}
                style={{
                  opacity:
                    (sliderMaxValue - sliderValue / (3 / 5)) / sliderMaxValue,
                }}>
                {/*<ArrowLeft className={"ltr:rotate-180 w-6 h-6"} />*/}
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
