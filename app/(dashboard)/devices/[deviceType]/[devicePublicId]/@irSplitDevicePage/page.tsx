import { DevicePageParamsT } from "@/app/(dashboard)/devices/[deviceType]/[devicePublicId]/layout";
import getDeviceCompleteData from "@/utils/getDeviceCompleteData";
import IrSplitDevicePageView from "@/components/devicePageView/IrSplitDevicePageView";

const IrSplitDevicePage = async ({
  params: { deviceType, devicePublicId },
  searchParams: { zpid },
}: DevicePageParamsT) => {
  const [deviceInfo, deviceRegisters] = await getDeviceCompleteData(
    devicePublicId,
    zpid,
  );

  return (
    <IrSplitDevicePageView info={deviceInfo} registers={deviceRegisters} />
  );
};

export default IrSplitDevicePage;
