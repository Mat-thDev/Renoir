"use client"

import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { redirect } from 'next/navigation'
import { authStatus } from "@/storage/atom";
import { useSetAtom } from "jotai";

type LoginData = {
  email: string
  password: string
}

const AuthLogin = () => {

  const { register, handleSubmit } = useForm<LoginData>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setAuthStats = useSetAtom(authStatus);

  const onSubmit = (data: LoginData) => {
    const { email, password } = data;

    if (!email || !password) return;

    axios.post('/api/auth/login', {
      email: email,
      password: password,
    }).then((response) => {
      toast.success("Logado com sucesso! Redirecionando...")
      setAuthStats(true);
      setTimeout(() => {
        redirect("/profile")
      }, 1000)
    }).catch((err) => {
      const { message } = err.response.data;

      if (message == "Campos obrigatórios ausentes.") {
        toast.warn("Campos obrigatórios ausentes.")
      }
      if (message == "Credenciais Inválidas.") {
        toast.error("E-mail ou senha incorretos.")
      }
    })

  }

  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-10 md:p-12 bg-[var(--surface)] rounded-2xl shadow-md border border-[var(--border)] space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-[var(--accent)]">
          Entrar
        </h2>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-md font-medium">
            E-mail
          </label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-md bg-transparent border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
          />
        </div>

        {/* Senha */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-md font-medium">
            Senha
          </label>
          <input
            {...register("password", { required: true })}
            id="password"
            type="password"
            name="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-md bg-transparent border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
          />
        </div>

        <div className="w-full cursor-pointer text-right">
          <a href="/auth/register" className="">
            <span className="text-sm">Não possui uma conta? <span className="text-[var(--accent)]">registre aqui!</span></span>
          </a>
        </div>

        {/* Botão Entrar */}
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-[var(--accent)] text-white font-semibold cursor-pointer hover:scale-105 hover:brightness-110 transition-all"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default AuthLogin;