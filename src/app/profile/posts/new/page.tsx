"use client";
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ProfileCreatePost = () => {

  const [contentTitle, setContentTitle] = useState("")
  const [content, setContent] = useState<string | undefined>("");
  const [contentCategories, setContentCategories] = useState("");
  const [contentTags, setContentTags] = useState("");
  const [contentSource, setContentSource] = useState("");
  const [contentImage, setContentImage] = useState("");

  const handleNewPost = () => {
    if(!contentTitle || !content) return;

    axios.post("/api/post/new", {
      title: contentTitle,
      content: content,
      category: [parseInt(contentCategories)],
      tags: contentTags.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0),
      source: contentSource,
      image: contentImage
    }, { withCredentials: true })
    .then((res) => {

      const { message } = res.data;
      if(message == "Post criado com sucesso!") toast.success("Post adicionado com sucesso!");

    })
    .catch((err) => {
      const { message } = err.data;

      if(message == "Usuário não autenticado.") toast.error("Usuário não autenticado.");
      if(message == "Token inválido ou expirado.") toast.error("Token inválido ou expirado.");

      if(message == "Você não tem permissão para criar um post.") toast.warn("Você não tem permissão para criar um post.");
      if(message == "Título e conteúdo são obrigatórios.") toast.warn("Título e conteúdo são obrigatórios.");
      
      if(message == "Erro interno do servidor.") toast.error("Erro interno do servidor.");
    })
  }


  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-4 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-center text-[var(--foreground)]">
        Publicar conteúdo
      </h1>

      {/* Titúlo */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-[var(--muted)] mb-1">
          Título
        </label>
        <input
          name="title"
          id="title"
          type="text"
          placeholder="Nóticias Quentíssimas"
          className="w-full p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-sm"
          value={contentTitle}
          onChange={(e) => setContentTitle(e.currentTarget.value)}
        />
      </div>

      {/* Conteúdo do post */}
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-[var(--muted)] mb-1">
          Conteúdo
        </label>
        <MDEditor height={200} value={content} onChange={(v, e) => setContent(v)} />
      </div>

      {/* Categoria */}
      <div>
        <label className="block text-sm font-medium text-[var(--muted)] mb-1">
          Categoria
        </label>
        <select 
          className="w-full p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-sm"
          value={contentCategories}
          onChange={(e) => setContentCategories(e.currentTarget.value)}  
        >
          <option value="">Selecione uma categoria</option>
          <option value="1">Notícia</option>
          <option value="2">Review</option>
          <option value="3">Análise</option>
        </select>
        <p className="text-xs text-[var(--muted)] mt-1">Ou adicione uma nova no futuro!</p>
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-[var(--muted)] mb-1">
          Tags
        </label>
        <input
          type="text"
          name="tags"
          id="tags"
          placeholder="Notícias, Demon Slayer"
          className="w-full p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-sm"
          value={contentTags}
          onChange={(e) => setContentTags(e.currentTarget.value)}
        />
        <p className="text-xs text-[var(--muted)] mt-1">Separe as tags com vírgula</p>
      </div>

      {/* Fonte */}
      <div>
        <label htmlFor="source" className="block text-sm font-medium text-[var(--muted)] mb-1">
          Fonte da informação (opcional)
        </label>
        <input
          name="source"
          id="source"
          type="url"
          placeholder="https://sua-fonte.com"
          className="w-full p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-sm"
          value={contentSource}
          onChange={(e) => setContentSource(e.currentTarget.value)}
        />
      </div>

      {/* Imagem de destaque */}
      <div>
        <label htmlFor="cover" className="block text-sm font-medium text-[var(--muted)] mb-1">
          Imagem de destaque (URL)
        </label>
        <input
          type="url"
          name="cover"
          id="cover"
          placeholder="https://image-url.com"
          className="w-full p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-sm"
          value={contentImage}
          onChange={(e) => setContentImage(e.currentTarget.value)}
        />
      </div>

      {/* Botão de publicar */}
      <div className="text-right">
        <button 
          className="px-6 py-2 rounded-lg bg-[var(--accent)] text-white font-medium hover:brightness-110 transition-all"
          onClick={() => handleNewPost() }
        >
          Publicar
        </button>
      </div>
    </div>
  );
};

export default ProfileCreatePost;
