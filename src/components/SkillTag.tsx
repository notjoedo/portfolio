interface SkillTagProps {
  skill: string;
}

function SkillTag({ skill }: SkillTagProps) {
  return (
    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-300 hover:border-[#466EA2] transition-colors duration-200">
      {skill}
    </span>
  );
}

export default SkillTag;

