import { NextRequest, NextResponse } from "next/server";
import serverSideFetchUrl from "@/utils/serverSideFetchUrl";
import { coreAdress } from "@/utils/getCoreAddress";

export const POST = async (request: NextRequest) => {
  console.log("---------------catched---------------");
  const body = await request.json();

  const base64data = Buffer.from(`user:${body?.passcode}`).toString("base64");

  const data = await serverSideFetchUrl(`${coreAdress}/login`, {
    headers: { Authorization: `Basic ${base64data}` },
  });
  console.log("data", data);
  return new NextResponse(JSON.stringify(data));
};
