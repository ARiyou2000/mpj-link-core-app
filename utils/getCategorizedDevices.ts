import DeviceInfo, { deviceCategories } from "@/classes/devices/deviceInfo";

export type DevicesCategoryHeadersT = {
  title: string;
  dataKey: deviceCategories;
}[];

const headers: DevicesCategoryHeadersT = [
  { title: "کلید", dataKey: deviceCategories.switch },
  { title: "رله", dataKey: deviceCategories.relay },
  { title: "ترموستات", dataKey: deviceCategories.thermostat },
  { title: "موزیک پلیر", dataKey: deviceCategories.music_player },
  { title: "اسپلیت", dataKey: deviceCategories.split },
  { title: "هود", dataKey: deviceCategories.hood },
  { title: "پرده برقی", dataKey: deviceCategories.curtains },
];

const getCategorizedDevices = (list: DeviceInfo[] = []) => {
  // Make them global:
  // Create a hashmap
  const categorizedDeviceList: {
    [key: string]: DeviceInfo[];
  } = {};

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
