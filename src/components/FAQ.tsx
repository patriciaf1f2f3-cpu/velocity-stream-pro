import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o pagamento?",
      answer: "Aceitamos pagamentos via PIX e cartão de crédito. O acesso é liberado imediatamente após a confirmação do pagamento.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim! Você pode cancelar sua assinatura quando quiser, sem taxas ou multas. Basta entrar em contato pelo WhatsApp.",
    },
    {
      question: "Em quantos dispositivos posso assistir?",
      answer: "Você pode usar em múltiplos dispositivos: celular, tablet, smart TV, computador e muito mais.",
    },
    {
      question: "Preciso de internet rápida?",
      answer: "Recomendamos uma conexão de no mínimo 10 Mbps para qualidade Full HD. Mas funciona com velocidades menores em qualidade ajustada.",
    },
    {
      question: "Tem conteúdo para crianças?",
      answer: "Sim! Temos uma vasta biblioteca de conteúdo infantil seguro e educativo.",
    },
    {
      question: "Como funciona o suporte?",
      answer: "Nosso suporte funciona via WhatsApp, com atendimento rápido e eficiente para resolver qualquer dúvida.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
