import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import ApiResponse from "@/app/api/apiResponse";
import getAuthorizationHeaders from "@/utils/getAuthorizationHeaders";

type paramsType = { params: { api_devicePublicId: string } };

export const GET = async (
  request: NextRequest,
  { params: { api_devicePublicId } }: paramsType,
) => {
  const searchParams = request.nextUrl.searchParams;
  const zonePublicId = searchParams.get("zpid");

  try {
    const url = new URL(
      zonePublicId
        ? `zone/${zonePublicId}/device/${api_devicePublicId}`
        : `device/${api_devicePublicId}`,
      `${process.env.NEXT_CORE_ABSOLUTE_URL}/`,
    );

    const result = (await fetchUrl(url, {
      headers: getAuthorizationHeaders(request.headers),
    })) as ServerSideRegisterInfoT[];
    return NextResponse.json(new ApiResponse(true, result));
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
