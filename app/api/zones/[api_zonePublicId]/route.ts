import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { coreAddress } from "@/utils/getCoreAddress";
import { ServerSideZoneT } from "@/classes/zone";

type paramsType = { params: { api_zonePublicId: string } };

export const GET = async (
  request: NextRequest,
  { params: { api_zonePublicId } }: paramsType,
) => {
  try {
    const list = (await fetchUrl(`${coreAddress}/zone`)) as ServerSideZoneT[];
    const result = list?.filter((item) => {
      return item.publicId === api_zonePublicId;
    });
    return NextResponse.json({ result });
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
