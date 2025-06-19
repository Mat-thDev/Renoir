"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Instagram, Twitter, Github } from "lucide-react";
import axios from "axios";
import type { User, UserResponse } from "@/types";


const UserProfile = () => {
  const [profileData, setProfileData] = useState<UserResponse | null>(null)
  const [activeTab, setActiveTab] = useState<"about" | "posts" | "favorites">("about");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("/api/user/me", {
          withCredentials: true
        })
        setProfileData(res.data as UserResponse)
      } catch (err) {
        console.error("Erro ao buscar usuário:", err)
      }
    }

    fetchUserData()
  }, [])

  if (!profileData) return;

  return (
    <div className="w-full">

      <div className="relative w-full h-[200px] bg-[var(--muted)] rounded-xl overflow-hidden">
        <img
          src={profileData?.user.profile.banner ?? "/images.jpg"}
          alt="Banner do perfil"
          className="object-cover object-center w-full h-full"
        />

      </div>

      <div className="relative flex flex-col items-center -mt-16 px-4">
        <div className="relative w-32 h-32 border-4 border-[var(--surface)] rounded-full overflow-hidden bg-[var(--border)]">
          <img
            src={profileData?.user.profile.picture ?? "/images.jpg"}
            alt={profileData.user.username}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <h1 className="mt-4 text-3xl font-bold text-[var(--foreground)]">{profileData?.user.username}</h1>
      </div>


      <div className="mt-8 flex justify-center space-x-4 border-b border-[var(--border)]">
        <button
          className={`pb-2 px-4 cursor-pointer font-medium ${activeTab === "about" ? "text-[var(--accent)] border-b-2 border-[var(--accent)]" : "text-[var(--muted)]"}`}
          onClick={() => setActiveTab("about")}
        >
          Sobre
        </button>
        <button
          className={`pb-2 px-4 cursor-pointer font-medium ${activeTab === "posts" ? "text-[var(--accent)] border-b-2 border-[var(--accent)]" : "text-[var(--muted)]"}`}
          onClick={() => setActiveTab("posts")}
        >
          Minhas Postagens
        </button>
        <button
          className={`pb-2 px-4 cursor-pointer font-medium ${activeTab === "favorites" ? "text-[var(--accent)] border-b-2 border-[var(--accent)]" : "text-[var(--muted)]"}`}
          onClick={() => setActiveTab("favorites")}
        >
          Favoritos
        </button>
      </div>

      <div className="mt-6 px-4 max-w-2xl mx-auto">
        {activeTab === "about" && (
          <>
            <p className="text-[var(--muted)] text-center">{profileData?.user.profile.bio}</p>
            <div className="flex items-center justify-center space-x-6 mt-4 text-[var(--accent)]">
              {/* <a href={user.socials.twitter} target="_blank" rel="noopener noreferrer"><Twitter /></a>
              <a href={user.socials.instagram} target="_blank" rel="noopener noreferrer"><Instagram /></a>
              <a href={user.socials.github} target="_blank" rel="noopener noreferrer"><Github /></a> */}
            </div>
          </>
        )}

        {activeTab === "posts" && (
          <ul className="space-y-4">
            {/* {user.posts.map((post) => (
              <li key={post.id} className="border border-[var(--border)] p-4 rounded-lg">
                <h2 className="font-semibold text-[var(--foreground)]">{post.title}</h2>
                <span className="text-sm text-[var(--muted)]">{post.date}</span>
              </li>
            ))}
            {user.posts.length === 0 && <p>Você ainda não criou nenhuma postagem.</p>} */}
          </ul>
        )}

        {activeTab === "favorites" && (
          <ul className="space-y-4">
            {/* {user.favorites.map((post) => (
              <li key={post.id} className="border border-[var(--border)] p-4 rounded-lg">
                <h2 className="font-semibold text-[var(--foreground)]">{post.title}</h2>
                <span className="text-sm text-[var(--muted)]">{post.date}</span>
              </li>
            ))}
            {user.favorites.length === 0 && <p>Você ainda não favoritou nenhuma postagem.</p>} */}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserProfile;