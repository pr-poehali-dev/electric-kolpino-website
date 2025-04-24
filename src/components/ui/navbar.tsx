
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "./button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black text-white border-b border-zinc-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-3xl font-bold neon-text tracking-wide">
                Электрик Колпино
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+79500308830" className="flex items-center space-x-1 text-white hover:text-primary link-hover">
              <Phone size={18} />
              <span>+7 950 030 88 30</span>
            </a>
            <a href="https://t.me/elektrikkolpino" className="flex items-center space-x-1 text-white hover:text-primary link-hover">
              <MessageCircle size={18} />
              <span>Telegram</span>
            </a>
            <a href="https://wa.me/79500308830" className="flex items-center space-x-1 text-white hover:text-primary link-hover">
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:ml-6 md:space-x-4">
            <Link to="/" className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium link-hover">
              Главная
            </Link>
            <Link to="/services" className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium link-hover">
              Услуги
            </Link>
            <Link to="/partners" className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium link-hover">
              Партнеры
            </Link>
            <Link to="/contact" className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium link-hover">
              Контакты
            </Link>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Открыть меню</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Главная
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Услуги
            </Link>
            <Link
              to="/partners"
              className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Партнеры
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Контакты
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-zinc-800">
            <div className="flex items-center px-5">
              <div className="space-y-3">
                <a href="tel:+79500308830" className="flex items-center space-x-1 text-white hover:text-primary">
                  <Phone size={18} />
                  <span>+7 950 030 88 30</span>
                </a>
                <a href="https://t.me/elektrikkolpino" className="flex items-center space-x-1 text-white hover:text-primary">
                  <MessageCircle size={18} />
                  <span>Telegram</span>
                </a>
                <a href="https://wa.me/79500308830" className="flex items-center space-x-1 text-white hover:text-primary">
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
