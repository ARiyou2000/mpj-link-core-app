import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { coreAddress } from "@/utils/getCoreAddress";
import { ServerSideScenarioT } from "@/classes/scenario";

type paramsType = { params: { api_scenarioPublicId: string } };

export const GET = async (
  request: NextRequest,
  { params: { api_scenarioPublicId } }: paramsType,
) => {
  try {
    const list = (await fetchUrl(
      `${coreAddress}/zone`,
    )) as ServerSideScenarioT[];
    const result = list?.filter((item) => {
      return item.publicId === api_scenarioPublicId;
    });
    return NextResponse.json({ result });
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
