
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link to="/" className="text-base text-gray-300 hover:text-white">
              Главная
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/services" className="text-base text-gray-300 hover:text-white">
              Услуги
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/about" className="text-base text-gray-300 hover:text-white">
              О нас
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/contact" className="text-base text-gray-300 hover:text-white">
              Контакты
            </Link>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Telegram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.293c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.308.222-.467.222l.18-2.613 4.76-4.283c.307-.307-.065-.466-.47-.177l-5.882 3.71-2.536-.794c-.55-.172-.56-.548.127-.812l9.918-3.826c.45-.18.863.098.87.588z" />
            </svg>
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">© 2023 Космос. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
