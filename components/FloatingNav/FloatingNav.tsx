'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Our Works', href: '#works' },
  { label: 'Blog', href: '#blog' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#contact' },
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
            ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-black/[0.06] shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <div className="relative">
              <span className={`text-xl sm:text-2xl font-extrabold tracking-tight uppercase ${scrolled ? 'text-black' : 'text-white'}`}>
                MAK<span className="text-[#00AEEF]">TAL</span>
              </span>
              <sup className={`text-[8px] sm:text-[10px] font-bold -top-1 relative ml-0.5 ${scrolled ? 'text-black/30' : 'text-white/50'}`}>®</sup>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.label === 'Services' ? (
                <div key={link.label} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                  <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${scrolled ? 'text-black/50 hover:text-black hover:bg-black/[0.04]' : 'text-white/70 hover:text-white hover:bg-white/[0.08]'}`}>
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full mt-1 w-56 rounded-xl bg-white border border-black/[0.08] shadow-xl shadow-black/[0.08] py-2">
                      {serviceLinks.map((sl) => (
                        <a key={sl.label} href={sl.href} className="block px-4 py-2.5 text-sm text-black/50 hover:text-[#00AEEF] hover:bg-[#00AEEF]/5 transition-colors">
                          {sl.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={link.label} href={link.href} className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${scrolled ? 'text-black/50 hover:text-black hover:bg-black/[0.04]' : 'text-white/70 hover:text-white hover:bg-white/[0.08]'}`}>
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/917736101555"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl transition-all ${scrolled ? 'text-black/30 hover:text-[#00AEEF] hover:bg-[#00AEEF]/5' : 'text-white/50 hover:text-white hover:bg-white/[0.08]'}`}
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="btn-brand px-6 py-2.5 rounded-full text-sm font-semibold"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href="#contact" className="btn-brand px-4 py-2 rounded-full text-xs font-semibold">
              Call Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-black/50 hover:text-black hover:bg-black/[0.04] transition-all"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 right-0 w-[300px] bg-white border-l border-black/[0.08] z-50 lg:hidden transform transition-transform duration-500 ease-out shadow-2xl ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-10">
            <span className="text-xl font-extrabold tracking-tight text-black uppercase">
              MAKTA<span className="text-[#00AEEF]">L</span>
            </span>
            <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl text-black/30 hover:text-black hover:bg-black/[0.04] transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-black/50 hover:text-[#00AEEF] hover:bg-[#00AEEF]/5 font-medium py-3 px-4 rounded-xl transition-all text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-6 border-t border-black/[0.06]">
            <a
              href="https://wa.me/917736101555"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] hover:text-[#1da851] font-medium text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
