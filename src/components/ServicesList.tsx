
import { Lightbulb, Wrench, Cable, HomeIcon, BriefcaseIcon, FlaskConical } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "Электромонтажные работы в квартире",
    description: "Монтаж проводки, установка выключателей и розеток, замена электрощитов",
    icon: <HomeIcon className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    title: "Электромонтаж в частном доме",
    description: "Полный комплекс электромонтажных работ от проекта до сдачи объекта",
    icon: <HomeIcon className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    title: "Коммерческие объекты",
    description: "Электромонтаж в офисах, магазинах, на предприятиях",
    icon: <BriefcaseIcon className="h-10 w-10 text-primary" />,
  },
  {
    id: 4,
    title: "Устранение неисправностей",
    description: "Поиск и устранение короткого замыкания, неисправностей в электропроводке",
    icon: <Wrench className="h-10 w-10 text-primary" />,
  },
  {
    id: 5,
    title: "Замена и модернизация",
    description: "Замена старой электропроводки, модернизация электрощитов",
    icon: <Cable className="h-10 w-10 text-primary" />,
  },
  {
    id: 6,
    title: "Установка светильников",
    description: "Монтаж люстр, светильников, настройка систем освещения",
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
  },
  {
    id: 7,
    title: "Диагностика электросети",
    description: "Комплексная проверка состояния электропроводки, поиск проблем",
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
  },
  {
    id: 8,
    title: "Аварийные вызовы",
    description: "Срочный выезд при аварийных ситуациях в электросети",
    icon: <Wrench className="h-10 w-10 text-primary" />,
  },
];

const ServicesList = () => {
  return (
    <div className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white neon-text mb-4">Наши услуги</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Выполняем полный спектр электромонтажных работ в Колпино и окрестностях 
            с гарантией качества и по доступным ценам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id}
              className="bg-zinc-900 border-zinc-800 text-white p-6 hover:bg-zinc-800 transition-all duration-300 aura-effect"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium mb-2 neon-text-sm">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
