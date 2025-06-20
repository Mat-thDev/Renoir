import { Heart, Instagram } from "lucide-react";
import Image from "next/image";

type UserCardData = {
  image: string | null,
  username: string,
  bio: string | null,
}

const UserCard = ({ image, username, bio }: UserCardData) => {
  return (
    <section className="pt-8 border-t border-[var(--border)]">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image
              fill
              src={image ?? "/images.jpg"}
              alt={`Foto de perfil do autor ${username}`}
              className="object-cover"
            />
          </div>
          <h2 className="text-lg font-bold">{username}</h2>
        </div>
        <div className="flex items-center gap-4 text-[var(--foreground)]">
          <Heart className="cursor-pointer hover:text-[var(--accent)] transition-colors" />
          <Instagram className="cursor-pointer hover:text-[var(--accent)] transition-colors" />
        </div>
      </div>
      <p className="mt-4 text-base text-justify text-[var(--muted)]">
        {bio}
      </p>
    </section>
  )
}

export default UserCard;