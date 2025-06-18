import Image from "next/image";

const PostCardExtended = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 mt-8 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:shadow-lg cursor-pointer hover:opacity-80 transition-all">

      <div className="relative w-full md:w-80 h-40 rounded-xl overflow-hidden">
        <Image
          fill
          src="/image.jpg"
          alt="Imagem da notícia Kimetsu no Yaiba"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 gap-2">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-[var(--accent)] leading-tight">
            Kimetsu no Yaiba recebe novo trailer
          </h1>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur in commodi magni eaque inventore consectetur facere vel soluta magnam sequi earum reprehenderit, cupiditate natus hic nobis tenetur quia omnis optio?
          </p>
        </div>

        <div className="flex items-center justify-between text-sm mt-2">
          <span className="bg-[var(--accent)] text-white px-3 py-1 rounded-full font-medium">
            18/06/2025
          </span>
          <span className="text-[var(--muted)]">Notícias</span>
        </div>
      </div>
    </div>
  );
};

export default PostCardExtended;
