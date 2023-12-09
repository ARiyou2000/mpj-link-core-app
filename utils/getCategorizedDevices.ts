import DeviceInfo, {
  deviceCategories,
  deviceCategoryInfo,
} from "@/classes/devices/deviceInfo";
import { FunctionComponent } from "react";
import { GradiantIconsPropsT } from "@/components/icons/colored";
import { Grip } from "@/components/icons/dashed";

export type DevicesCategoryHeadersT = {
  title: string;
  dataKey: deviceCategories | "all";
  icon: FunctionComponent<GradiantIconsPropsT>;
};

type DeviceHeaderDataKeyT = DevicesCategoryHeadersT["dataKey"];

// const headers_static: DevicesCategoryHeadersT[] = [
//   { title: "همه دستگاه ها", dataKey: "all", icon: Grip },
//   { title: "کلید", dataKey: deviceCategories.switch, icon: Switches },
//   { title: "رله", dataKey: deviceCategories.relay, icon: Relay },
//   {
//     title: "ترموستات",
//     dataKey: deviceCategories.thermostat,
//     icon: Thermometer,
//   },
//   { title: "موزیک پلیر", dataKey: deviceCategories.music_player, icon: Music },
//   { title: "اسپلیت", dataKey: deviceCategories.split, icon: DuctSplit },
//   { title: "هود", dataKey: deviceCategories.hood, icon: Hood },
//   { title: "پرده برقی", dataKey: deviceCategories.curtains, icon: Curtains },
// ] as const;

const headers: DevicesCategoryHeadersT[] = [
  { title: "همه دستگاه ها", dataKey: "all", icon: Grip },
  ...Object.entries(deviceCategoryInfo).map(([key, { title, icon }]) => {
    return { dataKey: Number(key), title, icon };
  }),
];

const getCategorizedDevices = (list: DeviceInfo[] = []) => {
  // Create a hashmap
  const categorizedDeviceList: {
    [key in DeviceHeaderDataKeyT]?: DeviceInfo[];
  } = { all: [...list] };

  // For each given device (from server) do:
  list.forEach((device) => {
    // Create an empty list for each device category if it didn't exist
    if (!categorizedDeviceList[device.category]) {
      categorizedDeviceList[device.category] = [];
    }

    // Push each device to its own category if the category has initialized
    if (
      !!categorizedDeviceList[device.category] &&
      Array.isArray(categorizedDeviceList[device.category])
    ) {
      categorizedDeviceList[device.category]?.push(device);
    }
  });

  const filteredHeaders = headers.filter((header) => {
    return !!categorizedDeviceList[header.dataKey];
    // categorizedDeviceList[header.dataKey]?.length > 0
  });

  // Headers and categorized devices
  return [filteredHeaders, categorizedDeviceList] as const;
};
export default getCategorizedDevices;
