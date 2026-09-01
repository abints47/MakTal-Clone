'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Work', href: '#works' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { label: 'Website Development', href: '#services' },
  { label: 'Digital Marketing', href: '#services' },
  { label: 'SEO Optimization', href: '#services' },
];

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // At top, always show
      if (currentY <= 80) {
        setScrolled(false);
        setHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      setScrolled(true);

      // Scrolling down → hide
      if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
      }
      // Scrolling up → show
      else if (currentY < lastScrollY.current) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          hidden
            ? '-translate-y-full'
            : 'translate-y-0'
        } ${
          scrolled
            ? 'py-4 bg-[#0a0a0a]/90 backdrop-blur-xl '
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <a href="/" className="group flex items-center z-50 shrink-0">
            <img src="/images/maktal-logo.png" alt="MakTal Technologies" className="h-8 sm:h-9 w-auto transition-opacity duration-300 group-hover:opacity-80" />
          </a>

          <nav className="absolute left-1/2 z-40 hidden -translate-x-1/2 items-center md:flex">
            <div className="flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className="relative px-4 py-2 text-[14px] font-medium transition-colors duration-200 group whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      <span className="group-hover:text-white transition-colors duration-200">{link.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                      <span className="absolute bottom-0.5 left-4 right-4 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 opacity-30" />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full mt-2 w-52 rounded-xl bg-[#161616] border border-white/[0.06] shadow-2xl py-1.5">
                        {serviceLinks.map((sl) => (
                          <a
                            key={sl.label}
                            href={sl.href}
                            className="block px-4 py-2.5 text-[13px] text-white/40 hover:text-white hover:bg-white/[0.04] transition-colors"
                          >
                            {sl.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative px-4 py-2 text-[14px] font-medium transition-colors duration-200 group whitespace-nowrap"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    <span className="group-hover:text-white transition-colors duration-200">{link.label}</span>
                    <span className="absolute bottom-0.5 left-4 right-4 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 opacity-30" />
                  </a>
                )
              )}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3 z-50 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent text-white/60 hover:text-white hover:border-white/30 hover:bg-white/[0.04] px-6 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-white bg-white/[0.06] border border-white/[0.08] transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 right-0 w-80 bg-[#0a0a0a] border-l border-white/[0.06] z-50 md:hidden transform transition-transform duration-500 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-12">
            <img src="/images/maktal-logo.png" alt="MakTal Technologies" className="h-7 w-auto" />
            <button onClick={() => setMobileOpen(false)} className="p-2 rounded-full text-white/30 hover:text-white hover:bg-white/[0.05] transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/40 hover:text-white hover:bg-white/[0.04] font-medium py-3 px-4 rounded-xl transition-all text-[15px]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-8 border-t border-white/[0.06]">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-full border border-white/15 bg-transparent text-white/60 hover:text-white hover:border-white/30 py-3 text-[13px] font-semibold tracking-wide transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
