import { Award } from 'lucide-react';

interface ProjectDetailsProps {
  title: string;
  event: string;
  achievement: string;
  linkText: string;
  linkUrl: string;
}

function ProjectDetails({ title, event, achievement, linkText, linkUrl }: ProjectDetailsProps) {
  return (
    <div className="text-md font-semibold text-center">
      {/* Project Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-orange-500 tracking-widest transition-all duration-500 ease-in-out transform">
          {title}
        </h1>
      </div>
      
      <p className="text-gray-500 font-light tracking-wider">{event}</p>
      <div className="flex items-center justify-center gap-1">
        <span className="text-gray-500">{achievement}</span>
        <Award size={20} className="text-orange-500" strokeWidth={1.5} />
      </div>
      <a 
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 underline hover:text-orange-600 transition-colors duration-200 font-light tracking-wider"
      >
        {linkText}
      </a>
    </div>
  );
}

export default ProjectDetails;
