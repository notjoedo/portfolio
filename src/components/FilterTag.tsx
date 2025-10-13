interface FilterTagProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function FilterTag({ label, isActive, onClick }: FilterTagProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
        ${
          isActive
            ? 'bg-[#466EA2] text-white border-[#466EA2]'
            : 'bg-white text-gray-700 border-gray-300 hover:border-[#466EA2]'
        }
      `}
    >
      {label}
    </button>
  );
}

export default FilterTag;

