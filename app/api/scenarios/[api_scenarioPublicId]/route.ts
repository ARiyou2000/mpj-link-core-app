import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { ServerSideScenarioT } from "@/classes/scenario";
import ApiResponse from "@/app/api/apiResponse";

type paramsType = { params: { api_scenarioPublicId: string } };

export const GET = async (
  request: NextRequest,
  { params: { api_scenarioPublicId } }: paramsType,
) => {
  try {
    const list = (await fetchUrl(
      `${process.env.NEXT_CORE_ABSOLUTE_URL}/zone`,
    )) as ServerSideScenarioT[];
    const result = list?.find((item) => {
      return item.publicId === api_scenarioPublicId;
    });
    return NextResponse.json(new ApiResponse(true, result));
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
