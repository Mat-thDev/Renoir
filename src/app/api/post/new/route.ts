import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyJwt } from "@/lib/jwt";
import type { UserPayload } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Usuário não autenticado." }, { status: 401 });
    }

    const validateAuthor = await verifyJwt(token) as { payload: UserPayload };

    if (!validateAuthor || !validateAuthor.payload.id) {
      return NextResponse.json({ message: "Token inválido ou expirado." }, { status: 401 });
    }

    const author = await prisma.user.findUnique({
      where: { id: validateAuthor.payload.id },
      include: {
        roles: {
          include: {
            permissions: true,
          },
        },
      },
    });

    const canPost = author?.roles.some(role =>
      role.permissions.some(permission => permission.name === "create:post")
    );

    if(!canPost) return NextResponse.json({ message: "Você não tem permissão para criar um post." }, { status: 401 });

    const { title, content, category, tags, source, image } = await req.json();

    console.log(req);

    if (!title || !content) {
      return NextResponse.json({ message: "Título e conteúdo são obrigatórios." }, { status: 400 });
    }

    await prisma.post.create({
      data: {
        title,
        content,
        featuredImage: image || null,
        // sourceUrl: source || null,
        status: "REVIEW",
        authorId: validateAuthor.payload.id,
        categories: {
          connect: category.map((id: number) => ({ id })),
        },
        tags: {
          connectOrCreate: tags.map((tagName: string) => ({
            where: { name: tagName },
            create: { name: tagName },
          })),
        },
      },
    });

    return NextResponse.json({ message: "Post criado com sucesso!" }, { status: 201 });
  } catch (err) {
    console.error("Erro ao criar post:", err);
    return NextResponse.json({ message: "Erro interno do servidor." }, { status: 500 });
  }
}
