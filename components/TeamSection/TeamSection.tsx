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
    <div className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#f8f9fb] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full  text-[#0077B6] text-xs font-medium tracking-widest uppercase mb-6">
              Our Team
            </span>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-snug max-w-3xl mx-auto">
              A team of <span className="gradient-text">passionate builders</span> creating digital experiences
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="mt-5 text-black/40 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              We have a well-educated team of designers, developers, and digital marketing experts who deliver high-quality work tailored to your needs.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid - Desktop */}
        <ScrollReveal delay={200}>
          <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-4 h-120">
            {/* Large image - spans 2 rows */}
            <div className="row-span-2 group relative rounded-2xl overflow-hidden border border-black/6 shadow-sm">
              <img
                src={teamImages[0].src}
                alt={teamImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Top right image */}
            <div className="group relative rounded-2xl overflow-hidden border border-black/6 shadow-sm">
              <img
                src={teamImages[1].src}
                alt={teamImages[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Middle right image */}
            <div className="group relative rounded-2xl overflow-hidden border border-black/6 shadow-sm">
              <img
                src={teamImages[2].src}
                alt={teamImages[2].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Bottom right - spans 2 columns */}
            <div className="col-span-2 group relative rounded-2xl overflow-hidden border border-black/6 shadow-sm">
              <img
                src={teamImages[3].src}
                alt={teamImages[3].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile scroll gallery */}
        <ScrollReveal delay={200}>
          <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-5 px-5 pb-4 hide-scrollbar">
            {teamImages.map((img, i) => (
              <div key={i} className="shrink-0 snap-center w-[75vw] h-56 rounded-2xl overflow-hidden border border-black/6 shadow-sm">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={260}>
          <div className="mt-12 text-center">
            <button className="px-7 py-2.5 rounded-full border border-black/1 bg-transparent text-black/60 text-sm font-medium tracking-wide transition-all duration-300 hover:border-[#00AEEF]/40 hover:text-[#00AEEF] hover:bg-[#00AEEF]/5">
              Learn More
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
