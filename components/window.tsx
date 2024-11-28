interface WindowProps {
  title: string;
  children: React.ReactNode;
}

export function Window({ title, children }: WindowProps) {
  return (
    <div className="bg-gray-800 border-2 border-gray-600 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-gray-700 px-4 py-2 flex items-center justify-between">
        <h2 className="text-white font-bold">{title}</h2>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

