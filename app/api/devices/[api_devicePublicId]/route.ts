import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { ServerSideDeviceInfoT } from "@/classes/devices/deviceInfo";
import ApiResponse from "@/app/api/apiResponse";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";

export type paramsType = { params: { api_devicePublicId: string } };

export const GET = async (
  request: NextRequest,
  { params: { api_devicePublicId } }: paramsType,
) => {
  const { searchParams } = new URL(request.url);
  const zonePublicId = searchParams.get("zpid");

  try {
    const url = new URL(`${process.env.NEXT_SELF_ABSOLUTE_URL}/api/devices`);
    zonePublicId && url.searchParams.set("zpid", zonePublicId);

    const list = (await fetchUrl(url, {
      headers: getAuthorizationHeaders(request.headers),
    })) as ServerSideDeviceInfoT[];
    const result = list?.find((item) => {
      return item.publicId === api_devicePublicId;
    });
    return NextResponse.json(new ApiResponse(true, result));
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
