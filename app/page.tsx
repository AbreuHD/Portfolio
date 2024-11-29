"use client"

import { useState } from "react"
import { ScanLines } from "@/components/scan-lines"
import { AsciiIcon } from "@/components/ascii-icon"
import { TechStack } from "@/components/tech-stack"
import { Terminal, Github, Linkedin, Mail, Gamepad2, Popcorn, Tv, BookOpen, Code,FileUser } from 'lucide-react'
import { SiVisualstudio, SiPlesk, SiMysql, SiLinux, SiVisualstudiocode, SiAndroidstudio, SiJenkins, SiPostman, SiMicrosoftsqlserver, SiDocker, SiGithub, SiWindows } from "react-icons/si";

import { useTypingEffect } from "@/hooks/useTypingEffect"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import PdfViewer from "@/components/PdfViewer"
export default function RetroPortfolio() {
  const [activeSection, setActiveSection] = useState("about")

  const subtitles = [
    "Backend Developer",
    "System Architect",
    "API Designer",
    "Database Expert",
    "Cloud Engineer",
    "Anime Enthusiast"
  ]

  const animePhrases = [
    // One Piece
    "The world is not as good as it should be, but there are still people who do everything they can to make it better. ~ Monkey D. Luffy",
    "I am not a hero because I want to be, I am a hero because I am the only one who can do it. ~ Monkey D. Luffy",
    "Life is like the sea, and hope is the wind. ~ Trafalgar D. Water Law",
  
    // Fullmetal Alchemist
    "A man cannot change his destiny, but he can change his destiny for another. ~ Edward Elric",
    "A lie is a lie, even if you say it with good intentions. ~ Roy Mustang",
    "He who does not sacrifice for others cannot expect others to sacrifice for him. ~ Izumi Curtis",
  
    // Sword Art Online
    "In this world, there is no such thing as 'I can't.' There is only 'I haven't done it yet.' ~ Asuna",
    "People don't die when they stop breathing, they die when they stop believing. ~ Suguha Kirigaya",
  
    // Your Name
    "Even though time and distance may separate us, I will always be with you. ~ Taki Tachibana",
    "Time doesn't heal everything. But it’s all we have. ~ Mitsuha Miyamizu",
  ];
  
  const typedText = useTypingEffect(subtitles, 100, 50, 1500)
  const typedAnimeText = useTypingEffect(animePhrases, 75, 50, 1500)

  const content = {
    about: (
      <div className="space-y-4">
        <p className="text-green-500 font-mono">
        Hello! I am a dedicated software developer with expertise in backend development using technologies like 
        C#, .NET, and Python, alongside experience in frontend frameworks such as Angular. I specialize in web scraping techniques and implement Swagger, 
        Identity, and SOLID principles in my projects. My skills extend to building efficient .NET libraries, developing Windows Forms apps, 
        and integrating features like Discord Rich Presence. My passion lies in creating scalable, efficient solutions while continuously enhancing 
        my technical expertise.
        </p>
        <TechStack />
        <div className="border border-green-500/20 p-4 mt-4">
          <h3 className="text-green-500 font-mono mb-2">Anime Time!</h3>
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
                - Movies
                - Database
              </p>
              <Button variant="outline" size="sm" className="text-green-500 border-green-500 hover:bg-green-500/20">
                <a href="https://github.com/AbreuHD/KuhakuAPI" className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border border-green-500/20 p-4">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Image
              src="/projects/NotYet.webp"
              alt="Bidehan"
              width={100}
              height={100}
              className="rounded-md w-full sm:w-24 h-auto object-cover"
            />
            <div className="flex-1">
              <h3 className="text-green-500 font-mono mb-2">Bidehan</h3>
              <p className="text-green-500 font-mono text-sm mb-2">
                - WebScraping
                - NuGet
                - C#
                - Video Source
              </p>
              <Button variant="outline" size="sm" className="text-green-500 border-green-500 hover:bg-green-500/20">
                <a href="https://github.com/AbreuHD/Bidehan" className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border border-green-500/20 p-4">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Image
              src="/projects/NotYet.webp"
              alt="Bideo Rinku"
              width={100}
              height={100}
              className="rounded-md w-full sm:w-24 h-auto object-cover"
            />
            <div className="flex-1">
              <h3 className="text-green-500 font-mono mb-2">Bideo Rinku</h3>
              <p className="text-green-500 font-mono text-sm mb-2">
                - C#
                - Windows Form
                - WebScraping
                - VLC Media Player
                - Discord Rich Presence
                </p>
              <Button variant="outline" size="sm" className="text-green-500 border-green-500 hover:bg-green-500/20">
                <a href="https://github.com/AbreuHD/Bideo-Rinku" className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
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
          My development environment is carefully crafted for maximum productivity:
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
            Every day learning more to keep adding!
          </p>
        </div>
      </div>
    ),
    hobbies: (
      <div className="space-y-4">
        <p className="text-green-500 font-mono mb-4">
          When not coding, I enjoy:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <Github className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Open Source</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <BookOpen className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Learning</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <Code className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Side Projects</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <Tv className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Watch Anime</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <Gamepad2 className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Video Games</span>
          </div>
          <div className="border border-green-500/20 p-4 flex flex-col items-center">
            <Popcorn className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-green-500 font-mono text-sm">Movies and series</span>
          </div>
        </div>
      </div>
    ),
    cv: (
      
      <PdfViewer fileUrl="/Jefferson - Resume.pdf" />
    ),
  }

  return (
    <div className="min-h-screen bg-black">
      <ScanLines />
      <div className="max-w-4xl mx-auto p-4">
        <header className="border border-green-500/20 p-4 mb-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Terminal className="w-12 h-12 text-green-500" />
            <div className="text-center sm:text-left">
              <h1 className="text-green-500 font-mono text-xl">Jefferson@AbreuHD:~$</h1>
              <p className="text-green-500 font-mono text-sm h-6">
                {typedText}<span className="animate-blink">_</span>
              </p>
            </div>
          </div>
        </header>
        <div className="border border-green-500/20 p-4 mb-4 flex justify-center space-x-6">
          <a href="https://github.com/abreuhd" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/abreuhd" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:abreumartinezjefferson@gmail.com" className="text-green-500 hover:text-green-400">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-green-500/20">
          <AsciiIcon
            icon="about"
            label="ABOUT"
            isActive={activeSection === "about"}
            onClick={() => setActiveSection("about")}
          />
          <AsciiIcon
            icon="projects"
            label="PROJECTS"
            isActive={activeSection === "projects"}
            onClick={() => setActiveSection("projects")}
          />
          <AsciiIcon
            icon="workstation"
            label="WORKSTATION"
            isActive={activeSection === "workstation"}
            onClick={() => setActiveSection("workstation")}
          />
          <AsciiIcon
            icon="hobbies"
            label="HOBBIES"
            isActive={activeSection === "hobbies"}
            onClick={() => setActiveSection("hobbies")}
          />
          <AsciiIcon
            icon="resume"
            label="RESUME"
            isActive={activeSection === "cv"}
            onClick={() => setActiveSection("cv")}
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

