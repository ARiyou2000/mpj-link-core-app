import DeviceInfo, { deviceTypeList } from "@/classes/devices/deviceInfo";

type headersType = {
  title: string;
  dataKey: string;
}[];

const headers: headersType = [
  { title: "کلید", dataKey: deviceTypeList.modbus_switch },
  { title: "رله", dataKey: deviceTypeList.modbus_relay },
  { title: "ترموستات", dataKey: deviceTypeList.modbus_thermostat },
  { title: "موزیک پلیر", dataKey: deviceTypeList.modbus_music_player },
  { title: "داکت اسپلیت", dataKey: deviceTypeList.modbus_duct_split },
  { title: "اسپلیت", dataKey: deviceTypeList.ir_split },
  { title: "هود", dataKey: deviceTypeList.ir_hood },
  { title: "پرده برقی", dataKey: deviceTypeList.modbus_electrical_shaders },
  { title: "کلید زیگبی", dataKey: deviceTypeList.zigbee_switch },
];

const getCategorizedDevices = (list: DeviceInfo[] = []) => {
  // Make them global:
  // Create a hashmap
  const categorizedDeviceList: {
    [key: string]: DeviceInfo[];
  } = {};
  // Create an empty list of devices for each category
  list.forEach((device) => {
    // Create a shared switching with modbus switch
    if (device.category === deviceTypeList.zigbee_switch) {
      categorizedDeviceList[deviceTypeList.modbus_switch] = [];
    } else {
      // Create an empty list for each device category
      categorizedDeviceList[device.category] = [];
    }
  });
  // Add each device to its category.
  list.forEach((device) => {
    // Create a shared switching with modbus switch
    if (device.category === deviceTypeList.zigbee_switch) {
      // Push zigbee switch to shared category with modbus switch
      categorizedDeviceList[deviceTypeList.modbus_switch].push(device);
    } else {
      // Push each device to its own category
      categorizedDeviceList[device.category].push(device);
    }
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
