import { PORTFOLIO_DATA } from '@/constants/portfolio';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ProjectCard from '@/components/sections/ProjectCard';

const Projects = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-zinc-900 mb-12">Projects</h2>
        </AnimateOnScroll>
        <div className="grid gap-6">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.name} delay={i * 100}>
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
