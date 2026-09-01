'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const teamImages = [
  { src: 'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-working-in-office.png', alt: 'Team collaborating at desks' },
  { src: 'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-sitting-around-table-chatting.png', alt: 'Team meeting around table' },
  { src: 'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-brainstorming-ideas.png', alt: 'Team brainstorming session' },
  { src: 'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-office-interior.png', alt: 'Office interior' },
];

export default function TeamSection() {
  return (
    <div className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[#4461F2] text-xs font-mono tracking-[0.22em] uppercase mb-6">
              Our Team
            </span>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-snug max-w-3xl mx-auto">
              A team of <span className="gradient-text">passionate builders</span> creating digital experiences
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="mt-5 text-white/35 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              We have a well-educated team of designers, developers, and digital marketing experts who deliver high-quality work tailored to your needs.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid - Desktop */}
        <ScrollReveal delay={200}>
          <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-4 h-120">
            <div className="row-span-2 group relative rounded-2xl overflow-hidden border border-white/6">
              <img src={teamImages[0].src} alt={teamImages[0].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="group relative rounded-2xl overflow-hidden border border-white/6">
              <img src={teamImages[1].src} alt={teamImages[1].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="group relative rounded-2xl overflow-hidden border border-white/6">
              <img src={teamImages[2].src} alt={teamImages[2].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="col-span-2 group relative rounded-2xl overflow-hidden border border-white/6">
              <img src={teamImages[3].src} alt={teamImages[3].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile scroll gallery */}
        <ScrollReveal delay={200}>
          <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-5 px-5 pb-4 hide-scrollbar">
            {teamImages.map((img, i) => (
              <div key={i} className="shrink-0 snap-center w-[75vw] h-56 rounded-2xl overflow-hidden border border-white/6">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={260}>
          <div className="mt-12 text-center">
            <a href="#about" className="inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-white/10 bg-transparent text-white/50 text-sm font-medium tracking-wide transition-all duration-300 hover:border-[#4461F2]/40 hover:text-[#4461F2] hover:bg-[#4461F2]/5">
              Learn More
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
