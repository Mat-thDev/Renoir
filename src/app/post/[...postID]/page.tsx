"use client"

import UserCard from "@/components/User/UserCard";
import { formatDate } from "@/lib/formatDate";
import type { PostResponse } from "@/types";
import axios from "axios";
import { Heart, Instagram } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const PostSingle = () => {

  const [postData, setPostData] = useState<PostResponse | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      await axios.post("/api/post", { postId: 1 })
      .then((res) => { 
        setPostData(res.data.postData);
      })
    }

    fetchPostData();
  }, [])

  if(postData == null) return;

  console.log(postData);

  return (
    <article className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      {/* Cabeçalho do Post */}
      <header className="space-y-4 text-center">
        <nav className="text-sm text-[var(--muted)]">
          Home • Post • <span className="text-[var(--accent)]">{postData.categories[0].name}</span>
        </nav>
        <h1 className="text-4xl font-bold text-[var(--accent)]">
          {postData.title}
        </h1>
        <div className="text-sm text-[var(--muted)] flex flex-wrap justify-center gap-2">
          <span>Por <strong className="text-[var(--foreground)]">{postData.author.username}</strong></span>
          <span>•</span>
          <span>{postData.categories[0].name}</span>
          <span>•</span>
          <span>{formatDate(postData.createdAt)}</span>
        </div>
      </header>

      {/* Imagem em destaque */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
        <Image
          fill
          src={postData.featuredImage ?? "/image.jpg"}
          alt={postData.title ?? null}
          className="object-cover object-center"
        />
      </div>

      {/* Conteúdo principal */}
      <section className="prose max-w-none text-justify text-lg leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quidem alias,
          consequuntur iure nam voluptatibus inventore ducimus ipsum eligendi facere
          voluptatem veniam nisi sapiente in soluta neque necessitatibus asperiores? Ex?
        </p>
      </section>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
        <span className="font-semibold">Tags:</span>
        {postData.tags.map((tag, i) => (
          <span key={tag.id} className="bg-[var(--surface)] px-2 py-1 rounded-md cursor-pointer hover:bg-[var(--accent)] transition-all">{tag.name}</span>
        ))}
      </div>

      {/* Autor */}
      <UserCard image={postData.author.profile.picture} username={postData.author.username} bio={postData.author.profile.bio} />
    </article>
  );
};

export default PostSingle;
