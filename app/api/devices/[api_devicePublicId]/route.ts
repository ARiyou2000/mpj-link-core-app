import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import ApiResponse from "@/app/api/apiResponse";

type paramsType = { params: { api_devicePublicId: string } };

export const GET = async (
  request: NextRequest,
  { params: { api_devicePublicId } }: paramsType,
) => {
  try {
    const list = (await fetchUrl(
      `${process.env.NEXT_CORE_ABSOLUTE_URL}/device`,
    )) as ServerSideDeviceInfoT[];
    const result = list?.find((item) => {
      return item.publicId === api_devicePublicId;
    });
    return NextResponse.json(new ApiResponse(true, result));
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
