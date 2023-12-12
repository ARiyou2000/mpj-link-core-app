import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";
import ApiResponse from "@/app/api/apiResponse";

type paramsType = {
  params: { api_devicePublicId: string; api_deviceRegisterPublicId: string };
};

export const GET = async (
  request: NextRequest,
  { params: { api_devicePublicId, api_deviceRegisterPublicId } }: paramsType,
) => {
  try {
    const list = (await fetchUrl(
      `${process.env.NEXT_CORE_ABSOLUTE_URL}/device/${api_devicePublicId}`,
    )) as ServerSideRegisterInfoT[];
    const result = list?.find((item) => {
      return item.publicId === api_deviceRegisterPublicId;
    });
    return NextResponse.json(new ApiResponse(true, result));
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
