import React from 'react';
import { projects } from '../data/resume';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my technical skills through innovative projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="apple-card">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-black dark:text-white text-sm font-medium mb-3">
                  {project.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-black dark:text-white mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-black dark:text-white mb-2">
                  Key Highlights:
                </h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-black dark:text-white mr-2 mt-1 text-xs">•</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 