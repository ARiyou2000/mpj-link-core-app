"use server";

import AuthorizedFetch from "@/utils/authorizedFetch";
import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";

const getDeviceCompleteData = async (
  devicePublicId: string,
  zonePublicId?: string,
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

  try {
    const [deviceInfo, deviceRegisters] = await Promise.all([
      (await AuthorizedFetch(deviceInfoURL)) as ServerSideDeviceInfoT,
      (await AuthorizedFetch(deviceRegistersURL)) as ServerSideRegisterInfoT[],
    ]);

    return [deviceInfo, deviceRegisters] as const;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default getDeviceCompleteData;
