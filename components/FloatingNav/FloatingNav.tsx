'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

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
  const [hidden, setHidden] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      
      // Hero section extends approximately 80vh + padding (roughly 1.05 to 1.1 viewport heights)
      // Show navbar only while within the hero section
      const heroBoundary = window.innerHeight * 1.05;
      
      if (currentY < heroBoundary) {
        // Still in hero section - show navbar
        setIsHeroSection(true);
        setHidden(false);
      } else {
        // Past hero section - hide navbar and never show again
        setIsHeroSection(false);
        setHidden(true);
      }
    };

    // Check initial position on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
        style={{ paddingTop: '12px', paddingBottom: '12px' }}
      >          <div className="max-w-350 mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between w-full">
          <a href="/" className="group flex items-center z-50 shrink-0">
            <img src="/images/maktal-logo.png" alt="MakTal Technologies" className="h-8 sm:h-9 w-auto transition-opacity duration-300 group-hover:opacity-80" />
          </a>

          <nav className="absolute left-1/2 transform -translate-x-1/2 z-40 hidden items-center md:flex">
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
                      className="relative px-4 py-2 text-[15px] font-medium transition-colors duration-200 group whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
                      style={{ color: '#a0aec0' }}
                    >
                      <span className="group-hover:text-white transition-colors duration-200">{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                      <span className="absolute bottom-0.5 left-4 right-4 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 opacity-30" />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full mt-2 w-52 rounded-xl bg-[#161616] border border-white/6 shadow-2xl py-1.5">
                        {serviceLinks.map((sl) => (
                          <a
                            key={sl.label}
                            href={sl.href}
                            className="block px-4 py-2.5 text-[13px] text-white/40 hover:text-white hover:bg-white/4 transition-colors"
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
                    className="relative px-4 py-2 text-[15px] font-medium transition-colors duration-200 group whitespace-nowrap"
                    style={{ color: '#a0aec0' }}
                  >
                    <span className="group-hover:text-white transition-colors duration-200">{link.label}</span>
                    <span className="absolute bottom-0.5 left-4 right-4 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 opacity-30" />
                  </a>
                )
              )}
            </div>
          </nav>


          {/* Call Now Button - Desktop - positioned to the right */}
          <div className="hidden md:block justify-end">
            <a
              href="tel:+971501234567"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00AEEF] text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[#00AEEF]/90 hover:shadow-lg hover:shadow-[#00AEEF]/30 hover:scale-105 active:scale-95"
            >
              Call Now 
            </a>
          </div>

          {/* Mobile menu toggle + Call Now Button */}
          <div className="flex items-center justify-between md:hidden z-50 w-full">
            <a
              href="tel:+971501234567"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00AEEF] text-white text-xs font-medium transition-all duration-300 hover:bg-[#00AEEF]/90 hover:shadow-lg hover:shadow-[#00AEEF]/20 active:scale-95"
            >
              Call Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-white bg-white/6 border border-white/8 transition-all duration-300"
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
        className={`fixed inset-y-0 right-0 w-[85vw] max-w-80 bg-[#0a0a0a] border-l border-white/6 z-50 md:hidden transform transition-transform duration-500 ease-out overflow-y-auto ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 sm:p-8 flex flex-col min-h-full" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
          <div className="flex items-center justify-between mb-12">
            <img src="/images/maktal-logo.png" alt="MakTal Technologies" className="h-7 w-auto" />
            <button onClick={() => setMobileOpen(false)} className="p-2 rounded-full text-white/30 hover:text-white hover:bg-white/5 transition-all" aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/40 hover:text-white hover:bg-white/5 font-medium py-3 px-4 rounded-xl transition-all text-[15px]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
