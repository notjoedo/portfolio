import { Link } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';

interface AtlasNavbarProps {
  title?: string;
}

function AtlasNavbar({ title = 'ATLAS' }: AtlasNavbarProps) {
  return (
    <div className="w-1/6 h-screen bg-white p-8 flex flex-col sticky top-0">
      {/* Back Button */}
      <div className="flex justify-end mb-8">
        <Link 
          to="/"
          className="inline-flex items-center justify-center w-16 h-8 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

      {/* Spacer to push ProjectDetails to center */}
      <div className="flex-1 flex items-center justify-center">
        {/* Project Details */}
        {title === 'ATLAS' ? (
          <ProjectDetails 
            title={title}
            event="Marriott 2025 CodeFest"
            achievement="2nd Place Winner"
            linkText="ATLAS Devpost"
            linkUrl="https://devpost.com/software/atlas-4kd1lf"
          />
        ) : (
          <div className="text-center">
            <div className="mb-8">
              <h1 className={`font-semibold text-orange-500 tracking-widest ${
                title === 'Challenges & Future Implementations' 
                  ? 'text-2xl' 
                  : 'text-4xl'
              }`}>
                {title}
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AtlasNavbar;
