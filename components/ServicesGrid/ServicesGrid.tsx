'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const services = [
  {
    title: 'Website Development',
    description:
      'Custom-built, responsive websites using modern frameworks like Next.js, React, and WordPress — designed to convert visitors into customers.',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-9 sm:h-9">
        <rect x="8" y="12" width="48" height="34" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M8 20H56" stroke="currentColor" strokeWidth="2" />
        <circle cx="14" cy="16" r="1.5" fill="currentColor" />
        <circle cx="20" cy="16" r="1.5" fill="currentColor" />
        <circle cx="26" cy="16" r="1.5" fill="currentColor" />
        <path d="M24 40L18 34L24 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 28L46 34L40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 26L28 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="22" y="50" width="20" height="3" rx="1.5" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    description:
      'Strategic campaigns across Google Ads, Meta, and social media to amplify your brand reach and drive qualified traffic to your business.',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-9 sm:h-9">
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
        <path d="M32 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 50V56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 32H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 32H56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'SEO Optimization',
    description:
      'Data-driven SEO strategies that boost your search rankings, increase organic traffic, and deliver long-term sustainable growth.',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-9 sm:h-9">
        <circle cx="28" cy="28" r="16" stroke="currentColor" strokeWidth="2" />
        <path d="M40 40L54 54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 22C22 22 26 18 32 20C38 22 36 28 32 28C28 28 24 30 26 34C28 38 34 36 34 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#cbfb45]/2 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full  mb-6">
              <span className="text-[#cbfb45] text-xs font-semibold tracking-[0.15em] uppercase">
                What We Do
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f6f6f4] tracking-tight leading-tight">
              Services Built for <span className="text-[#cbfb45]">Growth</span>
            </h2>
            <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              End-to-end digital solutions to take your business from idea to launch — and beyond.
            </p>
          </div>
        </ScrollReveal>

        {/* Services — Horizontal layout with dividers */}
        <div className="max-w-4xl mx-auto">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <ScrollReveal delay={index * 100}>
                <div className="group flex items-start gap-6 sm:gap-10 py-8 sm:py-10 cursor-default">
                  {/* Icon */}
                  <div className="shrink-0 mt-1 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/4 border border-white/8 flex items-center justify-center text-slate-400 group-hover:text-[#cbfb45] group-hover:bg-[#cbfb45]/8 group-hover:border-[#cbfb45]/25 transition-all duration-500">
                    {service.svg}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#f6f6f4] tracking-tight group-hover:text-[#cbfb45] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="mt-2 h-px w-6 bg-white/15 group-hover:bg-[#cbfb45]/40 group-hover:w-10 transition-all duration-500" />
                    <p className="mt-3 text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-2xl group-hover:text-slate-300/90 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              {index < services.length - 1 && (
                <div className="h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
