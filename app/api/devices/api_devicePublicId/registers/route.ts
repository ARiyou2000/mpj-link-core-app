import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { coreAddress } from "@/utils/getCoreAddress";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";

type paramsType = { params: { api_devicePublicId: string } };

export const GET = async (
  request: NextRequest,
  { params: { api_devicePublicId } }: paramsType,
) => {
  const searchParams = request.nextUrl.searchParams;
  const zonePublicId = searchParams.get("zpid");
  try {
    const result = (await fetchUrl(
      `${coreAddress}${
        zonePublicId ? `/zone/${zonePublicId}` : ""
      }/device/${api_devicePublicId}`,
    )) as ServerSideRegisterInfoT[];
    return NextResponse.json({ result });
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
