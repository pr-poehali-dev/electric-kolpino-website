
import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/HeroSection";
import ServicesList from "@/components/ServicesList";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="pt-20"> {/* Space for the fixed navbar */}
        <HeroSection />
        <ServicesList />
        <MapSection />
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
