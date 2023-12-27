import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { ServerSideRegisterInfoT } from "@/classes/devices/register";
import ApiResponse from "@/app/api/apiResponse";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";

export type paramsType = {
  params: { api_devicePublicId: string; api_deviceRegisterPublicId: string };
};

export const GET = async (
  request: NextRequest,
  { params: { api_devicePublicId, api_deviceRegisterPublicId } }: paramsType,
) => {
  const searchParams = request.nextUrl.searchParams;
  const zonePublicId = searchParams.get("zpid");

  try {
    const url = new URL(
      `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/devices/${api_devicePublicId}/registers`,
    );
    zonePublicId && url.searchParams.set("zpid", zonePublicId);

    const list = (await fetchUrl(url, {
      headers: getAuthorizationHeaders(request.headers),
    })) as ServerSideRegisterInfoT[];

    const result = list?.find((item) => {
      return item.publicId === api_deviceRegisterPublicId;
    });
    return NextResponse.json(new ApiResponse(true, result));
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
