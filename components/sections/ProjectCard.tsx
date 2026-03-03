'use client';

import { useState } from 'react';
import { Project } from '@/types';
import ProjectModal from '@/components/ui/ProjectModal';

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

const ProjectCard = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="border border-zinc-200 rounded-xl p-6 hover:border-zinc-400 transition-colors cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
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
        <p className="text-xs text-zinc-400">자세히 보기 →</p>
      </div>

      {isOpen && (
        <ProjectModal project={project} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default ProjectCard;
