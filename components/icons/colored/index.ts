import { IconsPropsT } from "@/components/icons";

export type StrokeColorT = "gradiant" | string;
export type GradiantIconsPropsT = IconsPropsT & {
  strokeColor?: StrokeColorT;
};

export { default as DuctSplit } from "./DuctSplit";
export { default as Hood } from "./Hood";
export { default as Music } from "./Music";
export { default as Curtains } from "./Curtains";
export { default as Switches } from "./Switches";
export { default as Thermometer } from "./Thermometer";
export { default as Relay } from "./Relay";
