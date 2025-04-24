
import { Phone, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0 opacity-30" 
        style={{ 
          backgroundImage: `url('/placeholder.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      ></div>
      
      <div className="lightning-effect absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text leading-tight">
            Ваш надёжный электрик в Колпино
          </h1>
          
          <p className="text-xl mb-8 text-zinc-300">
            Профессиональные электромонтажные работы любой сложности с гарантией качества
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <a href="tel:+79500308830" className="aura-effect">
              <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 flex items-center space-x-2 animate-pulse-glow">
                <Phone className="h-4 w-4" />
                <span>+7 950 030 88 30</span>
              </Button>
            </a>
            
            <a href="https://t.me/elektrikkolpino" className="aura-effect">
              <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Telegram</span>
              </Button>
            </a>
            
            <a href="https://wa.me/79500308830" className="aura-effect">
              <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </Button>
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            <div className="bg-zinc-900/80 p-4 rounded-lg flex items-center space-x-3 aura-effect">
              <div className="bg-primary/20 p-2 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium neon-text-sm">Быстрый выезд</h3>
                <p className="text-sm text-zinc-400">В течение часа</p>
              </div>
            </div>
            
            <div className="bg-zinc-900/80 p-4 rounded-lg flex items-center space-x-3 aura-effect">
              <div className="bg-primary/20 p-2 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium neon-text-sm">Гарантия качества</h3>
                <p className="text-sm text-zinc-400">На все работы</p>
              </div>
            </div>
            
            <div className="bg-zinc-900/80 p-4 rounded-lg flex items-center space-x-3 aura-effect">
              <div className="bg-primary/20 p-2 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium neon-text-sm">Доступные цены</h3>
                <p className="text-sm text-zinc-400">Без переплат</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
