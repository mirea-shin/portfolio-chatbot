import { PORTFOLIO_DATA } from '@/constants/portfolio';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const Skills = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-zinc-900 mb-12">Skills</h2>
        </AnimateOnScroll>
        <div className="grid gap-8 md:grid-cols-3">
          <AnimateOnScroll delay={100}>
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Main</h3>
            <div className="flex flex-wrap gap-2">
              {skills.main.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-zinc-900 text-white text-sm rounded-lg font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Sub</h3>
            <div className="flex flex-wrap gap-2">
              {skills.sub.map((skill) => (
                <span key={skill} className="px-3 py-1.5 border border-zinc-300 text-zinc-700 text-sm rounded-lg font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Learning</h3>
            <div className="flex flex-wrap gap-2">
              {skills.learning.map((skill) => (
                <span key={skill} className="px-3 py-1.5 border border-dashed border-zinc-300 text-zinc-400 text-sm rounded-lg font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Skills;
