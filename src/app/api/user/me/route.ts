import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import type { UserPayload } from "@/types";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if(!token) {
    return NextResponse.json({ message: "Token não encontrado" }, { status: 401 });
  }

  try {

    const decoded = await verifyJwt(token) as { payload: UserPayload };

    const foundUser = await prisma.user.findUnique({
      where: { id: decoded.payload.id },
      include: {
        profile: true,
        roles: { include: { permissions: true } },
      },
    });

    if(!foundUser) {
      return NextResponse.json({ message: "Usuário não encontrado" }, { status: 404 });
    }

    const { password, ...user} = foundUser;

    return NextResponse.json({ user: user }, { status: 200 });

  } catch (err) {
    return NextResponse.json({ message: "Token inválido ou expirado." }, { status: 401 });
  }
}