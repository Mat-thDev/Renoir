import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as argon2 from "argon2";

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    if(!username || !email || !password) {
      return NextResponse.json({ message: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if(userExists) {
      return NextResponse.json({ message: "Email já cadastrado." }, { status: 400 });
    }

    const hashedPassword = await argon2.hash(password);

    const userRole = await prisma.role.findUnique({
      where: { name: "Usuário" }
    })

    if(!userRole) {
      return NextResponse.json({ message: "Role padrão 'usuário' não encontrada." }, { status: 500 })
    }

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        roles: {
          connect: [{ id: userRole.id }],
        },
        profile: {
          create: {
            bio: "",
            banner: "",
            picture: "",
          },
        },
      },
      include: {
        roles: {
          include: {
            permissions: true,
          },
        },
        profile: true,
      },
    });


    const { password: _, ...user } = newUser;

    return NextResponse.json({ message: "Usuário cadastrado com sucesso!", data: user }, { status: 201 });

  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: "Erro interno do servidor." }, { status: 500 })
  }
}