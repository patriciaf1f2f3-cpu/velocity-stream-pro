import { Play, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Play className="h-8 w-8 text-primary fill-primary" />
              <span className="text-xl font-bold">StreamPremium</span>
            </div>
            <p className="text-muted-foreground">
              Sua plataforma completa de streaming com milhares de filmes, séries e canais ao vivo.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:contato@streampremium.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-5 h-5" />
                <span>contato@streampremium.com</span>
              </a>
            </div>
          </div>

          {/* Links Legais */}
          <div>
            <h3 className="text-lg font-bold mb-4">Informações</h3>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Termos de Uso
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} StreamPremium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
