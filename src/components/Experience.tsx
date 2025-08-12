
import { experiences } from '../data/resume';
import { useEffect, useRef } from 'react';

const Experience = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate center of card
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate mouse position relative to center (-1 to 1)
      const rotateX = ((y - centerY) / centerY) * -10; // Invert Y for natural feel
      const rotateY = ((x - centerX) / centerX) * 10;
      
      // Apply 3D transform
      card.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(20px)
      `;
      
      // Add dynamic shadow based on tilt
      const shadowX = rotateY * 0.5;
      const shadowY = rotateX * 0.5;
      card.style.boxShadow = `
        ${shadowX}px ${shadowY}px 25px rgba(0, 0, 0, 0.15),
        ${shadowX * 0.5}px ${shadowY * 0.5}px 15px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(59, 130, 246, 0.2)
      `;
    };

    const handleMouseLeave = (card: HTMLDivElement) => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      card.style.boxShadow = '';
    };

    cards.forEach((card) => {
      if (card) {
        card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.addEventListener('mouseleave', () => handleMouseLeave(card));
      }
    });

    return () => {
      cards.forEach((card) => {
        if (card) {
          card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
          card.removeEventListener('mouseleave', () => handleMouseLeave(card));
        }
      });
    };
  }, []);

  console.log('Experience component rendered, experiences:', experiences);
  
  return (
    <section id="experience" className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey!
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              ref={(el) => (cardRefs.current[index] = el)}
              className="apple-card apple-card-3d group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    {experience.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-300 mb-3">
                    <span className="font-medium">{experience.company}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                    <span>•</span>
                    <span className="text-black dark:text-white font-medium">{experience.period}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-black dark:text-white mr-2 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 