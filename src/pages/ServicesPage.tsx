
import Navbar from "@/components/ui/navbar";
import ServicesList from "@/components/ServicesList";
import FooterSection from "@/components/FooterSection";
import { Zap, Shield, Award } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="pt-20"> {/* Space for the fixed navbar */}
        <div className="py-16 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white neon-text mb-4">Наши услуги</h1>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Полный комплекс электромонтажных работ для частных и коммерческих объектов
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <div className="bg-zinc-900/50 p-6 rounded-lg text-center aura-effect">
                <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2 neon-text-sm">Профессиональный подход</h3>
                <p className="text-zinc-400 text-sm">
                  Все работы выполняются сертифицированными специалистами
                </p>
              </div>
              
              <div className="bg-zinc-900/50 p-6 rounded-lg text-center aura-effect">
                <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2 neon-text-sm">Гарантия качества</h3>
                <p className="text-zinc-400 text-sm">
                  Предоставляем гарантию на все выполненные работы
                </p>
              </div>
              
              <div className="bg-zinc-900/50 p-6 rounded-lg text-center aura-effect">
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2 neon-text-sm">Доступные цены</h3>
                <p className="text-zinc-400 text-sm">
                  Оптимальное соотношение цены и качества
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <ServicesList />
        
        <div className="py-16 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-zinc-900/50 rounded-lg p-8 aura-effect">
              <h2 className="text-2xl font-bold text-white neon-text mb-4">Заказать услуги электрика</h2>
              <p className="text-zinc-400 mb-6">
                Свяжитесь с нами любым удобным способом для консультации или вызова электрика в Колпино
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
                
                <a href="https://wa.me/79500308830" className="flex-1">
                  <div className="w-full py-3 px-4 bg-primary/10 text-primary rounded-lg text-center hover:bg-primary/20 transition-colors">
                    WhatsApp
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

export default ServicesPage;
