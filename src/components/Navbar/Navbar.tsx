"use client"

import { useAtom } from "jotai";
import { darkMode } from "@/storage/atom";
import { LogOut, Moon, Notebook, NotebookPen, Plus, Sun, User, UserCircle, UserIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import UserDropdown from "./UserNav/Dropdown/Dropdown";

const Navbar = () => {

  const [openDropdown, setOpenDropdown] = useState(false);
  const [themeDark, setThemeDark] = useAtom(darkMode);

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center border-2 border-[var(--border)] rounded-lg py-4 px-12">
        <a href="/">
          <h1 className="text-2xl font-bold cursor-pointer hover:text-[var(--accent)] hover:scale-110 transition-all">RENOIR</h1>
        </a>
        <div className="flex space-x-4">
          <a className="text-md cursor-pointer hover:text-[var(--accent)] hover:scale-110 transition-all">Item</a>
          <a className="text-md cursor-pointer hover:text-[var(--accent)] hover:scale-110 transition-all">Item</a>
          <a className="text-md cursor-pointer hover:text-[var(--accent)] hover:scale-110 transition-all">Item</a>
        </div>
        <div className="flex space-x-4">
          {themeDark ?
            <Sun className="text-md cursor-pointer hover:text-[var(--accent)] hover:scale-110 transition-all" onClick={() => { setThemeDark(false) }} />
            :
            <Moon className="text-md cursor-pointer hover:text-[var(--accent)] hover:scale-110 transition-all" onClick={() => { setThemeDark(true) }} />
          }
          <div className="relative">
            <UserCircle
              className="cursor-pointer hover:text-[var(--accent)] hover:scale-110 transition-all"
              onClick={() => setOpenDropdown(!openDropdown)}
            />

            {openDropdown && (
              <UserDropdown />
            )}
          </div>
          {/* <a href="/auth/register">
            <UserCircle className="text-md cursor-pointer hover:text-[var(--accent)] hover:scale-110 transition-all" />
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar;