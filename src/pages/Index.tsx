import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
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
