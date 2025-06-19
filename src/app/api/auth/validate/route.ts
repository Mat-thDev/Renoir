import { verifyJwt } from "@/lib/jwt";
import type { UserPayload } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ loggedIn: false }, { status: 401 });
  }

  const validate = await verifyJwt(token) as { payload: UserPayload };
  if (!validate.payload.id) {
    return NextResponse.json({ loggedIn: false }, { status: 401 });
  }

  return NextResponse.json({ loggedIn: true });
}