import { StrokeColorT } from "@/components/icons/colored";

export type IconsPropsT = {
  className?: string;
};

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: ({
    delay = 0.1,
  }: {
    delay?: number;
  } = {}) => {
    // const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export { default as AUX } from "./AUX";
export { default as Checked } from "./Checked";
export { default as Cloud } from "./Cloud";
export { default as Error } from "./Error";
export { default as Loading } from "./Loading";
export { default as Lock } from "./Lock";
export { default as Minus } from "./Minus";
export { default as MPJLink } from "./MPJLink";
export { default as NextTrack } from "./NextTrack";
export { default as PlayPause } from "./PlayPause";
export { default as Plus } from "./Plus";
export { default as Power } from "./Power";
export { default as PreviousTrack } from "./PreviousTrack";
export { default as SDCard } from "./SDCard";
export { default as ShadersHalfway } from "./ShadersHalfway";
export { default as ShadersOpened } from "./ShadersOpened";
export { default as ShadersClosed } from "./ShadersClosed";
export { default as Snow } from "./Snow";
export { default as Steams } from "./Steams";
