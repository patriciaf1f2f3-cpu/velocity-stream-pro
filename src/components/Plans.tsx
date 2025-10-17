import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Plano Mensal",
      price: "R$ 34,90",
      period: "/mês",
      discount: "",
      link: "https://pay.cakto.com.br/63fngnf_474367",
      features: [
        "Acesso completo",
        "Qualidade Full HD",
        "Todos os canais",
        "Filmes e séries ilimitados",
        "Suporte 24/7",
      ],
    },
    {
      name: "Plano Trimestral",
      price: "R$ 64,90",
      period: "/3 meses",
      discount: "30% de desconto",
      link: "https://pay.cakto.com.br/sdiwvpd",
      popular: true,
      features: [
        "Acesso completo",
        "Qualidade Full HD",
        "Todos os canais",
        "Filmes e séries ilimitados",
        "Suporte prioritário",
        "Economia de R$ 40",
      ],
    },
    {
      name: "Plano Anual",
      price: "R$ 194,90",
      period: "/ano",
      discount: "55% de desconto",
      link: "https://pay.cakto.com.br/kjbf84t",
      features: [
        "Acesso completo",
        "Qualidade Full HD",
        "Todos os canais",
        "Filmes e séries ilimitados",
        "Suporte VIP",
        "Economia de R$ 225",
      ],
    },
  ];

  return (
    <section id="planos" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Escolha seu <span className="text-primary">plano</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Pague menos, assista mais. Sem taxas escondidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`gradient-card p-8 rounded-xl border-2 transition-smooth animate-fade-in relative ${
                plan.popular
                  ? "border-primary scale-105 shadow-2xl glow-primary"
                  : "border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-hero px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                {plan.discount && (
                  <span className="text-primary text-sm font-semibold">
                    {plan.discount}
                  </span>
                )}
                <div className="mt-4">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="hero"
                className="w-full text-lg py-6"
                asChild
              >
                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  Assinar Agora
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
