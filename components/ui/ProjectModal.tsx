'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '@/types';

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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.documentElement.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/50 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white px-6 pt-6 pb-4 border-b border-zinc-100">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">{project.name}</h3>
              <p className="text-sm text-zinc-500">{project.role}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor[project.status]}`}>
                {statusLabel[project.status]}
              </span>
              <button
                onClick={onClose}
                className="text-zinc-400 hover:text-zinc-700 transition-colors"
                aria-label="닫기"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-6">
          {/* Description */}
          <p className="text-zinc-600 leading-relaxed">{project.description}</p>

          {/* Tech stack */}
          <div>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">Tech Stack</p>
            {project.details?.techStack ? (
              <div className="space-y-2.5">
                {project.details.techStack.map(({ category, items }) => (
                  <div key={category} className="flex items-start gap-3">
                    <span className="shrink-0 w-16 text-xs text-zinc-400 pt-1">{category}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md font-mono">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Highlights */}
          {project.details?.highlights && project.details.highlights.length > 0 && (
            <div>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">주요 구현</p>
              <ul className="space-y-2.5">
                {project.details.highlights.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          {project.links && (
            <div className="flex gap-3 pt-1">
              {project.links.client && (
                <a
                  href={project.links.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  Client
                </a>
              )}
              {project.links.server && (
                <a
                  href={project.links.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  Server
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-700 transition-colors"
                >
                  Demo →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ProjectModal;
