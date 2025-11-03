import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  projectName: string;
  image?: string;
  link?: string;
  alignText: 'left' | 'right';
  isInternal?: boolean;
}

function ProjectCard({ title, description, projectName, image, link, alignText, isInternal = false }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
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
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {/* Mobile Layout */}
      {isMobile && (
        <div className="flex flex-col items-center text-center w-full max-w-sm mx-auto px-4">
          {/* Card/Image */}
          {isInternal ? (
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={link || '#'}
                aria-label={`View ${title} project details`}
                className="block group mb-4 w-full"
              >
                <motion.div 
                  className="bg-gray-100 rounded-3xl border-2 border-gray-300 overflow-hidden hover:border-[#466EA2] transition-all duration-300 flex items-center justify-center w-full"
                  style={{ maxWidth: '340px', aspectRatio: '3/4', margin: '0 auto' }}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                {image && !image.includes('placeholder') ? (
                  <img 
                    src={image} 
                    alt={`${title} project preview`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400 text-center p-6">
                    <p className="text-sm">Project Image</p>
                    <p className="text-xs mt-1">{title}</p>
                  </div>
                )}
              </motion.div>
            </Link>
            </motion.div>
          ) : (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} project on external site (opens in new tab)`}
              className="block group mb-4 w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
            <motion.div 
              className="bg-gray-100 rounded-3xl border-2 border-gray-300 overflow-hidden hover:border-[#466EA2] transition-all duration-300 flex items-center justify-center w-full"
              style={{ maxWidth: '340px', aspectRatio: '3/4', margin: '0 auto' }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {image && !image.includes('placeholder') ? (
                <img 
                  src={image} 
                  alt={`${title} project preview`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-400 text-center p-6">
                  <p className="text-sm">Project Image</p>
                  <p className="text-xs mt-1">{title}</p>
                </div>
              )}
            </motion.div>
          </motion.a>
          )}

          {/* Title and description below the card */}
          <motion.div
            className="mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {title}
            </h3>
            <p className="text-sm text-gray-700">
              {description}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {projectName}
            </p>
          </motion.div>
        </div>
      )}

      {/* Desktop Layout */}
      {!isMobile && (
        <div className={`flex gap-8 items-start ${alignText === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
          {/* Title and description - side of card */}
          <div className={`flex-shrink-0 ${alignText === 'right' ? 'text-left' : 'text-right'} pt-4`}>
            <h3 className="text-5xl font-bold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-base text-gray-700">
              {description}
            </p>
            <p className="text-sm text-gray-500">
              {projectName}
            </p>
          </div>

          {/* Card */}
          {isInternal ? (
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={link || '#'}
                aria-label={`View ${title} project details`}
                className="block group flex-shrink-0"
              >
                <motion.div 
                  className="bg-gray-100 rounded-3xl border-2 border-gray-300 overflow-hidden hover:border-[#466EA2] transition-all duration-300 flex items-center justify-center"
                  style={{ width: '300px', height: '400px' }}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                {image && !image.includes('placeholder') ? (
                  <img 
                    src={image} 
                    alt={`${title} project preview`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400 text-center p-6">
                    <p className="text-sm">Project Image</p>
                    <p className="text-xs mt-1">{title}</p>
                  </div>
                )}
              </motion.div>
            </Link>
            </motion.div>
          ) : (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} project on external site (opens in new tab)`}
              className="block group flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="bg-gray-100 rounded-3xl border-2 border-gray-300 overflow-hidden hover:border-[#466EA2] transition-all duration-300 flex items-center justify-center"
                style={{ width: '300px', height: '400px' }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {image && !image.includes('placeholder') ? (
                  <img 
                    src={image} 
                    alt={`${title} project preview`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400 text-center p-6">
                    <p className="text-sm">Project Image</p>
                    <p className="text-xs mt-1">{title}</p>
                  </div>
                )}
              </motion.div>
            </motion.a>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default ProjectCard;

