import { PORTFOLIO_DATA } from '@/constants/portfolio';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import {
  SiReact,
  SiTypescript,
  SiElectron,
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiNextdotjs,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiGit,
  SiGithub,
  SiFigma,
  SiJira,
} from 'react-icons/si';
import { IconType } from 'react-icons';

const SKILL_ICONS: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  Electron: SiElectron,
  Redux: SiRedux,
  'Tailwind CSS': SiTailwindcss,
  'Styled-Components': SiStyledcomponents,
  'Next.js': SiNextdotjs,
  'React Query': SiReactquery,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  Prisma: SiPrisma,
  Git: SiGit,
  GitHub: SiGithub,
  Figma: SiFigma,
  Jira: SiJira,
};

const levelLabel: Record<'main' | 'experienced', string> = {
  main: 'Main',
  experienced: 'Experienced',
};

const chipStyle: Record<'main' | 'experienced', string> = {
  main: 'border border-zinc-300 text-zinc-900 font-semibold',
  experienced: 'border border-zinc-200 text-zinc-700 font-normal',
};

const Skills = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-zinc-900 mb-12">Skills</h2>
        </AnimateOnScroll>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group, i) => (
            <AnimateOnScroll key={group.category} delay={i * 100}>
              <div className="bg-white rounded-xl border border-zinc-200 p-5 h-full">
                <h3 className="text-sm font-semibold text-zinc-900 mb-4">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.items.map(({ level, names }) => (
                    <div key={level}>
                      <p className="text-xs text-zinc-400 mb-1.5">
                        {levelLabel[level]}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {names.map((name) => {
                          const Icon = SKILL_ICONS[name];
                          return (
                            <span
                              key={name}
                              className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md ${chipStyle[level]}`}
                            >
                              {Icon && <Icon size={11} />}
                              {name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
