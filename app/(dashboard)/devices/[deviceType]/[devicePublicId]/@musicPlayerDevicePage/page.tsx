import { DevicePageParamsT } from "@/app/(dashboard)/devices/[deviceType]/[devicePublicId]/layout";
import getDeviceCompleteData from "@/utils/getDeviceCompleteData";
import MusicPlayerDevicePageView from "@/components/devicePageView/MusicPlayerDevicePageView";

const MusicPlayerDevicePage = async ({
  params: { deviceType, devicePublicId },
  searchParams: { zpid },
}: DevicePageParamsT) => {
  const [deviceInfo, deviceRegisters] = await getDeviceCompleteData(
    devicePublicId,
    zpid,
  );

  return (
    <MusicPlayerDevicePageView info={deviceInfo} registers={deviceRegisters} />
  );
};

export default MusicPlayerDevicePage;
