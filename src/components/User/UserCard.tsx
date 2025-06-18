import { Heart, Instagram } from "lucide-react";
import Image from "next/image";

const UserCard = () => {
  return (
    <section className="pt-8 border-t border-[var(--border)]">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image
              fill
              src="/image.jpg"
              alt="Foto de perfil do autor Misaki"
              className="object-cover"
            />
          </div>
          <h2 className="text-lg font-bold">Misaki</h2>
        </div>
        <div className="flex items-center gap-4 text-[var(--foreground)]">
          <Heart className="cursor-pointer hover:text-[var(--accent)] transition-colors" />
          <Instagram className="cursor-pointer hover:text-[var(--accent)] transition-colors" />
        </div>
      </div>
      <p className="mt-4 text-base text-justify text-[var(--muted)]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatem fuga, quo eveniet dolorem
        itaque commodi illum non reprehenderit dolorum maxime consectetur vel, magnam hic soluta ullam, fugit ipsum at!
      </p>
    </section>
  )
}

export default UserCard;