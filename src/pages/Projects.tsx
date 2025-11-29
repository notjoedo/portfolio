import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <section className="bg-white py-20 px-4" aria-label="Projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="sr-only">Featured Projects</h2>
        {/* Projects - Side by Side Layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-12 justify-center items-center md:flex-wrap">
          {projects.map((project, index) => (
            <div key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                projectName={project.projectName}
                image={project.image}
                link={project.link}
                alignText={index === 0 ? 'left' : 'right'}
                isInternal={project.isInternal}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

