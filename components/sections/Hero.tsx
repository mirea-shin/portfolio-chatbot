import { PORTFOLIO_DATA } from '@/constants/portfolio';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const Hero = () => {
  const { name, title, intro, contact } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-3xl w-full">
        <AnimateOnScroll delay={0}>
          <p className="text-sm font-mono text-zinc-400 mb-4 tracking-widest uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl font-bold text-zinc-900 mb-3 leading-tight">
            {name}
          </h1>
          <h2 className="text-2xl font-medium text-zinc-500 mb-8">
            {title}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={150}>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mb-10">
            {intro}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={300}>
          <div className="flex gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors"
            >
              이메일 보내기
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-zinc-300 text-zinc-700 rounded-lg text-sm font-medium hover:border-zinc-500 transition-colors"
            >
              GitHub
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Hero;
