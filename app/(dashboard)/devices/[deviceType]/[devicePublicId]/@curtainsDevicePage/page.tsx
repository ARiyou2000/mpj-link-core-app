import getDeviceCompleteData from "@/utils/getDeviceCompleteData";
import { DevicePageParamsT } from "@/app/(dashboard)/devices/[deviceType]/[devicePublicId]/layout";
import CurtainsDevicePageView from "@/components/devicePageView/CurtainsPageView";

const CurtainsDevicePage = async ({
  params: { deviceType, devicePublicId },
  searchParams: { zpid },
}: DevicePageParamsT) => {
  const [deviceInfo, deviceRegisters] = await getDeviceCompleteData(
    devicePublicId,
    zpid,
  );

  return (
    <CurtainsDevicePageView info={deviceInfo} registers={deviceRegisters} />
  );
};

export default CurtainsDevicePage;
