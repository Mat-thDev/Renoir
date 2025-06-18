"use client";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type RegisterData = {
  username: string,
  email: string,
  password: string,
  repassword: string
}

const AuthRegister = () => {

  const { register, handleSubmit } = useForm<RegisterData>();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");


  const onSubmit = (data: RegisterData) => {
    const { username, email, password, repassword } = data;

    if (password !== repassword) {
      return toast.warn("Senhas não se coincidem.")
    };

    axios.post('/api/auth/register', {
      username: username,
      email: email,
      password: password,
    }).then((response) => {
      const { message } = response.data;

      if (message == "Usuário cadastrado com sucesso!") {
        toast.success("Cadastro realizado! Redirecionando...")
      }
    }).catch((err) => {
      const { message } = err.response.data;

      if (message == "Campos obrigatórios ausentes.") {
        toast.warn("Campos obrigatórios ausentes.")
      }
      if (message == "Email já cadastrado.") {
        toast.error("E-mail já cadastrado.")
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
          Criar Conta
        </h2>

        {/* Usuário */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-md font-medium">
            Usuário
          </label>
          <input
            {...register("username", { required: true })}
            id="username"
            type="text"
            name="username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 rounded-md bg-transparent border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
          />
        </div>

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

        {/* Confirmar Senha */}
        <div className="flex flex-col gap-1">
          <label htmlFor="repassword" className="text-md font-medium">
            Confirmar Senha
          </label>
          <input
            {...register("repassword", { required: true })}
            id="repassword"
            type="password"
            name="repassword"
            autoComplete="new-password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            className="px-4 py-2 rounded-md bg-transparent border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
          />
        </div>

        <div className="w-full cursor-pointer text-right">
          <a href="/auth/login" className="">
            <span className="text-sm">Já possui uma conta? <span className="text-[var(--accent)]">entre aqui!</span></span>
          </a>
        </div>

        {/* Botão Registrar */}
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-[var(--accent)] text-white font-semibold cursor-pointer hover:scale-105 hover:brightness-110 transition-all"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default AuthRegister;
