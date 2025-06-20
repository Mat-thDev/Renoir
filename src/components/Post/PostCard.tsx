import Image from "next/image";

const PostCard = () => {
  return (
    <div className="w-full max-w-md h-auto mt-6 cursor-pointer group bg-[var(--surface)] border border-[var(--border)] p-4 rounded-xl transition-all hover:scale-[1.01]">

      <div className="relative w-full h-60 rounded-xl overflow-hidden border border-[var(--border)]">
        <Image
          fill
          src="/images.jpg"
          alt="Imagem da notícia Kimetsu no Yaiba"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 space-y-3">
        <h1 className="text-lg font-semibold text-[var(--accent)] leading-tight group-hover:underline">
          Kimetsu no Yaiba recebe novo trailer
        </h1>

        <p className="text-sm text-[var(--muted)] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          possimus temporibus voluptatibus fugit, incidunt ducimus, sunt
          adipisci ab quam numquam reiciendis accusantium rem natus, asperiores
          eaque voluptate fugiat minima nobis!
        </p>

        <div className="flex items-center justify-between text-xs">
          <span className="bg-[var(--accent)] text-white px-3 py-1 rounded-full font-medium">
            18/06/2025
          </span>
          <span className="text-[var(--muted)]">Notícias</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard;