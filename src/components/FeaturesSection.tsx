
import { Rocket, Code, BarChart } from "lucide-react";

const features = [
  {
    name: "Быстрая разработка",
    description:
      "Мы создаем сайты в кратчайшие сроки без потери качества. Используем современные технологии и подходы.",
    icon: Rocket,
  },
  {
    name: "Чистый код",
    description:
      "Наш код оптимизирован, структурирован и легко поддерживаемый. Мы следуем лучшим практикам веб-разработки.",
    icon: Code,
  },
  {
    name: "SEO-оптимизация",
    description:
      "Все сайты оптимизированы для поисковых систем. Это помогает вашему бизнесу быть найденным клиентами.",
    icon: BarChart,
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Преимущества</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Лучшее решение для вашего бизнеса
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Мы предлагаем комплексный подход к разработке веб-проектов, обеспечивая высокое качество и поддержку на всех этапах.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
