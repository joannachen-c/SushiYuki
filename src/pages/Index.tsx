import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PromotionsSection from "@/components/PromotionsSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <HeroSection />
      <PromotionsSection />
      <MenuSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;
