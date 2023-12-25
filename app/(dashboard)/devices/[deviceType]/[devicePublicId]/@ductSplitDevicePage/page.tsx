import { DevicePageParamsT } from "@/app/(dashboard)/devices/[deviceType]/[devicePublicId]/layout";
import getDeviceCompleteData from "@/utils/getDeviceCompleteData";
import DuctSplitDevicePageView from "@/components/devicePageView/DuctSplitDevicePageView";

const DuctSplitDevicePage = async ({
  params: { deviceType, devicePublicId },
  searchParams: { zpid },
}: DevicePageParamsT) => {
  const [deviceInfo, deviceRegisters] = await getDeviceCompleteData(
    devicePublicId,
    zpid,
  );

  return (
    <DuctSplitDevicePageView info={deviceInfo} registers={deviceRegisters} />
  );
};

export default DuctSplitDevicePage;
