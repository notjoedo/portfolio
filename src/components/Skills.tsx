
import { skills } from '../data/resume';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technical expertise across various programming languages, frameworks, and tools
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skillCategory, index) => (
            <div key={index} className="apple-card">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  {skillCategory.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 