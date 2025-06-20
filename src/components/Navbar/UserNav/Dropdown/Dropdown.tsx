"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogIn, LogOut, Notebook, Plus, User } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { authStatus } from "@/storage/atom";
import { useSetAtom } from "jotai";

interface DropdownLinkProps {
  name: string;
  href: string;
  Icon: React.ElementType;
}

const linksWhenLoggedOut: DropdownLinkProps[] = [
  { name: "Entrar", href: "/auth/login", Icon: LogIn },
];

const linksWhenLoggedIn: DropdownLinkProps[] = [
  { name: "Perfil", href: "/profile", Icon: User },
  { name: "Meus Posts", href: "/profile/posts", Icon: Notebook },
  { name: "Novo Post", href: "/profile/posts/new", Icon: Plus },
];

const UserDropdown = ({ isLogged }: { isLogged: boolean }) => {

  return (
    <div className="absolute right-0 mt-2 w-48 bg-[var(--surface)] border border-[var(--border)] rounded-md shadow-lg z-50 animate-fade-in">
      {(isLogged ? linksWhenLoggedIn : linksWhenLoggedOut).map(({ name, href, Icon }, i) => (
        <Link
          key={i}
          href={href}
          className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-[var(--muted)] transition-colors"
        >
          <Icon size={16} />
          {name}
        </Link>
      ))}

      {isLogged && <LogoutButton />}
    </div>
  );
};

const LogoutButton = () => {
  const setAuthStats = useSetAtom(authStatus);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/auth/logout");
      if (res.data.message === "Deslogado com sucesso.") {
        setAuthStats(false);
        toast.success("Deslogado com sucesso.");
        router.push("/auth/login");
      }
    } catch (err) {
      console.error("Erro ao deslogar:", err);
      toast.error("Erro ao deslogar.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-[var(--muted)] transition-colors"
    >
      <LogOut size={16} />
      Sair
    </button>
  );
};

export default UserDropdown;
