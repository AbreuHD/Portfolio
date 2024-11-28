export function ScanLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div className="scan-lines absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
      <div className="flicker absolute inset-0 opacity-[0.15] mix-blend-overlay">
        <div className="h-full w-full bg-[repeating-linear-gradient(0deg,#000,#000_1px,transparent_1px,transparent_2px)]" />
      </div>
      <style jsx>{`
        .scan-lines {
          animation: scroll 8s linear infinite;
        }
        @keyframes scroll {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        .flicker {
          animation: flicker 0.3s infinite;
        }
        @keyframes flicker {
          0% { opacity: 0.15; }
          50% { opacity: 0.1; }
          100% { opacity: 0.15; }
        }
      `}</style>
    </div>
  )
}

