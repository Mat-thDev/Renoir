import Link from "next/link";
import { LogOut, Notebook, Plus, User } from "lucide-react";

const UserDropdownLinks = [
  {
    name: "Perfil",
    Icon: User,
    href: "/profile",
  },
  {
    name: "Meus Posts",
    Icon: Notebook,
    href: "/profile/posts",
  },
  {
    name: "Novo Post",
    Icon: Plus,
    href: "/profile/posts/new",
  },
];

const UserDropdown = () => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-[var(--surface)] border border-[var(--border)] rounded-md shadow-lg z-50 animate-fade-in">
      {UserDropdownLinks.map(({ name, Icon, href }, i) => (
        <Link
          key={i}
          href={href}
          className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-[var(--muted)] transition-colors"
        >
          <Icon size={16} />
          {name}
        </Link>
      ))}
      <button
        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-[var(--muted)] transition-colors"
      >
        <LogOut size={16} />
        Sair
      </button>
    </div>
  );
};

export default UserDropdown;
