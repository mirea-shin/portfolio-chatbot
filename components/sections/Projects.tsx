import { PORTFOLIO_DATA } from '@/constants/portfolio';
import { Project } from '@/types';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const statusLabel: Record<Project['status'], string> = {
  active: '완료',
  'in-progress': '진행 중',
  planned: '예정',
};

const statusColor: Record<Project['status'], string> = {
  active: 'bg-emerald-100 text-emerald-700',
  'in-progress': 'bg-blue-100 text-blue-700',
  planned: 'bg-zinc-100 text-zinc-500',
};

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
              <div className="border border-zinc-200 rounded-xl p-6 hover:border-zinc-400 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-zinc-900">{project.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor[project.status]}`}>
                    {statusLabel[project.status]}
                  </span>
                </div>
                <p className="text-zinc-600 mb-4">{project.description}</p>
                <p className="text-sm text-zinc-400 mb-4">{project.role}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                {project.links && (
                  <div className="flex gap-3">
                    {project.links.client && (
                      <a
                        href={project.links.client}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-500 hover:text-zinc-900 underline underline-offset-2 transition-colors"
                      >
                        Client
                      </a>
                    )}
                    {project.links.server && (
                      <a
                        href={project.links.server}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-500 hover:text-zinc-900 underline underline-offset-2 transition-colors"
                      >
                        Server
                      </a>
                    )}
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
