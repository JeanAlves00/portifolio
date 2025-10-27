import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white mb-4">Portfolio</h3>
            <p className="text-white/60 text-sm">
              Criando experiências digitais incríveis através de código limpo e design inovador.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Sobre', 'Projetos', 'Habilidades', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg backdrop-blur-sm bg-white/5 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg backdrop-blur-sm bg-white/5 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg backdrop-blur-sm bg-white/5 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-red-400 fill-red-400" /> © 2025 Portfolio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
