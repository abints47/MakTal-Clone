'use client';

import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#works' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { label: 'Website Development', href: '#services' },
  { label: 'Digital Marketing', href: '#services' },
  { label: 'SEO Optimization', href: '#services' },
];

const contactLinks = [
  { label: 'info@maktal.com', href: 'mailto:info@maktal.com' },
  { label: '+91 7736 101 555', href: 'https://wa.me/917736101555' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Curved divider */}
      <div style={{ position: 'relative', height: '110px', overflow: 'hidden', cursor: 'crosshair', marginBottom: '-2px' }}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
          <path fill="rgba(17,17,17,0.45)" d="M0,90 L0,60 Q360,0 720,40 Q1080,80 1440,30 L1440,90 Z" className="animate-pulse" />
          <path fill="rgba(17,17,17,0.72)" d="M0,90 L0,70 Q360,30 720,55 Q1080,80 1440,50 L1440,90 Z" className="animate-pulse" style={{ animationDelay: '200ms' }} />
          <path fill="#111111" d="M0,90 L0,80 Q360,55 720,70 Q1080,85 1440,65 L1440,90 Z" />
        </svg>
      </div>

      <footer className="relative overflow-hidden" style={{ background: '#111111', color: '#ffffff' }}>
        <div className="absolute inset-0 pointer-events-none grid-pattern opacity-30" />
        <div className="absolute inset-0 pointer-events-none noise-overlay" />

        {/* Ambient glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--brand)]/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--brand)]/5 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1s' }} />

        <div className="relative z-10" style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 clamp(1.5rem, 6vw, 6rem)' }}>
          {/* Top bar */}
          <div className="flex items-center justify-between py-6 border-b border-white/10">
            <span className="text-[11px] font-mono text-white/60 uppercase tracking-widest">© 2026</span>
            <button onClick={scrollToTop} className="group flex items-center gap-3 text-[11px] font-mono text-white/60 hover:text-white uppercase tracking-widest transition-colors cursor-pointer">
              Back to top
              <span className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white transition-all group-hover:scale-110 group-hover:bg-[var(--brand)] group-hover:border-[var(--brand)] group-hover:shadow-[0_0_15px_var(--brand-glow)]">
                <ArrowUp className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* LET'S TALK */}
          <ScrollReveal>
          <div className="pt-16 pb-10 md:pt-24 md:pb-14 group">
            <p className="text-[11px] font-mono text-white/50 uppercase tracking-[0.3em] mb-8">Have a project in mind?</p>
            <h2 className="font-black leading-[0.85] tracking-[-0.05em] select-none transition-all duration-700 group-hover:text-white/10" style={{ fontSize: 'clamp(4.5rem, 13vw, 12rem)', color: 'rgba(255,255,255,0.04)', whiteSpace: 'nowrap' }}>LET&apos;S TALK</h2>
          </div>
          </ScrollReveal>

          {/* Link grid */}
          <ScrollReveal delay={80}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] mb-4">Company</p>
              <ul className="flex flex-col gap-2">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a className="text-[13px] text-white/60 hover:text-white hover:pl-2 transition-all duration-300 inline-block" href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] mb-4">Services</p>
              <ul className="flex flex-col gap-2">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a className="text-[13px] text-white/60 hover:text-[var(--brand)] hover:pl-2 transition-all duration-300 inline-block" href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] mb-4">Get In Touch</p>
              <ul className="flex flex-col gap-2">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-white/60 hover:text-white transition-colors break-all relative inline-block group">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/50 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
                <li className="pt-1">
                  <span className="text-[11px] font-mono text-white/30">Mon–Fri · 9am–6pm IST</span>
                </li>
              </ul>
            </div>
          </div>
          </ScrollReveal>

          {/* CTA row */}
          <ScrollReveal delay={120}>
          <div className="flex flex-wrap items-center gap-3 py-8 border-b border-white/10">
            <a href="https://wa.me/917736101555" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-[13px] text-white cursor-pointer transition-all duration-300 shadow-[0_4px_20px_rgba(37,211,102,0.15)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.3)] hover:-translate-y-1" style={{ background: '#25D366' }}>
              <span>WhatsApp Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="#contact" className="btn-brand inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-[13px] text-white hover:-translate-y-1">
              Start a Project
            </a>
            <p className="text-[9px] font-mono text-white/40 ml-2 hidden md:block uppercase tracking-wider">Free strategy call · Reply in under 1 hr</p>
          </div>
          </ScrollReveal>

          {/* Bottom row */}
          <ScrollReveal delay={160}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 py-7">
            <div className="flex items-center gap-3 flex-wrap">
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full text-white/60 bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:bg-white/10 hover:border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full text-white/60 bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:bg-white/10 hover:border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full text-white/60 bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:bg-white/10 hover:border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-mono text-white/50 mb-1">Design by <Link className="text-white/80 font-semibold hover:text-white transition-colors" href="/">MakTal Technologies</Link></p>
              <p className="text-[10px] font-mono text-white/50">Development by <Link className="text-white/80 font-semibold hover:text-white transition-colors" href="/">MakTal Technologies</Link></p>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </footer>
    </>
  );
}
