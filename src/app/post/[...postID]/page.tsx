import UserCard from "@/components/User/UserCard";
import { Heart, Instagram } from "lucide-react";
import Image from "next/image";

const PostSingle = () => {
  return (
    <article className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      {/* Cabeçalho do Post */}
      <header className="space-y-4 text-center">
        <nav className="text-sm text-[var(--muted)]">
          Home • Post • <span className="text-[var(--accent)]">Notícia</span>
        </nav>
        <h1 className="text-4xl font-bold text-[var(--accent)]">
          Kimetsu no Yaiba recebe novo trailer
        </h1>
        <div className="text-sm text-[var(--muted)] flex flex-wrap justify-center gap-2">
          <span>Por <strong className="text-[var(--foreground)]">Misaki</strong></span>
          <span>•</span>
          <span>Notícias</span>
          <span>•</span>
          <span>18/06/2025</span>
        </div>
      </header>

      {/* Imagem em destaque */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
        <Image
          fill
          src="/image.jpg"
          alt="Imagem de destaque da notícia"
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
        <span className="bg-[var(--surface)] px-2 py-1 rounded-md cursor-pointer hover:bg-[var(--accent)] transition-all">Notícias</span>
        <span className="bg-[var(--surface)] px-2 py-1 rounded-md cursor-pointer hover:bg-[var(--accent)] transition-all">Kimetsu no Yaiba</span>
      </div>

      {/* Autor */}
      <UserCard />
    </article>
  );
};

export default PostSingle;
