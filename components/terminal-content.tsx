interface TerminalContentProps {
  children: React.ReactNode
}

export function TerminalContent({ children }: TerminalContentProps) {
  return (
    <div className="p-4 font-mono text-green-500 text-sm">
      <pre className="whitespace-pre-wrap">{children}</pre>
    </div>
  )
}

