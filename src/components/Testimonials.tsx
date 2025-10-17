import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Melhor serviço de streaming que já usei! Qualidade excelente e preço justo.",
      rating: 5,
    },
    {
      name: "João Santos",
      text: "Suporte rápido e eficiente. Não me arrependo de ter assinado!",
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: "Grande variedade de conteúdo. Vale cada centavo!",
      rating: 5,
    },
    {
      name: "Pedro Oliveira",
      text: "Minha família está amando. Cancelei outros serviços mais caros.",
      rating: 5,
    },
    {
      name: "Carla Mendes",
      text: "Simples de usar e funciona perfeitamente em todos os dispositivos.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          O que nossos <span className="text-primary">clientes dizem</span>
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="gradient-card p-6 rounded-lg border border-border h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
