'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#050505]'
            : 'py-5 bg-[#050505]'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-[clamp(1rem,3vw,4.5rem)] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center z-50 flex-shrink-0">
            <span className="font-black tracking-[-0.05em] text-white group-hover:text-white/80 transition-colors duration-300 leading-none" style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}>
              MAK<span className="text-[#00D4FF]">TAL</span>
              <span className="inline-block w-[2px] ml-[1px] bg-white/50 align-middle" style={{ height: '0.8em', borderRadius: '1px' }} />
            </span>
          </Link>

          {/* Desktop Nav - Centered */}
          <nav className="absolute left-1/2 z-40 hidden -translate-x-1/2 items-center md:flex">
            <div className="flex items-center gap-0 rounded-full px-1 py-1 transition-all duration-500">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className="relative px-3.5 py-2 font-medium transition-colors duration-200 group whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                      style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(14px, 1.3vw, 18px)' }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                      <span className="absolute bottom-1 left-3 right-3 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" style={{ opacity: 0.4 }} />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full mt-1 w-56 rounded-2xl bg-[#0d0d0e] border border-white/8 shadow-2xl py-2">
                        {serviceLinks.map((sl) => (
                          <a key={sl.label} href={sl.href} className="block px-4 py-2.5 text-sm text-white/50 hover:text-[#00D4FF] hover:bg-[#00D4FF]/5 transition-colors">
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
                    className="relative px-3.5 py-2 font-medium transition-colors duration-200 group whitespace-nowrap"
                    style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(14px, 1.3vw, 18px)' }}
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-3 right-3 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" style={{ opacity: 0.4 }} />
                  </a>
                )
              )}
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 z-50 shrink-0 bg-[#00D4FF]/80 hover:bg-[#00D4FF]/50 rounded-4xl">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full border px-7 py-2 text-[14.5px] font-extrabold tracking-[0.04em] backdrop-blur-md transition-all duration-300 border-white/20 bg-transparent text-white/90 hover:border-white/40 hover:bg-white/5"
            >
              <span className="text-white">Call Now</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <aside
        className={`fixed inset-y-0 right-0 w-72 bg-[#0a0a0b] border-l border-white/8 z-50 md:hidden transform transition-transform duration-500 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-10">
            <span className="text-xl font-black tracking-[-0.05em] text-white">
              MAK<span className="text-[#00D4FF]">TAL</span>
            </span>
            <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl text-white/30 hover:text-white hover:bg-white/5 transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/50 hover:text-[#00D4FF] hover:bg-[#00D4FF]/5 font-medium py-3 px-4 rounded-xl transition-all text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-6 border-t border-white/8">
            <a
              href="https://wa.me/917736101555"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] hover:text-[#1da851] font-medium text-sm transition-colors"
            >
              <span>WhatsApp Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}