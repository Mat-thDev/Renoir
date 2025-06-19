import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwt } from "./lib/jwt";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (req.nextUrl.pathname.startsWith("/profile")) {
    if (!token) return NextResponse.redirect(new URL("/auth/login", req.url));

    const payload = await verifyJwt(token);
    if (!payload) return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/auth/")) {
    if(token) return NextResponse.redirect(new URL("/profile", req.url));
  }

  return NextResponse.next();
}
