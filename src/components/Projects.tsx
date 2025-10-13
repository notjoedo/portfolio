import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Projects - Side by Side Layout */}
        <div className="flex flex-row gap-12 justify-center items-center flex-wrap">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              projectName={project.projectName}
              image={project.image}
              link={project.link}
              alignText={index === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

