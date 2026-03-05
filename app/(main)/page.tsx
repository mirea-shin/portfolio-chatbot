import HeroBridgeHub from '@/components/sections/HeroBridgeHub';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <HeroBridgeHub />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
