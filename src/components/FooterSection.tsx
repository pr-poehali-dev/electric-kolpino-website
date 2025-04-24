
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Zap } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold neon-text flex items-center">
              <Zap className="mr-2 h-6 w-6" />
              Электрик Колпино
            </Link>
            <p className="mt-4 text-zinc-400 max-w-xs">
              Профессиональные электромонтажные работы в Колпино и ближайших районах. Работаем быстро, качественно и с гарантией.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://t.me/elektrikkolpino" 
                className="text-zinc-400 hover:text-primary"
                aria-label="Telegram"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/79500308830" 
                className="text-zinc-400 hover:text-primary"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="tel:+79500308830" 
                className="text-zinc-400 hover:text-primary"
                aria-label="Телефон"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-4 border-b border-zinc-800 pb-2">Навигация</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-primary transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-400 hover:text-primary transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="/partners" className="text-zinc-400 hover:text-primary transition-colors">Партнеры</Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-primary transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-4 border-b border-zinc-800 pb-2">Контакты</h2>
            <ul className="space-y-3">
              <li className="flex">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span className="text-zinc-400">+7 950 030 88 30</span>
              </li>
              <li className="flex">
                <MessageCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-zinc-400">t.me/elektrikkolpino</span>
              </li>
              <li className="flex">
                <MessageCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-zinc-400">WhatsApp</span>
              </li>
              <li className="flex">
                <MessageCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-zinc-400">t.me/elektrikvkolpino</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Электрик Колпино. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
