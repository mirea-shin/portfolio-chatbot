import { PORTFOLIO_DATA } from '@/constants/portfolio';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const About = () => {
  const { intro, location, experience } = PORTFOLIO_DATA;
  const exp = experience[0];

  return (
    <section id="about" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-zinc-900 mb-12">About</h2>
        </AnimateOnScroll>
        <div className="grid gap-10">
          <AnimateOnScroll delay={100}>
            <p className="text-zinc-600 leading-relaxed mb-6">{intro}</p>
            <p className="text-sm text-zinc-400">📍 {location}</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <h3 className="text-lg font-semibold text-zinc-800 mb-4">경력</h3>
            <div className="border-l-2 border-zinc-200 pl-4">
              <p className="font-medium text-zinc-800">{exp.company}</p>
              <p className="text-sm text-zinc-500 mb-2">
                {exp.position} · {exp.period}
              </p>
              <ul className="space-y-1">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="text-sm text-zinc-600 flex gap-2">
                    <span className="text-zinc-400 shrink-0">—</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
