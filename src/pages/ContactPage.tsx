
import Navbar from "@/components/ui/navbar";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import MapSection from "@/components/MapSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="pt-20"> {/* Space for the fixed navbar */}
        <div className="py-16 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white neon-text mb-4">Контакты</h1>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Свяжитесь с нами любым удобным способом для консультации или заказа услуг
              </p>
            </div>
          </div>
        </div>
        
        <ContactSection />
        <MapSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default ContactPage;
