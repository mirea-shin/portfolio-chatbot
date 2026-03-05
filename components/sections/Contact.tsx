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
          <div className="flex flex-col text-left">
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center gap-4 py-5"
            >
              <span className="w-20 shrink-0 flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 uppercase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
              </span>
              <span className="text-zinc-300 group-hover:text-zinc-600 transition-colors">
                →
              </span>
              <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">
                {contact.email}
              </span>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-5"
            >
              <span className="w-20 shrink-0 flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 uppercase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </span>
              <span className="text-zinc-300 group-hover:text-zinc-600 transition-colors">
                →
              </span>
              <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">
                {contact.github.replace('https://', '')}
              </span>
            </a>
            <div className="flex items-center gap-4 py-5">
              <span className="w-20 shrink-0 flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 uppercase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Phone
              </span>
              <span className="text-zinc-300 group-hover:text-zinc-600 transition-colors">
                →
              </span>
              <span className="text-sm text-zinc-600">{contact.phone}</span>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={250}>
          <p className="text-sm text-zinc-400 mt-16">
            © 2026 {name}. All rights reserved.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Contact;
