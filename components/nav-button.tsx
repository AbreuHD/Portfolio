interface NavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function NavButton({ label, isActive, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-bold text-white rounded-t-lg transition-colors ${
        isActive ? "bg-gray-800" : "bg-gray-700 hover:bg-gray-600"
      }`}
    >
      {label}
    </button>
  );
}

