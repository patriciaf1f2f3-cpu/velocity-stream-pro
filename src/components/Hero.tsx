import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-streaming.jpg";

const Hero = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planos');
    plansSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Assista filmes, séries e <br />
          <span className="text-primary">TV ao vivo sem limites!</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Tenha acesso ilimitado a conteúdos premium pagando pouco.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-12 py-6 h-auto"
            onClick={scrollToPlans}
          >
            Assinar Agora
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-12 py-6 h-auto border-2"
            asChild
          >
            <a href="https://wa.me/553599562676" target="_blank" rel="noopener noreferrer">
              Testar Grátis
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
