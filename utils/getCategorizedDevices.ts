import DeviceInfo, { deviceCategories } from "@/classes/devices/deviceInfo";
import { FunctionComponent } from "react";
import {
  DuctSplit,
  Music,
  Thermometer,
  Relay,
  Switches,
  GradiantIconsPropsT,
} from "@/components/icons/colored";
import { Hood, Curtains } from "@/components/icons/colored";
import { Grip } from "@/components/icons/dashed";

export type DevicesCategoryHeadersT = {
  title: string;
  dataKey: deviceCategories;
  icon: FunctionComponent<GradiantIconsPropsT>;
}[];

const headers: DevicesCategoryHeadersT = [
  { title: "همه دستگاه ها", dataKey: "all", icon: Grip },
  { title: "کلید", dataKey: deviceCategories.switch, icon: Switches },
  { title: "رله", dataKey: deviceCategories.relay, icon: Relay },
  {
    title: "ترموستات",
    dataKey: deviceCategories.thermostat,
    icon: Thermometer,
  },
  { title: "موزیک پلیر", dataKey: deviceCategories.music_player, icon: Music },
  { title: "اسپلیت", dataKey: deviceCategories.split, icon: DuctSplit },
  { title: "هود", dataKey: deviceCategories.hood, icon: Hood },
  { title: "پرده برقی", dataKey: deviceCategories.curtains, icon: Curtains },
];

// const headers: DevicesCategoryHeadersT = Object.keys(deviceCategoryInfo).map(
//   (key) => {
//     const values = deviceCategoryInfo[Number(key)];
//     return { dataKey: key, ...values };
//   },
// );

const getCategorizedDevices = (list: DeviceInfo[] = []) => {
  // Make them global:
  // Create a hashmap
  const categorizedDeviceList: {
    [key: string]: DeviceInfo[];
  } = {};

  // Copy all devices to default category
  categorizedDeviceList["all"] = [...list];

  // Create an empty list of devices for each category
  list.forEach((device) => {
    // Create an empty list for each device category
    categorizedDeviceList[device.category] = [];
  });
  // Add each device to its category.
  list.forEach((device) => {
    // Push each device to its own category
    categorizedDeviceList[device.category].push(device);
  });

  const filteredHeaders = headers.filter((header) => {
    return (
      categorizedDeviceList[header.dataKey] &&
      categorizedDeviceList[header.dataKey].length > 0
    );
  });

  // Headers and categorized devices
  return [filteredHeaders, categorizedDeviceList];
};
export default getCategorizedDevices;
