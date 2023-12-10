import { NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { coreAddress } from "@/utils/getCoreAddress";
import { ServerSideZoneT } from "@/classes/zone";

export const GET = async () => {
  try {
    const result = (await fetchUrl(
      `${coreAddress}/scenario`,
    )) as ServerSideZoneT[];
    return NextResponse.json({ result });
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
