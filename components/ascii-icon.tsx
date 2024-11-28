import Image from 'next/image'

interface AsciiIconProps {
  icon: string
  label: string
  isActive?: boolean
  onClick?: () => void
}

export function AsciiIcon({ icon, label, isActive, onClick }: AsciiIconProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 sm:p-4 transition-colors ${
        isActive ? 'bg-green-500/10' : 'hover:bg-green-500/5'
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <Image
          src={`icons/${icon}.svg`}
          alt={label}
          width={48}
          height={48}
          className="opacity-80 w-8 h-8 sm:w-12 sm:h-12"
        />
        <span className="text-green-500 font-mono text-xs">{label}</span>
      </div>
    </button>
  )
}

