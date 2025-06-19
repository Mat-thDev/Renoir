import { NextResponse } from "next/server";
import { signJwt } from "@/lib/jwt";
import * as argon2 from "argon2";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ message: "Credenciais Inválidas." }, { status: 401 });
  }

  const valid = await argon2.verify(user.password, password);
  if (!valid) {
    return NextResponse.json({ message: "Credenciais Inválidas." }, { status: 401 });
  }

  const token = await signJwt({ id: user.id, email: user.email });

  const response = NextResponse.json({ message: "Logado com sucesso." });
  response.cookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
