import { DevicePageParamsT } from "@/app/(dashboard)/devices/[deviceType]/[devicePublicId]/layout";
import getDeviceCompleteData from "@/utils/getDeviceCompleteData";
import IrHoodDevicePageView from "@/components/devicePageView/IrHoodDevicePageView";

const IrHoodDevicePage = async ({
  params: { deviceType, devicePublicId },
  searchParams: { zpid },
}: DevicePageParamsT) => {
  const [deviceInfo, deviceRegisters] = await getDeviceCompleteData(
    devicePublicId,
    zpid,
  );

  return <IrHoodDevicePageView info={deviceInfo} registers={deviceRegisters} />;
};

export default IrHoodDevicePage;
