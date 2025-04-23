
import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16"> {/* Space for the fixed navbar */}
        <HeroSection />
        <FeaturesSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
