'use client';

import React from 'react';
import { ArrowUp, ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react';
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

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
    ),
  },
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden text-white" style={{ background: 'var(--bg)' }}>
      {/* Ambient overlays */}
      <div className="absolute inset-0 pointer-events-none grid-pattern opacity-20" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-[#00AEEF]/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#00AEEF]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8">
        {/* Brand glow divider */}
        <div className="glow-line" />

        {/* ═══ CTA BANNER ═══ */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl mt-12 sm:mt-16 lg:mt-20 border border-[#00AEEF]/10 bg-white/[0.02] p-8 sm:p-12 lg:p-16">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#00AEEF]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-28 -left-20 w-72 h-72 bg-[#00AEEF]/[0.06] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-14">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#00AEEF] mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
                  Have a project in mind?
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-white">
                  Let&apos;s build something{' '}
                  <span className="gradient-text">great together</span>
                </h2>
                <p className="mt-5 text-white/40 text-sm sm:text-base leading-relaxed max-w-xl">
                  Tell us about your idea and we&apos;ll turn it into a website that works as hard as you do. Free strategy call — reply within the hour.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a href="#contact" className="btn-brand group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5">
                  Start a Project
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="https://wa.me/917736101555" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-transparent text-white/70 text-sm font-semibold transition-all duration-300 hover:border-[#00AEEF]/40 hover:text-[#00AEEF] hover:bg-[#00AEEF]/5 hover:-translate-y-0.5">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ═══ LINK GRID ═══ */}
        <ScrollReveal delay={80}>
          <div className="mt-12 sm:mt-16 lg:mt-20 pt-10 sm:pt-14 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 border-t border-white/[0.07]">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1 flex flex-col items-start">
              <Link href="/" className="transition-opacity duration-300 hover:opacity-80">
                <img src="/images/maktal-logo.png" alt="MakTal Technologies" className="h-8 sm:h-9 w-auto" />
              </Link>
              <p className="mt-5 text-[13px] text-white/40 leading-relaxed max-w-xs">
                Full-service website development &amp; digital marketing company helping brands grow online.
              </p>
              <div className="mt-7 flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00AEEF]/40 hover:bg-[#00AEEF]/10 hover:text-[#00AEEF]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="col-span-1">
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] mb-5">Company</p>
              <ul className="flex flex-col gap-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-white/50 hover:text-[#00AEEF] transition-colors duration-300 inline-block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-1">
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] mb-5">Services</p>
              <ul className="flex flex-col gap-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-white/50 hover:text-[#00AEEF] transition-colors duration-300 inline-block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in touch */}
            <div className="col-span-2 md:col-span-1">
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] mb-5">Get In Touch</p>
              <ul className="flex flex-col gap-3.5">
                <li>
                  <a href="mailto:info@maktal.com" className="group inline-flex items-center gap-2.5 text-[13px] text-white/50 hover:text-[#00AEEF] transition-colors duration-300">
                    <Mail className="w-4 h-4 text-[#00AEEF]/70 group-hover:text-[#00AEEF] transition-colors duration-300 shrink-0" />
                    info@maktal.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917736101555" className="group inline-flex items-center gap-2.5 text-[13px] text-white/50 hover:text-[#00AEEF] transition-colors duration-300">
                    <Phone className="w-4 h-4 text-[#00AEEF]/70 group-hover:text-[#00AEEF] transition-colors duration-300 shrink-0" />
                    +91 7736 101 555
                  </a>
                </li>
                <li className="pt-2">
                  <p className="text-[11px] font-mono text-white/30 leading-relaxed">Mon–Fri · 9am–6pm IST</p>
                  <p className="text-[11px] font-mono text-white/30 leading-relaxed mt-1">Thrissur · Ernakulam, Kerala</p>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* ═══ BOTTOM BAR ═══ */}
        <ScrollReveal delay={140}>
          <div className="mt-12 sm:mt-16 pt-7 pb-4 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="order-3 md:order-1 text-[11px] font-mono text-white/35 tracking-wider text-center md:text-left">
              © 2026 MakTal Technologies. All rights reserved.
            </p>
            <p className="order-2 text-[11px] font-mono text-white/35 tracking-wider">
              Design &amp; development by{' '}
              <Link href="/" className="text-white/70 font-semibold hover:text-[#00AEEF] transition-colors duration-300">
                MakTal Technologies
              </Link>
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group order-1 md:order-3 flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 hover:text-[#00AEEF] transition-colors duration-300 cursor-pointer"
            >
              Back to top
              <span className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all duration-300 group-hover:border-[#00AEEF]/40 group-hover:bg-[#00AEEF]/10 group-hover:-translate-y-0.5">
                <ArrowUp className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
