import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import Categories from "@/components/Categories";
import Benefits from "@/components/Benefits";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      
      {/* Carrossel indo para a direita */}
      <InfiniteCarousel direction="right" />
      
      <Categories />
      
      {/* Carrossel indo para a esquerda */}
      <InfiniteCarousel direction="left" />
      
      <Benefits />
      <Plans />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
