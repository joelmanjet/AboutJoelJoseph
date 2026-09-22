'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const links = [
  { id: 'home', label: 'Joel Joseph', href: '#home', type: 'anchor' as const },
  { id: 'skills', label: 'Skills & Technologies', href: '#skills', type: 'anchor' as const },
  { id: 'certifications', label: 'Certifications', href: '#certifications', type: 'anchor' as const },
  { id: 'projects', label: 'Featured Projects', href: '#projects', type: 'anchor' as const },
  { id: 'resume', label: 'Resume', href: '/resume', type: 'route' as const },
  { id: 'contact', label: 'Contact', href: '#contact', type: 'anchor' as const },
];

export default function TopNav() {
  const [activeId, setActiveId] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const sections = links
      .filter((l) => l.type === 'anchor')
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={pathname === '/' ? '#home' : '/#home'} aria-label="Joel Joseph, home" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden sm:flex items-center gap-6">
          {links.map((l) =>
            l.type === 'route' ? (
              <Link
                key={l.id}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === l.href ? 'text-white' : 'text-white/60 hover:text-white/90'
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.id}
                href={pathname === '/' ? l.href : `/${l.href}`}
                className={`text-sm font-medium transition-colors ${
                  pathname === '/' && activeId === l.id ? 'text-white' : 'text-white/60 hover:text-white/90'
                }`}
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 sm:hidden"
        >
          <span className={`block h-[2px] w-5 bg-white transition-transform duration-200 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-[2px] w-5 bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] w-5 bg-white transition-transform duration-200 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/10 bg-navy/95 backdrop-blur-md sm:hidden"
          >
            <div className="flex flex-col gap-3 px-4 py-3">
              {links.map((l) =>
                l.type === 'route' ? (
                  <Link
                    key={l.id}
                    href={l.href}
                    onClick={handleLinkClick}
                    className={`text-sm font-medium transition-colors ${
                      pathname === l.href ? 'text-white' : 'text-white/60'
                    }`}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.id}
                    href={pathname === '/' ? l.href : `/${l.href}`}
                    onClick={handleLinkClick}
                    className={`text-sm font-medium transition-colors ${
                      pathname === '/' && activeId === l.id ? 'text-white' : 'text-white/60'
                    }`}
                  >
                    {l.label}
                  </a>
                )
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
