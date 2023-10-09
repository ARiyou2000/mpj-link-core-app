import DeviceInfo from "@/classes/devices/deviceInfo";

type headersType = {
  title: string;
  dataKey: string;
}[];

const headers: headersType = [
  { title: "کلید", dataKey: "switch" },
  { title: "رله", dataKey: "relay" },
  { title: "ترموستات", dataKey: "thermostat" },
  { title: "موزیک پلیر", dataKey: "musicPlayer" },
  { title: "داکت اسپلیت", dataKey: "ductSplit" },
  { title: "اسپلیت", dataKey: "irSplit" },
  { title: "کلید زیگبی", dataKey: "zigbee_switch" },
];

const getCategorizedDevices = (list: DeviceInfo[] = []) => {
  // Make them global:
  // Create a hashmap
  const categorizedDeviceList: {
    [key: string]: DeviceInfo[];
  } = {};
  // Create an empty list of devices for each category
  list.forEach((device) => {
    categorizedDeviceList[device.category] = [];
  });
  // Add each device to its category.
  list.forEach((device) => {
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
