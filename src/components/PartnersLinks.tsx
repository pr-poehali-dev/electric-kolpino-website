
import { ExternalLink } from "lucide-react";

const partnerLinks = [
  { id: 1, name: "elektrikkolpino.bos.ru", url: "https://elektrikkolpino.bos.ru" },
  { id: 2, name: "elektrikikolpino.vov.ru", url: "https://elektrikikolpino.vov.ru" },
  { id: 3, name: "kolpino.bos.ru", url: "https://kolpino.bos.ru" },
  { id: 4, name: "elektrik-kolpino.narod.ru", url: "https://elektrik-kolpino.narod.ru" },
  { id: 5, name: "anime-electrics-project.poehali.dev", url: "https://anime-electrics-project.poehali.dev" },
  { id: 6, name: "colpino-electric-service.poehali.dev", url: "https://colpino-electric-service.poehali.dev" },
  { id: 7, name: "electric-service-kolpino.poehali.dev", url: "https://electric-service-kolpino.poehali.dev" },
  { id: 8, name: "elektrik-kolpino-site.poehali.dev", url: "https://elektrik-kolpino-site.poehali.dev" },
  { id: 9, name: "elektrik-sait-video.poehali.dev", url: "https://elektrik-sait-video.poehali.dev" },
  { id: 10, name: "elektromontazh-sait.poehali.dev", url: "https://elektromontazh-sait.poehali.dev" },
  { id: 11, name: "kolpino-electric-initiative.poehali.dev", url: "https://kolpino-electric-initiative.poehali.dev" },
  { id: 12, name: "kolpino-electric-site.poehali.dev", url: "https://kolpino-electric-site.poehali.dev" },
  { id: 13, name: "kolpino-electric-site-1.poehali.dev", url: "https://kolpino-electric-site-1.poehali.dev" },
  { id: 14, name: "kolpino-electric-website.poehali.dev", url: "https://kolpino-electric-website.poehali.dev" },
  { id: 15, name: "kolpino-electrical-website.poehali.dev", url: "https://kolpino-electrical-website.poehali.dev" },
  { id: 16, name: "kolpino-lightning-site.poehali.dev", url: "https://kolpino-lightning-site.poehali.dev" },
  { id: 17, name: "minimal-electric-site.poehali.dev", url: "https://minimal-electric-site.poehali.dev" },
  { id: 18, name: "neon-electric-site.poehali.dev", url: "https://neon-electric-site.poehali.dev" },
  { id: 19, name: "website-replication-project.poehali.dev", url: "https://website-replication-project.poehali.dev" },
  { id: 20, name: "elektrik-kolpino.renderforestsites.com", url: "https://elektrik-kolpino.renderforestsites.com" },
  { id: 21, name: "elektrikkolpino.renderforestsites.com", url: "https://elektrikkolpino.renderforestsites.com" },
  { id: 22, name: "elektrik-kolpino.tilda.ws", url: "https://elektrik-kolpino.tilda.ws" },
];

const PartnersLinks = () => {
  return (
    <div className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white neon-text mb-4">Наши ресурсы</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Список сайтов и электронных ресурсов Электрик Колпино
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partnerLinks.map((link) => (
            <a 
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-zinc-900/60 text-white px-4 py-3 rounded-lg hover:bg-zinc-800 transition-all duration-300 group aura-effect"
            >
              <span className="truncate text-sm">{link.name}</span>
              <ExternalLink className="h-4 w-4 text-zinc-500 group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersLinks;
