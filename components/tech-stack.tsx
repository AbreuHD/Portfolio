import { Database, GitGraphIcon as Git, Globe, Server } from 'lucide-react'

export function TechStack() {
  return (
    <div className="border border-green-500/20 p-4 mt-4">
      <h3 className="text-green-500 font-mono mb-4">Tech Stack</h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <Server className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">Backend</span>
        </div>
        <div className="flex flex-col items-center">
          <Database className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">C#</span>
        </div>
        <div className="flex flex-col items-center">
          <Git className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">JS</span>
        </div>
        <div className="flex flex-col items-center">
          <Globe className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">Python</span>
        </div>
        <div className="flex flex-col items-center">
          <Globe className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">Kotlin</span>
        </div>
        <div className="flex flex-col items-center">
          <Globe className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">WebScraping</span>
        </div>
        <div className="flex flex-col items-center">
          <Globe className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">Database</span>
        </div>
        <div className="flex flex-col items-center">
          <Globe className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">Pipelines</span>
        </div>
        <div className="flex flex-col items-center">
          <Globe className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">Ionic</span>
        </div>
        <div className="flex flex-col items-center">
          <Globe className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">NodeJS</span>
        </div>
        <div className="flex flex-col items-center">
          <Globe className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">Angular</span>
        </div>
        <div className="flex flex-col items-center">
          <Globe className="w-8 h-8 text-green-500" />
          <span className="text-green-500 font-mono text-xs mt-2">Java</span>
        </div>
      </div>
    </div>
  )
}
