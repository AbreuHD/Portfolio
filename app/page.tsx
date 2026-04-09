"use client"

import { useState, useEffect } from "react"
import { ScanLines } from "@/components/scan-lines"
import { AsciiIcon } from "@/components/ascii-icon"
import { TechStack } from "@/components/tech-stack"
import { Terminal, Github, Linkedin, Mail, Gamepad2, Popcorn, Tv, BookOpen, Code, Languages } from 'lucide-react'
import { SiVisualstudio, SiPlesk, SiMysql, SiLinux, SiVisualstudiocode, SiAndroidstudio, SiJenkins, SiPostman, SiMicrosoftsqlserver, SiDocker, SiGithub, SiWindows } from "react-icons/si";

import { useTypingEffect } from "@/hooks/useTypingEffect"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import dynamic from 'next/dynamic'

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), {
  loading: () => <div className="p-8 text-center text-green-500 font-mono animate-pulse">Loading Document...</div>,
  ssr: false // Keep PDF rendering client-side only
})

const SpaceInvaders = dynamic(() => import("@/components/SpaceInvaders").then(mod => mod.SpaceInvaders), {
  loading: () => <div className="p-8 text-center text-green-500 font-mono animate-pulse">INITIALIZING MISSION...</div>,
  ssr: false // AudioContext and Canvas require client-side
})

type Language = 'en' | 'es';

const translations = {
  en: {
    subtitles: [
      "Backend Developer",
      "System Architect",
      "API Designer",
      "Database Expert",
      "Cloud Engineer",
      "Anime Enthusiast"
    ],
    animePhrases: [
      "The world is not as good as it should be, but there are still people who do everything they can to make it better. ~ Monkey D. Luffy",
      "I am not a hero because I want to be, I am a hero because I am the only one who can do it. ~ Monkey D. Luffy",
      "Life is like the sea, and hope is the wind. ~ Trafalgar D. Water Law",
      "A man cannot change his destiny, but he can change his destiny for another. ~ Edward Elric",
      "A lie is a lie, even if you say it with good intentions. ~ Roy Mustang",
      "He who does not sacrifice for others cannot expect others to sacrifice for him. ~ Izumi Curtis",
      "In this world, there is no such thing as 'I can't.' There is only 'I haven't done it yet.' ~ Asuna",
      "People don't die when they stop breathing, they die when they stop believing. ~ Suguha Kirigaya",
      "Even though time and distance may separate us, I will always be with you. ~ Taki Tachibana",
      "Time doesn't heal everything. But it’s all we have. ~ Mitsuha Miyamizu",
    ],
    about: {
      title: "ABOUT",
      text: "Hello! I am a dedicated software developer with expertise in backend development using technologies like C#, .NET, and Python, alongside experience in frontend frameworks such as Angular. I specialize in web scraping techniques and implement Swagger, Identity, and SOLID principles in my projects. My skills extend to building efficient .NET libraries, developing Windows Forms apps, and integrating features like Discord Rich Presence. My passion lies in creating scalable, efficient solutions while continuously enhancing my technical expertise.",
      anime_time: "Anime Time!"
    },
    projects: {
      title: "PROJECTS",
      view_project: "View Project"
    },
    workstation: {
      title: "WORKSTATION",
      intro: "My development environment is carefully crafted for maximum productivity:",
      footer: "Every day learning more to keep adding!"
    },
    hobbies: {
      title: "HOBBIES",
      intro: "When not coding, I enjoy:",
      items: {
        open_source: "Open Source",
        learning: "Learning",
        side_projects: "Side Projects",
        watch_anime: "Watch Anime",
        video_games: "Video Games",
        movies: "Movies and series"
      }
    },
    resume: {
      title: "RESUME",
      cv_file: "/Jefferson Abreu Martinez - Cv (english Version).pdf",
      cv_download: "/Jefferson Abreu Martinez - Cv (english Version).pdf"
    },
    game: {
      title: "GAME"
    }
  },
  es: {
    subtitles: [
      "Desarrollador Backend",
      "Arquitecto de Sistemas",
      "Diseñador de APIs",
      "Experto en Bases de Datos",
      "Ingeniero Cloud",
      "Entusiasta del Anime"
    ],
    animePhrases: [
      "El mundo no es tan bueno como debería ser, pero todavía hay personas que hacen todo lo posible para mejorarlo. ~ Monkey D. Luffy",
      "No soy un héroe porque quiera serlo, soy un héroe porque soy el único que puede hacerlo. ~ Monkey D. Luffy",
      "La vida es como el mar, y la esperanza es el viento. ~ Trafalgar D. Water Law",
      "Un hombre no puede cambiar su destino, pero puede cambiar su destino por el de otro. ~ Edward Elric",
      "Una mentira es una mentira, incluso si la dices con buenas intenciones. ~ Roy Mustang",
      "El que no sacrifica por los demás no puede esperar que los demás se sacrifiquen por él. ~ Izumi Curtis",
      "En este mundo, no existe el 'no puedo'. Solo existe el 'aún no lo he hecho'. ~ Asuna",
      "Las personas no mueren cuando dejan de respirar, mueren cuando dejan de creer. ~ Suguha Kirigaya",
      "Aunque el tiempo y la distancia nos separen, siempre estaré contigo. ~ Taki Tachibana",
      "El tiempo no lo cura todo. Pero es todo lo que tenemos. ~ Mitsuha Miyamizu",
    ],
    about: {
      title: "SOBRE MÍ",
      text: "¡Hola! Soy un desarrollador de software dedicado con experiencia en el desarrollo backend usando tecnologías como C#, .NET y Python, además de experiencia en frameworks frontend como Angular. Me especializo en técnicas de web scraping e implemento Swagger, Identity y los principios SOLID en mis proyectos. Mis habilidades se extienden a la creación de bibliotecas .NET eficientes, desarrollo de aplicaciones Windows Forms e integración de características como Discord Rich Presence. Mi pasión reside en crear soluciones escalables y eficientes mientras mejoro continuamente mi experiencia técnica.",
      anime_time: "¡Tiempo de Anime!"
    },
    projects: {
      title: "PROYECTOS",
      view_project: "Ver Proyecto"
    },
    workstation: {
      title: "ESTACIÓN",
      intro: "Mi entorno de desarrollo está cuidadosamente diseñado para la máxima productividad:",
      footer: "¡Cada día aprendiendo más para seguir sumando!"
    },
    hobbies: {
      title: "HOBBIES",
      intro: "Cuando no estoy programando, disfruto de:",
      items: {
        open_source: "Código Abierto",
        learning: "Aprendizaje",
        side_projects: "Proyectos Paralelos",
        watch_anime: "Ver Anime",
        video_games: "Videojuegos",
        movies: "Películas y series"
      }
    },
    resume: {
      title: "CV",
      cv_file: "/Jefferson Abreu Martinez - Cv (versión Español).pdf",
      cv_download: "/Jefferson Abreu Martinez - Cv (versión Español).pdf"
    },
    game: {
      title: "JUEGO"
    }
  }
}

