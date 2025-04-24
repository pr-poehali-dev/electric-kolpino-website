
import { Phone, MessageCircle, Mail, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white neon-text mb-4">Контакты</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 rounded-lg p-8 aura-effect">
            <h3 className="text-xl font-medium text-white mb-6 neon-text-sm">Наши контакты</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h4 className="text-white font-medium">Телефон</h4>
                  <a href="tel:+79500308830" className="text-zinc-400 hover:text-primary transition-colors">
                    +7 950 030 88 30
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h4 className="text-white font-medium">Telegram</h4>
                  <a href="https://t.me/elektrikkolpino" className="text-zinc-400 hover:text-primary transition-colors flex items-center">
                    t.me/elektrikkolpino
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h4 className="text-white font-medium">WhatsApp</h4>
                  <a href="https://wa.me/79500308830" className="text-zinc-400 hover:text-primary transition-colors flex items-center">
                    +7 950 030 88 30
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h4 className="text-white font-medium">Telegram канал</h4>
                  <a href="https://t.me/elektrikvkolpino" className="text-zinc-400 hover:text-primary transition-colors flex items-center">
                    t.me/elektrikvkolpino
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h4 className="text-white font-medium">Район обслуживания</h4>
                  <p className="text-zinc-400">
                    Колпино и ближайшие районы
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900/50 rounded-lg p-8 aura-effect flex flex-col">
            <h3 className="text-xl font-medium text-white mb-6 neon-text-sm">Быстрая связь</h3>
            
            <p className="text-zinc-400 mb-8">
              Нужна помощь электрика? Свяжитесь с нами прямо сейчас, и мы оперативно приедем для решения вашей проблемы!
            </p>
            
            <div className="space-y-4 mt-auto">
              <a href="tel:+79500308830" className="w-full">
                <Button className="w-full bg-primary text-white hover:bg-primary/90 animate-pulse-glow">
                  Позвонить сейчас
                </Button>
              </a>
              
              <div className="flex space-x-4">
                <a href="https://t.me/elektrikkolpino" className="flex-1">
                  <Button variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800">
                    Telegram
                  </Button>
                </a>
                
                <a href="https://wa.me/79500308830" className="flex-1">
                  <Button variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800">
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
