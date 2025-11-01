import { useEffect, useRef, useState } from 'react';
import { Experience } from '../data/experiences';

interface TimelineItemProps {
  experience: Experience;
}

function TimelineItem({ experience }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Set visibility based on whether element is intersecting
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      ref={itemRef}
      className="relative mb-12 md:mb-16"
      role="listitem"
    >
      {/* Mobile Layout */}
      {isMobile && (
        <div>
          <div className="flex items-start gap-6 pr-8">
            {/* Content */}
            <div
              className={`flex-1 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {experience.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                • {experience.company}
              </p>
              <p className="text-sm text-gray-600">
                {experience.location}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {experience.period}
              </p>
              
              {/* Bullet Points for Mobile */}
              <ul className="mt-3 space-y-2">
                {experience.bullets.map((bullet, index) => (
                  <li key={index} className="text-sm text-gray-700 leading-relaxed">
                    • {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline Dot - positioned to align with timeline line */}
            <div className="absolute right-[14px] top-0 w-3 h-3" aria-hidden="true">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: '#466EA2' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      {!isMobile && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '60% 1fr',
            gap: '2rem'
          }}
        >
        {/* Left Side - Content */}
        <div
          className={`pr-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <div className="text-right">
            <h3 className="text-xl font-semibold text-gray-900">
              {experience.title}
            </h3>
            <p className="text-base text-gray-700 mt-1">
              • {experience.company}
            </p>
          </div>

          <ul className="mt-4 space-y-2">
            {experience.bullets.map((bullet, index) => (
              <li key={index} className="text-gray-700 leading-relaxed">
                • {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline Dot - absolutely positioned on the line */}
        <div
          className="absolute"
          style={{
            left: '60%',
            transform: 'translateX(-42%)',
            zIndex: 10
          }}
          aria-hidden="true"
        >
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: '#466EA2' }}
          />
        </div>

        {/* Right Side - Date & Location */}
        <div
          className={`hidden md:block pl-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <p className="text-base font-medium text-gray-700">
            {experience.period}
          </p>
          <p className="text-sm text-gray-500">{experience.location}</p>
        </div>
        </div>
      )}
    </div>
  );
}

export default TimelineItem;

