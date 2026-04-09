import { FaJs, FaServer, FaPython, FaDatabase, FaNodeJs, FaAngular, FaJava } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiKotlin, SiAzurepipelines, SiIonic  } from "react-icons/si";
import { GiSpiderWeb } from "react-icons/gi";


interface TechStackProps {
  lang: 'en' | 'es';
}

export function TechStack({ lang }: TechStackProps) {
  const t = {
    en: {
      title: "Tech Stack",
      backend: "Backend",
      webscraping: "WebScraping",
      database: "Database",
      pipelines: "Pipelines",
    },
    es: {
      title: "Tecnologías",
      backend: "Backend",
      webscraping: "Scraping Web",
      database: "Bases de Datos",
      pipelines: "Pipelines",
    }
  }[lang];

  return (
    <div className="border border-green-500/20 p-4 mt-4">
      <h2 className="text-green-500 font-mono mb-4">{t.title}</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <FaServer className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">{t.backend}</span>
        </div>
        <div className="flex flex-col items-center">
          <SiCsharp className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">C#</span>
        </div>
        <div className="flex flex-col items-center">
          <FaJs className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">JS</span>
        </div>
        <div className="flex flex-col items-center">
          <FaPython className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">Python</span>
        </div>
        <div className="flex flex-col items-center">
          <SiKotlin className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">Kotlin</span>
        </div>
        <div className="flex flex-col items-center">
          <GiSpiderWeb className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">{t.webscraping}</span>
        </div>
        <div className="flex flex-col items-center">
          <FaDatabase className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">{t.database}</span>
        </div>
        <div className="flex flex-col items-center">
          <SiAzurepipelines  className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">{t.pipelines}</span>
        </div>
        <div className="flex flex-col items-center">
          <SiIonic className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">Ionic</span>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">NodeJS</span>
        </div>
        <div className="flex flex-col items-center">
          <FaAngular  className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">Angular</span>
        </div>
        <div className="flex flex-col items-center">
          <FaJava className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">Java</span>
        </div>
      </div>
    </div>
  )
}


