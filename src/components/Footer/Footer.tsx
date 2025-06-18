import { Facebook, Instagram, TwitterIcon } from "lucide-react";


const Footer = () => {
  return (
    <div className="w-full h-auto border-t border-[var(--border)] mt-8 pt-12">
      <div className="flex flex-col justify-center items-center align-middle space-y-8">
        <div className="flex items-center space-x-4">
          <Facebook className="cursor-pointer hover:scale-110 hover:text-[var(--accent)] transition-all" />
          <TwitterIcon className="cursor-pointer hover:scale-110 hover:text-[var(--accent)] transition-all" />
          <Instagram className="cursor-pointer hover:scale-110 hover:text-[var(--accent)] transition-all" />
        </div>
        <div>
          <h1 className="cursor-pointer text-4xl font-bold hover:scale-110 hover:text-[var(--accent)] transition-all">RENOIR</h1>
        </div>
        <div className="space-x-4">
          <span className="cursor-pointer text-md font-bold hover:scale-110 hover:text-[var(--accent)] transition-all">Contato</span>
          <span>•</span>
          <span className="cursor-pointer text-md font-bold hover:scale-110 hover:text-[var(--accent)] transition-all">Política de Privacidade</span>
          <span>•</span>
          <span className="cursor-pointer text-md font-bold hover:scale-110 hover:text-[var(--accent)] transition-all">Termos de Uso</span>
          <span>•</span>
          <span className="cursor-pointer text-md font-bold hover:scale-110 hover:text-[var(--accent)] transition-all">Quem somos</span>
        </div>
        <div>
          <p>© 2025 Renoir, Todas as imagens nesse site pertence aos seus respectivos proprietários.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;