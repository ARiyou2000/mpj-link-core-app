import { NextRequest, NextResponse } from "next/server";
import fetchUrl from "@/utils/fetchUrl";
import { coreAdress } from "@/utils/getCoreAddress";

export const POST = async (request: NextRequest) => {
  console.log("---------------catched---------------");
  const body = await request.json();

  try {
    const base64data = Buffer.from(`user:${body?.passcode}`).toString("base64");

    const data = await fetchUrl(`${coreAdress}/login`, {
      headers: { Authorization: `Basic ${base64data}` },
    });

    return NextResponse.json({ data }, { status: 202 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(e);
  }
};
