'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-950/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-none">
              <span className="font-display text-base sm:text-lg font-bold tracking-wide text-white uppercase">
                NW Window Tinting
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-brand-400 tracking-widest uppercase">
                10-Year Anniversary
              </span>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#enter"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-500 hover:bg-brand-400 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25 active:scale-[0.98]"
          >
            Enter Now
          </a>
        </div>
      </div>
    </header>
  );
}
