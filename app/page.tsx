'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Lightbulb,
  Code2, 
  Rocket,
  MessageSquare,  
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat';

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
    <div className="min-h-screen bg-[linear-gradient(180deg,#0a0a0b_0%,#141416_50%,#0a0a0b_100%)] text-[#f6f6f4] font-sans selection:bg-[#cbfb45] selection:text-[#0a0a0b] relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen min-h-[350px] sm:min-h-[450px] overflow-hidden flex flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.25),transparent_30%),linear-gradient(135deg,#0a0a0b_0%,#141416_40%,#0f1112_100%)]">
        {/* Video Background with Dark Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/it.jpg"
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.85) contrast(1.1) brightness(0.5)' }}
          >
            <source src="https://assets.mixkit.co/videos/46635/46635-720.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0a0a0b]/40" />
        </div>

        {/* Navbar */}
        <header className="relative z-20 w-full px-6 lg:px-12 py-5 flex items-center justify-between  bg-transparent">
          {/* Logo */}
          <div className="relative inline-flex items-center pl-4 sm:pl-10 lg:pl-15 pt-2 sm:pt-4 lg:pt-6">
            <span 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white uppercase select-none"
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

        <aside className={`fixed inset-y-0 left-0 w-1/2 min-w-[250px] max-w-[350px] bg-[#0a0a0b] z-40 lg:hidden transform transition-transform duration-300 shadow-2xl ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} aria-hidden={!mobileMenuOpen}>
          <div className="p-6 flex flex-col h-full">
            {/* Brand Logo & Name */}
            <div className="flex items-center space-x-2 mb-8">
              <span 
                className="text-2xl font-extrabold tracking-tight text-white uppercase select-none"
                style={{
                  fontFamily: 'Montserrat, Gotham, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
              >
                MAKTAL
              </span>
              <sup className="pb-4 text-xs font-bold text-white select-none">®</sup>
            </div>
            <nav className="flex flex-col space-y-4">
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

    <main className="max-w-full mx-auto bg-transparent">

        {/* New Creative Digital Agency Section matching reference */}
       <section ref={containerRef} className="w-full relative overflow-hidden rounded-b-4xl border border-[#141416]/30 pt-20 pb-0 px-6 text-center shadow-6xl bg-[linear-gradient(180deg,#0a0a0b_0%,#141416_50%,#0a0a0b_100%)]">
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#cbfb45]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#cbfb45]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-6">
            {/* Headlines */}
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-8 sm:pt-12 lg:pt-15 font-bold text-[#f6f6f4] tracking-tight">
                One-stop Solution for
              </h2>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#cbfb45] tracking-tight font-mono h-10 sm:h-12 lg:h-14 flex items-center justify-center">
                {displayBrandingText}
              </h1>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto pt-2 px-2 sm:px-0">
              We create stunning, user-friendly websites to help your business stand out and succeed. With expertise in secure web development, we&apos;ll bring your business online and boost sales.
            </p>

            {/* Three Evenly Spaced Vertical Rounded-Rectangle Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 py-12 sm:py-20 lg:py-25 max-w-xs sm:max-w-lg md:max-w-xl mx-auto w-full">
              {/* Plan Card */}
              <div className="group w-full sm:w-28 lg:w-30 h-28 sm:h-30 lg:h-33 mx-auto bg-[#141416] border border-white/10 hover:border-[#cbfb45]/65 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center space-y-2 sm:space-y-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#cbfb45]/10">
                <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#cbfb45]/10 transition-colors">
                  <Lightbulb className="w-8 h-8 text-slate-300 group-hover:text-[#cbfb45] transition-colors" />
                </div>
                <span className="text-slate-200 group-hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors">Plan</span>
              </div>

              {/* Develop Card */}
              <div className="group w-full sm:w-28 lg:w-30 h-28 sm:h-30 lg:h-33 mx-auto bg-[#141416] border border-white/10 hover:border-[#cbfb45]/65 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center space-y-2 sm:space-y-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#cbfb45]/10">
                <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#cbfb45]/10 transition-colors">
                  <Code2 className="w-8 h-8 text-slate-300 group-hover:text-[#cbfb45] transition-colors" />
                </div>
                <span className="text-slate-200 group-hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors">Develop</span>
              </div>

              {/* Launch Card */}
              <div className="group w-full sm:w-28 lg:w-30 h-28 sm:h-30 lg:h-33 mx-auto bg-[#141416] border border-white/10 hover:border-[#cbfb45]/65 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center space-y-2 sm:space-y-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#cbfb45]/10">
                <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#cbfb45]/10 transition-colors">
                  <Rocket className="w-8 h-8 text-slate-300 group-hover:text-[#cbfb45] transition-colors" />
                </div>
                <span className="text-slate-200 group-hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors">Launch</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Our Works / Projects Showcase */}
        <ScrollReveal>
        <section id="works" className="w-full px-4 sm:px-8 md:px-12 py-12 sm:py-16 lg:py-20 bg-[linear-gradient(180deg,#0a0a0b_0%,#141416_50%,#0a0a0b_100%)]">
          <div className="text-center">
            <span className="text-[#cbfb45] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              OUR WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Few of our favorite projects
            </h2>
          </div>

          {/* 2-Column Responsive Grid with Decreased Card Size */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 pt-8 sm:pt-12 lg:pt-15 max-w-4xl mx-auto">
            {[
              {
                title: "BlueTerra, UAE",
                desc: "Boutique travel company website developed in Next.js & Python",
                image: "https://maktalseo.com/wp-content/uploads/2025/10/blueterra-travel-website-development-work-1.avif",
                url: "https://www.myblueterra.com/"
              },
              {
                title: "Drizzla, USA",
                desc: "Outcome-as-a-Service (OaaS) partner website developed in React.js & Python",
                image: "https://maktalseo.com/wp-content/uploads/2025/10/drizzla-react-js-website-development-1.avif",
                url: "https://www.drizzla.com/"
              },
              {
                title: "Solo Flowers, UAE",
                desc: "Flower delivery E-commerce website development in WordPress & WooCommerce.",
                image: "https://maktalseo.com/wp-content/uploads/2025/10/solo-flowers-ecommerce-website-development.avif",
                url: "https://www.soloflowers.ae"
              },
              {
                title: "World of Appliances, Bahrain",
                desc: "WordPress based E-commerce website development project with Shipping and Payment options.",
                image: "https://maktalseo.com/wp-content/uploads/2025/10/ecommerce-development-wordpress.avif",
                url: "https://www.worldofappliancesbh.com/"
              }
            ].map((project, index) => (
              <ScrollReveal key={index} delay={index * 150}>
              <div 
                className="group relative rounded-2xl overflow-hidden bg-[#141416]/50 border border-[#141416]/40 hover:border-[#cbfb45] transition-all duration-300 hover:shadow-2xl hover:shadow-[#cbfb45]/10 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Project Image Mockup Container with Reduced Height */}
                <div className="relative w-full h-44 sm:h-52 md:h-56 overflow-hidden bg-[#141416]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,23,0.2),rgba(7,11,23,0.6))] z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content with Compact Spacing */}
                <div className="p-5 sm:p-6 flex flex-col grow justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#f6f6f4] group-hover:text-[#cbfb45] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <Link 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center space-x-2 text-[#94A3B8] hover:text-[#cbfb45] font-medium text-xs sm:text-sm transition-colors group/link"
                    >
                      <span>Visit Website</span>
                      <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
        </ScrollReveal>

        {/* Section 2: Ambient CTA / Next Section */}
        <ScrollReveal delay={100}>
        <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#141416]/20 px-6 py-12 sm:p-16 lg:p-20 xl:p-30 text-center space-y-4 sm:space-y-6 shadow-2xl bg-[linear-gradient(135deg,#0a0a0b_0%,#141416_40%)]">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#cbfb45]/14 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#cbfb45]/12 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Have Something in Mind?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              We build custom websites that grow your business and attract more customers. Our expert team creates tailored sites designed to exceed your goals.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#cbfb45] text-[#0a0a0b] font-medium text-sm sm:text-base tracking-wide transition-all shadow-lg shadow-[#cbfb45]/25 hover:scale-105"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </section>
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
}