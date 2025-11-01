import { Award } from "lucide-react";

interface ProjectDetailsProps {
  title: string;
  event: string;
  achievement: string;
  linkText: string;
  linkUrl: string;
}

function ProjectDetails({
  title,
  event,
  achievement,
  linkText,
  linkUrl,
}: ProjectDetailsProps) {
  return (
    <div className="text-sm lg:text-md font-semibold text-center px-2">
      {/* Project Title */}
      <div className="mb-4 lg:mb-6 xl:mb-8">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-orange-500 tracking-widest transition-all duration-500 ease-in-out transform break-words">
          {title}
        </h1>
      </div>

      <p className="text-xs lg:text-sm text-gray-500 font-light tracking-wider mb-2">
        {event}
      </p>
      <div className="flex items-center justify-center gap-1 mb-2">
        <span className="text-xs lg:text-sm text-gray-500">{achievement}</span>
        <Award
          size={16}
          className="text-orange-500 lg:w-5 lg:h-5"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${linkText} on external site (opens in new tab)`}
        className="text-xs lg:text-sm text-orange-500 underline hover:text-orange-600 transition-colors duration-200 font-light tracking-wider break-words focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        {linkText}
      </a>
    </div>
  );
}

export default ProjectDetails;
