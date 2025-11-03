import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="bg-white py-20 px-4" aria-label="Projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="sr-only">Featured Projects</h2>
        {/* Projects - Side by Side Layout */}
        <motion.div
          className="flex flex-col md:flex-row gap-12 md:gap-12 justify-center items-center md:flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                projectName={project.projectName}
                image={project.image}
                link={project.link}
                alignText={index === 0 ? 'left' : 'right'}
                isInternal={project.isInternal}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

