interface NavItemProps {
  label: string
  icon: string
  isSelected?: boolean
  onClick?: () => void
}

export function NavItem({ label, icon, isSelected, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`p-4 border border-zinc-800 hover:bg-zinc-800/50 transition-colors ${
        isSelected ? "bg-zinc-800" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-3xl font-mono text-green-500">{icon}</div>
        <span className="text-xs font-mono text-green-500">{label}</span>
      </div>
    </button>
  )
}

