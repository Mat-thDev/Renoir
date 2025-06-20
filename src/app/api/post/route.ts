import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {

  const { postId } = await req.json();

  if(!postId) return NextResponse.json({ message: "ID ausente. "}, { status: 401 });

  const post = await prisma.post.findUnique({
    where: { id: postId },
    include: {
      categories: true,
      tags: true,
      author: {
        select: {
          id: true,
          username: true,
          profile: {
            select: {
              picture: true,
              bio: true,
            }
          }
        }
      }
    }
  });

  if(!post) return NextResponse.json({ message: "Nenhum post encontrado. "}, { status: 404 })
  
  return NextResponse.json({ postData: post }, { status: 201 })
}