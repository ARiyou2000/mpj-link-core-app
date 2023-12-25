import { useEffect, useState } from "react";
import Device from "@/classes/devices/device";
import clientSideAuthorizedFetch from "@/utils/clientSideAuthorizedFetch";
import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import getDeviceInstance from "@/utils/getDeviceInstance";

const useDeviceInstance = (
  devicePublicId: string,
  zonePublicId?: string | null,
) => {
  // -------------------- Device and Its Registers Info --------------------
  const deviceInfoURL = new URL(
    `api/devices/${devicePublicId}`,
    `${process.env.NEXT_SELF_ABSOLUTE_URL}/`,
  );
  const deviceRegistersURL = new URL(
    `api/devices/${devicePublicId}/registers`,
    `${process.env.NEXT_SELF_ABSOLUTE_URL}/`,
  );

  if (zonePublicId) {
    deviceInfoURL.searchParams.set("zpid", zonePublicId);
    deviceRegistersURL.searchParams.set("zpid", zonePublicId);
  }

  const [device, setDevice] = useState<Device | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const [deviceInfo, deviceRegisters] = await Promise.all([
          (await clientSideAuthorizedFetch(
            deviceInfoURL,
          )) as ServerSideDeviceInfoT,
          (await clientSideAuthorizedFetch(
            deviceRegistersURL,
          )) as ServerSideRegisterInfoT[],
        ]);

        const device = getDeviceInstance(deviceInfo, deviceRegisters);
        setDevice(device);
      } catch (e) {
        console.error(e);
      }
    };

    getData();
  }, [devicePublicId, zonePublicId]);

  return device;
};

export default useDeviceInstance;
