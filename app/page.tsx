'use client';

import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-slate-800 text-white font-sans selection:bg-cyan-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full h-230 bg-gray-100 overflow-hidden flex flex-col justify-between">
        {/* Background Image with Dark Semi-Transparent Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 transform transition-transform duration-1000"
          style={{ 
            backgroundImage: `url('/images/it.jpg')` 
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-slate-100/5 via-slate-100/20 to-slate-900/50 " />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Navbar */}
        <header className="relative z-20 w-full px-6 lg:px-12 py-5 flex items-center justify-between  bg-transparent">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-4xl font-semibold tracking-wider pl-15 pt-6 text-white">
              MAKTAL
            </span>
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-lg font-medium text-slate-200">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full mt-2 w-48 rounded-xl bg-slate-900/95 border border-white/10 shadow-xl py-2 backdrop-blur-md">
                  <a href="#web-dev" className="block px-4 py-2 text-sm text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-300">Website Development</a>
                  <a href="#digital-marketing" className="block px-4 py-2 text-sm text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-300">Digital Marketing</a>
                  <a href="#seo" className="block px-4 py-2 text-sm text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-300">SEO Optimization</a>
                </div>
              )}
            </div>

            <a href="#works" className="hover:text-cyan-400 transition-colors">Our Works</a>
            <a href="#blog" className="hover:text-cyan-400 transition-colors">Blog</a>
            <a href="#careers" className="hover:text-cyan-400 transition-colors">Careers</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Us</a>
          </nav>

          {/* Far Right Action Items */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://whatsapp.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 text-white hover:bg-black hover:text-white transition-all shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-800 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium text-xs flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-950/95 border-b border-white/10 p-6 z-30 lg:hidden backdrop-blur-xl flex flex-col space-y-4 shadow-2xl">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-cyan-400 font-medium">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-cyan-400 font-medium">Services</a>
            <a href="#works" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-cyan-400 font-medium">Our Works</a>
            <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-cyan-400 font-medium">Blog</a>
            <a href="#careers" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-cyan-400 font-medium">Careers</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-cyan-400 font-medium">Contact Us</a>
            <div className="pt-2 flex items-center space-x-4">
              <a href="https://whatsapp.com" className="flex items-center space-x-2 text-emerald-400 font-medium text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center my-auto flex flex-col items-center justify-center">
          <span className="text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-3">
            MAKTAL TECHNOLOGIES
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl mb-6">
            Website Development & <br className="hidden sm:inline" /> Digital Marketing
          </h1>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/40 bg-white/5 hover:bg-white/10 text-white font-medium text-sm tracking-wide transition-all duration-300 hover:border-blue-100 backdrop-blur-sm"
          >
            GET IN TOUCH
          </a>
        </div>

        <div className="pb-6"></div>
      </section>

     <main className="max-w-full mx-auto px-6 py-20 space-y-24">

        {/* New Creative Digital Agency Section matching reference */}
        <section className="relative overflow-hidden rounded-4xl bg-[#0d0d1c] border border-purple-900/30 py-20 px-6 text-center shadow-6xl">
          {/* Subtle purple-blue atmospheric gradients & soft violet glow toward bottom-left */}
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-violet-600/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-6">
            {/* Headlines */}
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c4b5fd] tracking-tight">
                One-stop Solution for
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cyan-400 tracking-tight drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">
                Branding Design
              </h1>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-150 mx-auto pt-2">
              We create stunning, user-friendly websites to help your business stand out and succeed. With expertise in secure web development, we&apos;ll bring your business online and boost sales.
            </p>

            {/* Three Evenly Spaced Vertical Rounded-Rectangle Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-10 max-w-xl mx-auto w-full">
              {/* Plan Card */}
              <div className="w-full sm:w-28 h-33 mx-auto bg-[#13132b]/80 border border-slate-700/50 rounded-lg p-4 flex flex-col items-center justify-center space-y-3 backdrop-blur-sm transition-transform hover:scale-105 duration-300">
                <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.75 6.75 0 000-13.5m0 13.5a6.75 6.75 0 010-13.5m0 13.5V6m0 0h.008v.008H12V6z" />
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide">Plan</span>
              </div>

              {/* Develop Card */}
              <div className="w-full sm:w-28 h-33 mx-auto bg-[#13132b]/80 border border-slate-700/50 rounded-lg p-4 flex flex-col items-center justify-center space-y-3 backdrop-blur-sm transition-transform hover:scale-105 duration-300">
                <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 172.25v1.5a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-1.5m3-13.5H6a2.25 2.25 0 00-2.25 2.25v7.5A2.25 2.25 0 006 15.75h12a2.25 2.25 0 002.25-2.25v-7.5A2.25 2.25 0 0018 3.75z" />
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide">Develop</span>
              </div>

              {/* Launch Card */}
              <div className="w-full sm:w-28 h-33 mx-auto bg-[#13132b]/80 border border-slate-700/50 rounded-lg p-4 flex flex-col items-center justify-center space-y-3 backdrop-blur-sm transition-transform hover:scale-105 duration-300">
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
            <span className="text-purple-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              OUR WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
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
                className="group relative bg-slate-900/60 rounded-2xl overflow-hidden border border-[#7c2bbd]/40 hover:border-[#7c2bbd] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20 hover:-translate-y-1 flex flex-col justify-between backdrop-blur-sm"
              >
                {/* Project Image Mockup Container */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-cyan-400 font-medium text-sm sm:text-base transition-colors group/link"
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
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-purple-500/20 p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          {/* Subtle purple background ambient glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Partner with Maktal Technologies to craft high-performance websites and effective digital strategies customized for your brand's growth.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium text-sm sm:text-base tracking-wide transition-all shadow-lg shadow-cyan-500/25 hover:scale-105"
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