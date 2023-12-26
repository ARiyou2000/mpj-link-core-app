import { DevicePageParamsT } from "../layout";
import getDeviceCompleteData from "@/utils/getDeviceCompleteData";
import ThermostatDevicePageView from "@/components/devicePageView/ThermostatDevicePageView";

const ThermostatDevicePage = async ({
  params: { deviceType, devicePublicId },
  searchParams: { zpid },
}: DevicePageParamsT) => {
  const [deviceInfo, deviceRegisters] = await getDeviceCompleteData(
    devicePublicId,
    zpid,
  );

  return (
    <ThermostatDevicePageView info={deviceInfo} registers={deviceRegisters} />
  );
};

export default ThermostatDevicePage;
