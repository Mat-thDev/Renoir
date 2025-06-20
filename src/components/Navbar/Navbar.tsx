"use client"

import { useAtom } from "jotai";
import { darkMode } from "@/storage/atom";
import { Moon, Sun, UserCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import UserDropdown from "./UserNav/Dropdown/Dropdown";
import useAuthStatus from "@/hooks/useAuthStatus";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [themeDark, setThemeDark] = useAtom(darkMode);
  const isLogged = useAuthStatus();

  if (isLogged === null) return null;

  return (
    <header className="w-full mb-8">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 border-2 border-[var(--border)] rounded-lg">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold hover:text-[var(--accent)] hover:scale-105 transition-transform">
          RENOIR
        </Link>

        {/* Links principais */}
        <ul className="hidden sm:flex items-center space-x-6 text-md">
          <li><Link className="cursor-pointer hover:text-[var(--accent)] hover:scale-105 transition-transform" href="#">Item 1</Link></li>
          <li><Link className="cursor-pointer hover:text-[var(--accent)] hover:scale-105 transition-transform" href="#">Item 2</Link></li>
          <li><Link className="cursor-pointer hover:text-[var(--accent)] hover:scale-105 transition-transform" href="#">Item 3</Link></li>
        </ul>

        {/* Ações do usuário */}
        <div className="flex items-center space-x-4">
          {/* Toggle dark mode */}
          <button
            onClick={() => setThemeDark(!themeDark)}
            className="text-md cursor-pointer hover:text-[var(--accent)] hover:scale-110 transition-all"
            aria-label="Alternar tema"
          >
            {themeDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Avatar / Login */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center"
              aria-haspopup="true"
              aria-expanded={openDropdown}
              aria-label="Abrir menu do usuário"
            >
              {isLogged ? (
                <img
                  src="/images.jpg"
                  alt="Avatar do usuário"
                  className="w-full h-full object-cover"
                />
              ) : (
                <UserCircle className="text-[var(--foreground)] hover:text-[var(--accent)] transition-transform" />
              )}
            </button>

            {openDropdown && (
              <div className="absolute right-0 mt-2 z-50 animate-fade-in">
                <UserDropdown isLogged={isLogged} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
