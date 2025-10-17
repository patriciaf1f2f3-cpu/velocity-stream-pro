import { Tv, Zap, Shield, MessageCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Tv,
      title: "Acesso Ilimitado",
      description: "Filmes, séries e canais ao vivo sem restrições",
    },
    {
      icon: Zap,
      title: "Qualidade Full HD",
      description: "Servidores rápidos e imagem de alta qualidade",
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Sem anúncios e totalmente protegido",
    },
    {
      icon: MessageCircle,
      title: "Suporte WhatsApp",
      description: "Atendimento rápido quando você precisar",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          Por que escolher nosso <span className="text-primary">streaming?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="gradient-card p-6 rounded-lg border border-border hover:border-primary transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
