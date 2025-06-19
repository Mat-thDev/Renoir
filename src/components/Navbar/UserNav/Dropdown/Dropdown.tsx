"use client"

import Link from "next/link";
import { LogIn, LogOut, Notebook, Plus, User } from "lucide-react";
import axios from "axios";
import { useAtom } from "jotai";
import { loggedIn } from "@/storage/atom";

const UserDropdown = () => {

  const [userLogged] = useAtom(loggedIn)

  const Element = userLogged ? LoggedDropdown : Dropdown;

  return (
    <Element />
  )
};

const Dropdown = () => {
  const DropdownLinks = [
    {
      name: "Entrar",
      Icon: LogIn,
      href: "/auth/login",
    },
  ];

  return (
    <div className="absolute right-0 mt-2 w-48 bg-[var(--surface)] border border-[var(--border)] rounded-md shadow-lg z-50 animate-fade-in">
      {DropdownLinks.map(({ name, Icon, href }, i) => (
        <Link
          key={i}
          href={href}
          className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-[var(--muted)] transition-colors"
        >
          <Icon size={16} />
          {name}
        </Link>
      ))}
    </div>
  );
}

const LoggedDropdown = () => {

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

  const handleLogout = () => {
    axios.post("/api/auth/logout");
  }

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
        className="w-full cursor-pointer flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-[var(--muted)] transition-colors"
        onClick={() => handleLogout()}
      >
        <LogOut size={16} />
        Sair
      </button>
    </div>
  )
}

export default UserDropdown;
