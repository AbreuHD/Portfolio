interface SkillBarProps {
  skill: string;
  level: number;
}

export function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white">{skill}</span>
        <span className="text-white">{level}%</span>
      </div>
      <div className="bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

