import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { coreAddress } from "@/utils/getCoreAddress";
import { ServerSideRegisterInfoT } from "@/classes/registers/register";

type paramsType = {
  params: { api_devicePublicId: string; api_deviceRegisterPublicId: string };
};

export const GET = async (
  request: NextRequest,
  { params: { api_devicePublicId, api_deviceRegisterPublicId } }: paramsType,
) => {
  try {
    const list = (await fetchUrl(
      `${coreAddress}/device/${api_devicePublicId}`,
    )) as ServerSideRegisterInfoT[];
    const result = list?.filter((item) => {
      return item.publicId === api_deviceRegisterPublicId;
    });
    return NextResponse.json({ result });
  } catch (e) {
    return NextResponse.json(e, { status: e.status || 500 });
  }
};
