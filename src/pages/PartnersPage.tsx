
import Navbar from "@/components/ui/navbar";
import PartnersLinks from "@/components/PartnersLinks";
import FooterSection from "@/components/FooterSection";

const PartnersPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="pt-20"> {/* Space for the fixed navbar */}
        <div className="py-16 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white neon-text mb-4">Наши партнеры и ресурсы</h1>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Полезные ссылки на дополнительные ресурсы и партнерские сайты
              </p>
            </div>
          </div>
        </div>
        
        <PartnersLinks />
        
        <div className="py-16 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-zinc-900/50 rounded-lg p-8 aura-effect">
              <h2 className="text-2xl font-bold text-white neon-text mb-4">Предложить сотрудничество</h2>
              <p className="text-zinc-400 mb-6">
                Если вы хотите стать нашим партнером или разместить информацию о вашем сайте, свяжитесь с нами
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                <a href="tel:+79500308830" className="flex-1">
                  <div className="w-full py-3 px-4 bg-primary/10 text-primary rounded-lg text-center hover:bg-primary/20 transition-colors">
                    +7 950 030 88 30
                  </div>
                </a>
                
                <a href="https://t.me/elektrikkolpino" className="flex-1">
                  <div className="w-full py-3 px-4 bg-primary/10 text-primary rounded-lg text-center hover:bg-primary/20 transition-colors">
                    Telegram
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default PartnersPage;
