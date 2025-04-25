
import { Zap } from "lucide-react";

const MapSection = () => {
  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white neon-text mb-4">Наше расположение</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Выезжаем на объекты в Колпино и ближайших районах Санкт-Петербурга
          </p>
        </div>
        
        <div className="relative rounded-lg overflow-hidden shadow-xl aura-effect">
          {/* SVG Lightning Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M400,50 L380,150 L420,170 L390,300 L450,250 L430,350"
                stroke="rgba(155, 135, 245, 0.7)"
                strokeWidth="3"
                fill="none"
                className="lightning-path-animation"
              />
              <path 
                d="M350,70 L370,180 L330,250 L380,280 L340,350"
                stroke="rgba(155, 135, 245, 0.5)"
                strokeWidth="2"
                fill="none"
                className="lightning-path-animation delay-200"
              />
              <path 
                d="M450,100 L430,180 L470,220 L440,320"
                stroke="rgba(155, 135, 245, 0.6)"
                strokeWidth="2.5"
                fill="none"
                className="lightning-path-animation delay-300"
              />
            </svg>
          </div>
          
          {/* Interactive Map */}
          <div className="relative z-0 w-full h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29778.63897973922!2d30.571979799999996!3d59.74716419999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696328a4b886fe7%3A0x2ab91450429c3f55!2z0JrQvtC70L_QuNC90L4sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1651161546087!5m2!1sru!2sru"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта Колпино"
              className="filter brightness-75 contrast-125"
            ></iframe>
          </div>
          
          {/* Info Card */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 bg-black/80 backdrop-blur-sm p-4 md:p-5 rounded-lg aura-effect max-w-xs">
            <div className="flex items-start space-x-3">
              <div className="bg-primary/20 p-2 rounded-full flex-shrink-0 mt-1">
                <Zap className="h-5 w-5 text-primary animate-pulse" />
              </div>
              <div>
                <h3 className="text-white font-semibold neon-text-sm mb-1">Электрик Колпино</h3>
                <p className="text-zinc-300 text-sm mb-2">Выезд в любую точку Колпино и окрестностей</p>
                <a 
                  href="tel:+79500308830" 
                  className="text-primary text-sm hover:underline flex items-center space-x-1"
                >
                  <span>+7 950 030 88 30</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