export default function RetroPortfolio() {
  const [lang, setLang] = useState<Language>('en')
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-lang') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
      setLang(savedLang)
    }
  }, [])

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'es' : 'en'
    setLang(newLang)
    localStorage.setItem('portfolio-lang', newLang)
  }

  const t = translations[lang]
  const typedText = useTypingEffect(t.subtitles, 100, 50, 1500)
  const typedAnimeText = useTypingEffect(t.animePhrases, 75, 50, 1500)

  const content = {
    about: (
      <div className="space-y-4">
        <p className="text-green-500 font-mono">
          {t.about.text}
        </p>
        <TechStack lang={lang} />
        <div className="border border-green-500/20 p-4 mt-4">
          <h3 className="text-green-500 font-mono mb-2">{t.about.anime_time}</h3>
          <p className="text-green-500 font-mono text-sm">
            {typedAnimeText}<span className="animate-blink">_</span>
          </p>
        </div>
      </div>
    ),
    projects: (
      <div className="space-y-4">
        <div className="border border-green-500/20 p-4">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Image
              src="/projects/Kuhaku.webp"
              alt="KuhakuAPI"
              width={100}
              height={100}
              className="rounded-md w-full sm:w-24 h-auto object-cover"
            />
            <div className="flex-1">
              <h3 className="text-green-500 font-mono mb-2">KuhakuAPI</h3>
              <p className="text-green-500 font-mono text-sm mb-2">
                - WebScraping
                - API
                - Swagger
                - Identity
                - C#
                - Onion Arch
                - {lang === 'en' ? 'Movies' : 'Películas'}
                - {lang === 'en' ? 'Database' : 'Base de Datos'}
              </p>
              <Button variant="outline" size="sm" className="text-green-500 border-green-500 hover:bg-green-500/20">
                <a href="https://github.com/AbreuHD/KuhakuAPI" data-umami-event="project_kuhakuapi" className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t.projects.view_project}
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="border border-green-500/20 p-4">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Image
              src="/projects/NotYet.webp"
              alt="Auth"
              width={100}
              height={100}
              className="rounded-md w-full sm:w-24 h-auto object-cover"
            />
            <div className="flex-1">
              <h3 className="text-green-500 font-mono mb-2">Shōmei Auth</h3>
              <p className="text-green-500 font-mono text-sm mb-2">
                - C#
                - Identity
                - {lang === 'en' ? 'Database' : 'Base de Datos'}
                - {lang === 'en' ? 'Code First' : 'Código Primero'}
                - Package
                - Jwt
                - {lang === 'en' ? 'Security' : 'Seguridad'}
              </p>
              <Button variant="outline" size="sm" className="text-green-500 border-green-500 hover:bg-green-500/20">
                <a href="https://github.com/AbreuHD/Shomei-Auth" data-umami-event="project_shomei_auth" className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t.projects.view_project}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),
    workstation: (
      <div className="space-y-4">
        <p className="text-green-500 font-mono mb-4">
          {t.workstation.intro}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <SiVisualstudio className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Visual Studio</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <SiVisualstudiocode className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Visual Studio Code</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <SiAndroidstudio className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Android Studio</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <SiDocker className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Docker</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <SiJenkins className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Jenkins</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <SiGithub className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Github</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <SiWindows className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Windows</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <SiLinux className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Linux</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <SiPlesk className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">VPS | Plesk</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <SiPostman className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Postman</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <SiMysql className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">MySQL</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <SiMicrosoftsqlserver className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">SQL Server</span>
          </div>
        </div>
        <div className="border border-green-500/20 p-4 mt-4">
          <p className="text-green-500 font-mono text-sm">
            {t.workstation.footer}
          </p>
        </div>
      </div>
    ),
    hobbies: (
      <div className="space-y-4">
        <p className="text-green-500 font-mono mb-4">
          {t.hobbies.intro}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <Github className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">{t.hobbies.items.open_source}</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <BookOpen className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">{t.hobbies.items.learning}</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <Code className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">{t.hobbies.items.side_projects}</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <Tv className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">{t.hobbies.items.watch_anime}</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <Gamepad2 className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">{t.hobbies.items.video_games}</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <Popcorn className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">{t.hobbies.items.movies}</span>
          </div>
        </div>
      </div>
    ),
    cv: (
      <PdfViewer 
        key={lang} // Key to force re-render when language changes
        fileUrl={t.resume.cv_file} 
        downloadUri={t.resume.cv_download} 
      />
    ),
    game: (
      <div className="space-y-4">
        <SpaceInvaders lang={lang} />
      </div>
    ),
  }

  return (
    <div className="min-h-screen bg-black">
      <ScanLines />
      <div className="max-w-4xl mx-auto p-4">
        <header className="border border-green-500/20 p-4 mb-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Terminal className="w-12 h-12 text-green-500" />
              <div className="text-center sm:text-left">
                <h1 className="text-green-500 font-mono text-xl">Jefferson@AbreuHD:~$</h1>
                <p className="text-green-500 font-mono text-sm h-6">
                  {typedText}<span className="animate-blink">_</span>
                </p>
              </div>
            </div>
            
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 border border-green-500/40 px-3 py-1 text-green-500 font-mono text-sm hover:bg-green-500/20 transition-colors"
            >
              <Languages className="w-4 h-4" />
              {lang.toUpperCase()}
            </button>
          </div>
        </header>

        <div className="border border-green-500/20 p-4 mb-4 flex justify-center space-x-6">
          <a href="https://github.com/abreuhd" target="_blank" rel="noopener noreferrer" data-umami-event="social_github" className="text-green-500 hover:text-green-400">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/abreuhd" target="_blank" rel="noopener noreferrer" data-umami-event="social_linkedin" className="text-green-500 hover:text-green-400">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:jefferson@abreuhd.com" data-umami-event="social_email" className="text-green-500 hover:text-green-400">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-6 gap-px bg-green-500/20">
          <AsciiIcon
            icon="about"
            label={t.about.title}
            isActive={activeSection === "about"}
            onClick={() => setActiveSection("about")}
            umamiEvent="tab_about"
          />
          <AsciiIcon
            icon="projects"
            label={t.projects.title}
            isActive={activeSection === "projects"}
            onClick={() => setActiveSection("projects")}
            umamiEvent="tab_projects"
          />
          <AsciiIcon
            icon="workstation"
            label={t.workstation.title}
            isActive={activeSection === "workstation"}
            onClick={() => setActiveSection("workstation")}
            umamiEvent="tab_workstation"
          />
          <AsciiIcon
            icon="hobbies"
            label={t.hobbies.title}
            isActive={activeSection === "hobbies"}
            onClick={() => setActiveSection("hobbies")}
            umamiEvent="tab_hobbies"
          />
          <AsciiIcon
            icon="resume"
            label={t.resume.title}
            isActive={activeSection === "cv"}
            onClick={() => setActiveSection("cv")}
            umamiEvent="tab_resume"
          />
          <AsciiIcon
            icon="game"
            label={t.game.title}
            isActive={activeSection === "game"}
            onClick={() => setActiveSection("game")}
            umamiEvent="tab_game"
          />
        </div>

        <div className="border border-green-500/20 p-4 mt-4">
          {content[activeSection as keyof typeof content]}
        </div>
        <style jsx>{`
          @keyframes blink {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
        `}</style>
      </div>
    </div>
  )
}


