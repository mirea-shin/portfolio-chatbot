'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const heroEl = document.getElementById('hero');
    if (!heroEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-100 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-sm border-b border-zinc-100 shadow-sm'
          : 'border-none bg-transparent'
      } `}
    >
      <nav className="max-w-3xl mx-auto  pl-0 h-14 flex items-center justify-between ">
        <a
          href="#hero"
          className={`text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-all duration-300 ${
            heroVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          Mirea Shin
        </a>
        <ul className="flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
