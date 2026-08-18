'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MessageSquare, 
  Mail, 
  Heart, 
  Send, 
  MessageCircle
} from 'lucide-react';

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // States and refs for the Encryption/Scramble Scroll Animation and Cycling Texts
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const textsToCycle = [
    "Logo Design",
    "Social Media",
    "Mobile-App Development",
    "Website Development",
    "Design Services",
    "Digital Marketing",
    "SEO Optimization",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const targetText = textsToCycle[currentIndex];
  const [displayBrandingText, setDisplayBrandingText] = useState(targetText);

  // Intersection Observer to trigger effect when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run once when scrolled into view
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Effect to cycle through the texts every 3 seconds
  useEffect(() => {
    if (!isVisible) return;

    const cycleInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textsToCycle.length);
    }, 3000);

    return () => clearInterval(cycleInterval);
  }, [isVisible, textsToCycle.length]);

  // Encryption / Scramble effect runner whenever targetText changes
  useEffect(() => {
    if (!isVisible) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>/-_+";
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayBrandingText(
        textsToCycle[currentIndex]
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) {
              return textsToCycle[currentIndex][index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= textsToCycle[currentIndex].length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, isVisible]);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#f6f6f4] font-sans selection:bg-[#cbfb45] selection:text-[#0a0a0b]">
      {/* Hero Section */}
      <section className="relative w-full h-230 overflow-hidden flex flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.25),transparent_30%),linear-gradient(135deg,#0a0a0b_0%,#141416_40%,#0f1112_100%)]">
        {/* Background Image with Dark Semi-Transparent Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 transform transition-transform duration-1000"
          style={{ 
            backgroundImage: `linear-gradient(rgba(10,10,11,0.38), rgba(10,10,11,0.62)), url('/images/it.jpg')`,
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'saturate(0.9) contrast(1.05)'
          }}
        >
          {/* professional, subtle darkening to keep the image visible while matching the site */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Navbar */}
        <header className="relative z-20 w-full px-6 lg:px-12 py-5 flex items-center justify-between  bg-transparent">
          {/* Logo */}
          <div className="relative inline-flex items-center pl-15 pt-6">
            <span 
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase select-none"
              style={{
                fontFamily: 'Montserrat, Gotham, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              MAKTAL
            </span>
            <sup className="pb-5 text-sm font-bold text-white select-none">
              ®
            </sup>
          </div>
 
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-lg font-medium text-slate-200">
            <a href="#about" className="hover:text-[#cbfb45] transition-colors">About</a>
              
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 hover:text-[#cbfb45] transition-colors focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full mt-2 w-48 rounded-xl bg-[#141416]/95 border border-white/10 shadow-xl py-2 backdrop-blur-md">
                  <a href="#web-dev" className="block px-4 py-2 text-sm text-slate-300 hover:bg-[#141416]/15 hover:text-[#cbfb45]">Website Development</a>
                  <a href="#digital-marketing" className="block px-4 py-2 text-sm text-slate-300 hover:bg-[#141416]/15 hover:text-[#cbfb45]">Digital Marketing</a>
                  <a href="#seo" className="block px-4 py-2 text-sm text-slate-300 hover:bg-[#141416]/15 hover:text-[#cbfb45]">SEO Optimization</a>
                </div>
              )}
            </div>
 
            <a href="#works" className="hover:text-[#cbfb45] transition-colors">Our Works</a>
            <a href="#blog" className="hover:text-[#cbfb45] transition-colors">Blog</a>
            <a href="#careers" className="hover:text-[#cbfb45] transition-colors">Careers</a>
            <a href="#contact" className="hover:text-[#cbfb45] transition-colors">Contact Us</a>
          </nav>

          {/* Far Right Action Items */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://whatsapp.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 text-[#f6f6f4] hover:bg-[#141416] hover:text-[#cbfb45] transition-all shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-full bg-[#cbfb45] hover:bg-[#b7e73a] text-[#0a0a0b] font-medium text-sm transition-all shadow-lg shadow-[#cbfb45]/25 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-full bg-[#cbfb45] text-[#0a0a0b] font-medium text-xs flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#141416]/80 text-white focus:outline-none"
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        <div className={`fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)} />

        <aside className={`fixed inset-y-0 left-0 w-72 max-w-full bg-[#0a0a0b] z-40 lg:hidden transform transition-transform duration-300 shadow-2xl ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} aria-hidden={!mobileMenuOpen}>
          <div className="p-6 flex flex-col h-full">
            <nav className="flex flex-col space-y-4 mt-6">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-[#cbfb45] font-medium">About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-[#cbfb45] font-medium">Services</a>
              <a href="#works" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-[#cbfb45] font-medium">Our Works</a>
              <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-[#cbfb45] font-medium">Blog</a>
              <a href="#careers" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-[#cbfb45] font-medium">Careers</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-[#cbfb45] font-medium">Contact Us</a>
            </nav>

            <div className="mt-auto pt-4">
              <a href="https://whatsapp.com" className="flex items-center space-x-2 text-[#cbfb45] font-medium text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center my-auto flex flex-col items-center justify-center">
          <span className="text-[#cbfb45] text-xs sm:text-sm font-mono tracking-widest uppercase mb-3">
            MAKTAL TECHNOLOGIES
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F8FAFC] tracking-tight leading-tight max-w-3xl mb-6">
            Website Development & <br className="hidden sm:inline" /> Digital Marketing
          </h1>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/40 bg-transparent hover:bg-[#141416]/60 text-[#f6f6f4] font-medium text-sm tracking-wide transition-all duration-300 hover:border-[#cbfb45] backdrop-blur-sm"
          >
            GET IN TOUCH
          </a>
        </div>

        <div className="pb-6"></div>
      </section>

     <main className="max-w-full mx-auto px-6 py-20 space-y-24">

        {/* New Creative Digital Agency Section matching reference */}
        <section ref={containerRef} className="relative overflow-hidden rounded-4xl border border-[#141416]/30 py-20 px-6 text-center shadow-6xl bg-[linear-gradient(180deg,#0a0a0b_0%,#141416_40%)]">
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#cbfb45]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#cbfb45]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-6">
            {/* Headlines */}
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f6f6f4] tracking-tight">
                One-stop Solution for
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#cbfb45] tracking-tight font-mono h-14 flex items-center justify-center">
                {displayBrandingText}
              </h1>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-150 mx-auto pt-2">
              We create stunning, user-friendly websites to help your business stand out and succeed. With expertise in secure web development, we&apos;ll bring your business online and boost sales.
            </p>

            {/* Three Evenly Spaced Vertical Rounded-Rectangle Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-10 max-w-xl mx-auto w-full">
              {/* Plan Card */}
              <div className="w-full sm:w-28 h-33 mx-auto bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(30,41,59,0.85))] border border-slate-700/50 rounded-lg p-4 flex flex-col items-center justify-center space-y-3 backdrop-blur-sm transition-transform hover:scale-105 duration-300">
                <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.75 6.75 0 000-13.5m0 13.5a6.75 6.75 0 010-13.5m0 13.5V6m0 0h.008v.008H12V6z" />
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide">Plan</span>
              </div>

              {/* Develop Card */}
              <div className="w-full sm:w-28 h-33 mx-auto bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(30,41,59,0.85))] border border-slate-700/50 rounded-lg p-4 flex flex-col items-center justify-center space-y-3 backdrop-blur-sm transition-transform hover:scale-105 duration-300">
                <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 172.25v1.5a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-1.5m3-13.5H6a2.25 2.25 0 00-2.25 2.25v7.5A2.25 2.25 0 006 15.75h12a2.25 2.25 0 002.25-2.25v-7.5A2.25 2.25 0 0018 3.75z" />
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide">Develop</span>
              </div>

              {/* Launch Card */}
              <div className="w-full sm:w-28 h-33 mx-auto bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(30,41,59,0.85))] border border-slate-700/50 rounded-lg p-4 flex flex-col items-center justify-center space-y-3 backdrop-blur-sm transition-transform hover:scale-105 duration-300">
                <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.38 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.5 4.5 0 01-6.364-6.364l4.5 4.5a4.5 4.5 0 001.864 1.864l4.5 4.5z" />
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide">Launch</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Our Works / Projects Showcase */}
        <section id="works" className="space-y-12 max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-[#cbfb45] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              OUR WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Few of our favorite projects
            </h2>
          </div>

          {/* 2-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "BlueTerra, UAE",
                desc: "Boutique travel company website developed in Next.js & Python",
                image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Drizzla, USA",
                desc: "Outcome-as-a-Service (OaaS) partner website developed in React.js & Python",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Solo Flowers, UAE",
                desc: "Flower delivery E-commerce website development in WordPress & WooCommerce.",
                image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "World of Appliances, Bahrain",
                desc: "WordPress based E-commerce website development project with Shipping and Payment options.",
                image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl overflow-hidden border border-[#141416]/40 hover:border-[#cbfb45] transition-all duration-300 hover:shadow-2xl hover:shadow-[#cbfb45]/10 hover:-translate-y-1 flex flex-col justify-between backdrop-blur-sm bg-[linear-gradient(180deg,rgba(15,16,17,0.95),rgba(20,20,22,0.92))]"
              >
                {/* Project Image Mockup Container */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#0B1020]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,23,0.2),rgba(7,11,23,0.6))] z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#f6f6f4] group-hover:text-[#cbfb45] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center space-x-2 text-[#94A3B8] hover:text-[#cbfb45] font-medium text-sm sm:text-base transition-colors group/link"
                    >
                      <span>Visit Website</span>
                      <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Ambient CTA / Next Section */}
        <section className="relative overflow-hidden rounded-3xl border border-[#141416]/20 p-8 sm:p-14 text-center space-y-6 shadow-2xl bg-[linear-gradient(135deg,#0a0a0b_0%,#141416_40%)]">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#cbfb45]/14 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#cbfb45]/12 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Partner with Maktal Technologies to craft high-performance websites and effective digital strategies customized for your brand's growth.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#cbfb45] text-[#0a0a0b] font-medium text-sm sm:text-base tracking-wide transition-all shadow-lg shadow-[#cbfb45]/25 hover:scale-105"
              >
                Start Your Project Today
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}