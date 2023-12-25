import { DevicePageParamsT } from "@/app/(dashboard)/devices/[deviceType]/[devicePublicId]/layout";
import getDeviceCompleteData from "@/utils/getDeviceCompleteData";
import SwitchDevicePageView from "../../../../../../components/devicePageView/SwitchPageView";

const SwitchDevicePage = async ({
  params: { deviceType, devicePublicId },
  searchParams: { zpid },
}: DevicePageParamsT) => {
  const [deviceInfo, deviceRegisters] = await getDeviceCompleteData(
    devicePublicId,
    zpid,
  );

  return <SwitchDevicePageView info={deviceInfo} registers={deviceRegisters} />;
};

export default SwitchDevicePage;
