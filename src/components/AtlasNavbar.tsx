import { Link } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";

interface AtlasNavbarProps {
  title?: string;
}

function AtlasNavbar({ title = "ATLAS" }: AtlasNavbarProps) {
  return (
    <>
      {/* Mobile Header - Shows horizontally at top on mobile */}
      <nav className="lg:hidden bg-opacity-0 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="p-4 flex items-center justify-between">
          {/* Back Button */}
          <Link
            to="/"
            aria-label="Back to home page"
            className="inline-flex items-center justify-center w-16 h-8 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Mobile Title */}
          <div className="flex-1 px-4">
            <h1 className="font-semibold text-orange-500 tracking-widest text-center text-2xl">
              ATLAS
            </h1>
          </div>

          {/* Spacer for symmetry */}
          <div className="w-16"></div>
        </div>
      </nav>

      {/* Desktop Sidebar - Shows on larger screens */}
      <nav className="hidden lg:flex lg:w-1/6 lg:min-w-[200px] xl:w-1/5 bg-white p-6 xl:p-8 flex-col sticky top-0 h-screen">
        {/* Back Button */}
        <div className="flex justify-end mb-8">
          <Link
            to="/"
            aria-label="Back to home page"
            className="inline-flex items-center justify-center w-16 h-8 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Spacer to push ProjectDetails to center */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          {/* Project Details */}
          {title === "ATLAS" ? (
            <ProjectDetails
              title={title}
              event="Marriott 2025 CodeFest"
              achievement="2nd Place Winner"
              linkText="ATLAS Devpost"
              linkUrl="https://devpost.com/software/atlas-4kd1lf"
            />
          ) : (
            <div className="text-center px-2">
              <div className="mb-4">
                <h1
                  className={`font-semibold text-orange-500 tracking-widest break-words ${
                    title === "Challenges & Future Implementations"
                      ? "text-xl xl:text-2xl"
                      : "text-2xl xl:text-3xl 2xl:text-4xl"
                  }`}
                >
                  {title}
                </h1>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default AtlasNavbar;
