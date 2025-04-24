
import { MapPin, Zap } from "lucide-react";

const MapSection = () => {
  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white neon-text mb-4">Работаем в Колпино</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Выезжаем по всему Колпино и близлежащим районам в течение часа после вызова
          </p>
        </div>

        <div className="relative w-full h-96 rounded-lg overflow-hidden lightning-effect">
          {/* Placeholder map image - in production would use actual Google Maps or Yandex Maps */}
          <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white neon-text-sm mb-2">Колпино</h3>
              <p className="text-zinc-400 max-w-md mx-auto">
                Здесь будет интерактивная карта с обозначением районов обслуживания
              </p>
              
              <div className="mt-8 flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-white">Быстрый выезд в любой район</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-primary/20 rounded-full animate-pulse"></div>
            </div>
            <svg className="absolute inset-0 w-full h-full">
              <path 
                d="M0,100 Q150,50 300,100 T600,100" 
                fill="none" 
                stroke="rgba(255,0,128,0.5)" 
                strokeWidth="2"
                className="animate-flicker"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
