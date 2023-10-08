import Device, { DevicesType } from "@/classes/device";

const devicesTypeTitleWithName = {
  // Read from dictionary letter
  [DevicesType[DevicesType.switch_1P]]: "کلید",
  [DevicesType[DevicesType.switch_2P]]: "کلید",
  [DevicesType[DevicesType.switch_3P]]: "کلید",
  [DevicesType[DevicesType.switch_4P]]: "کلید",
  [DevicesType[DevicesType.switch_6P]]: "کلید",
  [DevicesType[DevicesType.relay]]: "رله",
  [DevicesType[DevicesType.thermostat]]: "ترموستات",
  [DevicesType[DevicesType.musicPlayer]]: "موزیک پلیر",
  [DevicesType[DevicesType.ductSplit]]: "داکت اسپلیت",
  [DevicesType[DevicesType.irSplit]]: "اسپلیت",
  [DevicesType[DevicesType.touchPanel_s8]]: "تاچ پنل",
  [DevicesType[DevicesType.touchPanel_10inch]]: "تاچ پنل",
  [DevicesType[DevicesType.kitchenHook]]: "هود آشپزخانه",
  // [DevicesType[DevicesType.electrical_shaders]]: "پرده برقی",
};

const DevicesTypeList = Object.keys(DevicesType).map((keyIndex) => {
  return {
    id: keyIndex,
    name: DevicesType[keyIndex],
  };
});

const getDeviceName = (type: DevicesType) =>
  devicesTypeTitleWithName[DevicesType[type]];

const headers = [
  { title: "کلید", dataKey: "switch" },
  { title: "رله", dataKey: "relay" },
  { title: "ترموستات", dataKey: "thermostat" },
  { title: "موزیک پلیر", dataKey: "musicPlayer" },
  { title: "داکت اسپلیت", dataKey: "ductSplit" },
  { title: "اسپلیت", dataKey: "irSplit" },
];

const getCategorizedDevices = (list: Device[] = []) => {
  // Make them global:
  // Create a hashmap
  const categorizedDeviceList = {};
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

  //   Headers and categorized devices
  return [filteredHeaders, categorizedDeviceList];
};
export {
  DevicesTypeList,
  devicesTypeTitleWithName,
  getDeviceName,
  getCategorizedDevices,
};
