import { DevicePageParamsT } from "@/app/(dashboard)/devices/[deviceType]/[devicePublicId]/layout";
import getDeviceCompleteData from "@/utils/getDeviceCompleteData";
import RelayDevicePageView from "@/components/devicePageView/RelayDevicePageView";

const RelayDevicePage = async ({
  params: { deviceType, devicePublicId },
  searchParams: { zpid },
}: DevicePageParamsT) => {
  const [deviceInfo, deviceRegisters] = await getDeviceCompleteData(
    devicePublicId,
    zpid,
  );

  return <RelayDevicePageView info={deviceInfo} registers={deviceRegisters} />;
};

export default RelayDevicePage;
