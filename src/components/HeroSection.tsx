
import { Phone, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0 opacity-30" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      ></div>
      
      {/* Electric lightning overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: `url('/lightning.svg'), linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))`,
          backgroundSize: '120%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'overlay'
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
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-zinc-900/80 p-4 rounded-lg flex items-center space-x-4 aura-effect">
              <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium neon-text-sm text-base">Быстрый выезд</h3>
                <p className="text-sm text-zinc-400 truncate">В течение часа</p>
              </div>
            </div>
            
            <div className="bg-zinc-900/80 p-4 rounded-lg flex items-center space-x-4 aura-effect">
              <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium neon-text-sm text-base">Гарантия качества</h3>
                <p className="text-sm text-zinc-400 truncate">На все работы</p>
              </div>
            </div>
            
            <div className="bg-zinc-900/80 p-4 rounded-lg flex items-center space-x-4 aura-effect">
              <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium neon-text-sm text-base">Доступные цены</h3>
                <p className="text-sm text-zinc-400 truncate">Без переплат</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
