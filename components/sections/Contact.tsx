import { PORTFOLIO_DATA } from '@/constants/portfolio';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const Contact = () => {
  const { contact, name } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Contact</h2>
          <p className="text-zinc-500 mb-12">
            궁금한 점이 있으시면 언제든지 연락주세요.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={150}>
          <div className="flex flex-col items-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="text-lg text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              {contact.email}
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              github.com/mirea-shin
            </a>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={250}>
          <p className="text-sm text-zinc-400 mt-16">
            © 2025 {name}. All rights reserved.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Contact;
