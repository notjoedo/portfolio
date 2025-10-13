import { useEffect, useRef, useState } from 'react';
import { Experience } from '../data/experiences';

interface TimelineItemProps {
  experience: Experience;
}

function TimelineItem({ experience }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <div
      ref={itemRef}
      className="relative mb-16"
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
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: '#466EA2' }}
        />
      </div>

      {/* Right Side - Date & Location */}
      <div
        className={`pl-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
        }`}
      >
        <p className="text-base font-medium text-gray-700">
          {experience.period}
        </p>
        <p className="text-sm text-gray-500">{experience.location}</p>
      </div>
    </div>
  );
}

export default TimelineItem;

