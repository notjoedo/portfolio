import React from 'react';
import { experiences } from '../data/resume';

const Experience = () => {
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
            <div key={experience.id} className="apple-card">
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