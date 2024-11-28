import { Terminal } from 'lucide-react'

export function TerminalHeader() {
  return (
    <div className="flex items-center gap-2 bg-zinc-900 p-2 border-b border-zinc-700">
      <Terminal className="w-4 h-4 text-green-500" />
      <span className="text-green-500 font-mono text-sm">backend@developer:~$</span>
    </div>
  )
}

