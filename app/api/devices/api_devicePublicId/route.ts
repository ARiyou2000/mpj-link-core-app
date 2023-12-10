import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { coreAddress } from "@/utils/getCoreAddress";
import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";

type paramsType = { params: { api_devicePublicId: string } };

export const GET = async (
  request: NextRequest,
  { params: { api_devicePublicId } }: paramsType,
) => {
  try {
    const list = (await fetchUrl(
      `${coreAddress}/device`,
    )) as ServerSideDeviceInfoT[];
    const result = list?.filter((item) => {
      return item.publicId === api_devicePublicId;
    });
    return NextResponse.json({ result });
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
