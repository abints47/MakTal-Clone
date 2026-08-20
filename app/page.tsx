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
import BlogSection from '@/components/BlogSection/BlogSection';
import GoogleReviews from '@/components/GoogleReviews/GoogleReviews';
import TeamSection from '@/components/TeamSection/TeamSection';

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
    const cycleInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textsToCycle.length);
    }, 3000);

    return () => clearInterval(cycleInterval);
  }, [textsToCycle.length]);

  // Encryption / Scramble effect runner whenever targetText changes
  useEffect(() => {

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
    <div className="min-h-screen text-[#f6f6f4] font-sans selection:bg-[#cbfb45] selection:text-[#0a0a0b] relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen min-h-87.5 sm:min-h-112.5 overflow-hidden flex flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.25),transparent_30%),linear-gradient(135deg,#0a0a0b_0%,#141416_40%,#0f1112_100%)]">
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

        <aside className={`fixed inset-y-0 left-0 w-1/2 min-w-62.5 max-w-87.5 bg-[#0a0a0b] z-40 lg:hidden transform transition-transform duration-300 shadow-2xl ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} aria-hidden={!mobileMenuOpen}>
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

    <main className="max-w-full mx-auto">

        {/* New Creative Digital Agency Section matching reference */}
       <ScrollReveal>
       <section ref={containerRef} id="works" className="w-full relative overflow-hidden">
          {/* Subtle radial glows — Momentum-style clean dark theme */}
          <div className="absolute top-0 left-1/4 w-175 h-175 bg-[#cbfb45]/4 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-150 h-150 bg-[#cbfb45]/3 rounded-full blur-[140px] pointer-events-none" />

          {/* ── Hero / Services ── */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 sm:pt-32 lg:pt-40 pb-16 text-center">
            <h2 className="text-xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#f6f6f4] tracking-tight leading-tight">
              One-stop Solution for
            </h2>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#cbfb45] tracking-tight font-mono mt-1">
              {displayBrandingText}
            </h1>
            <p className="mt-6 text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              We create stunning, user-friendly websites to help your business stand out and succeed. With expertise in secure web development, we&apos;ll bring your business online and boost sales.
            </p>
          </div>

          {/* ── Process Steps ── */}
          <div className="relative z-10 w-full mx-auto px-6 py-10 sm:py-16 lg:py-12 flex justify-center">
            <div className="grid grid-cols-3 gap-10 place-items-center">
              {[
                { icon: Lightbulb, label: "Plan" },
                { icon: Code2, label: "Develop" },
                { icon: Rocket, label: "Launch" },
              ].map((step, i) => (
                <div key={i} className="group w-full sm:w-24 lg:w-32 h-24 sm:h-26 lg:h-34 mx-auto bg-[#141416] border border-white/10 hover:border-[#cbfb45]/65 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center space-y-2 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#cbfb45]/10">
                  <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#cbfb45]/10 transition-colors">
                    <step.icon className="w-6 h-6 text-slate-300 group-hover:text-[#cbfb45] transition-colors" />
                  </div>
                  <span className="text-slate-200 group-hover:text-white text-[11px] sm:text-xs font-semibold tracking-wide transition-colors">{step.label}</span>
                </div>
              ))}
            </div>
          </div>


          {/* ── Our Works ── */}
          <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pt-12 sm:pt-16 lg:pt-70 space-y-16 sm:space-y-20 lg:space-y-10">
          <div className="text-center">
            <span className="text-[#cbfb45] text-sm sm:text-sm font-semibold  tracking-[0.2em] uppercase">
              OUR WORKS
            </span>
            <h2 className="text-3xl sm:text-5xl pt-6 font-extrabold text-[#F8FAFC] tracking-tight">
              Few of our favorite projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 pt-3 sm:pt-12 lg:pt-15 max-w-5xl mx-auto">
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
                <div className="relative w-full h-44 sm:h-52 md:h-66 overflow-hidden bg-[#141416]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,23,0.2),rgba(7,11,23,0.6))] z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

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

          <ScrollReveal delay={200}>
            <div className="flex justify-center pt-1">
              <a 
                href="#works" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/20 bg-transparent hover:bg-white/5 text-[#f6f6f4] font-medium text-sm tracking-wide transition-all duration-300 hover:border-[#cbfb45]/50"
              >
                View All
              </a>
            </div>
          </ScrollReveal>
          </div>

          {/* ── Team Section ── */}
          <TeamSection />

          {/* ── Blog ── */}
          <BlogSection />

          {/* ── CTA ── */}
          <ScrollReveal delay={100}>
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-28 lg:py-32 text-center">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-125 h-125 bg-[#cbfb45]/3 rounded-full blur-[150px]" />
            </div>
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f6f6f4] tracking-tight">
              Have Something in Mind?
            </h2>
            <p className="relative mt-4 text-white/40 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              We build custom websites that grow your business and attract more customers. Our expert team creates tailored sites designed to exceed your goals.
            </p>
            <a 
              href="#contact" 
              className="relative mt-8 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#cbfb45] text-[#0a0a0b] font-medium text-sm tracking-wide transition-all hover:scale-105 shadow-lg shadow-[#cbfb45]/20"
            >
              Talk to Us
            </a>
          </div>
          </ScrollReveal>
        </section>
        </ScrollReveal>
      </main>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
}