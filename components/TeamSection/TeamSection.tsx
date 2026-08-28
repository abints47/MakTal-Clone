'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

const teamImages = [
  'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-working-in-office.png',
  'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-sitting-around-table-chatting.png',
  'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-team-brainstorming-ideas.png',
  'https://maktalseo.com/wp-content/uploads/2025/02/Maktal-office-interior.png',
];

const cardRotations = [
  { rotate: -3, y: 8 },
  { rotate: 2, y: -4 },
  { rotate: -1.5, y: 6 },
  { rotate: 3, y: -2 },
];

export default function TeamSection() {
  return (
    <div className="relative w-full py-20 sm:py-28 lg:py-36">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00AEEF]/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.06] bg-[#00AEEF]/5 text-[#0077B6] text-xs font-medium tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
            Our Team
          </span>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-snug max-w-3xl mx-auto">
            A team of{' '}
            <span className="gradient-text">passionate builders</span>{' '}
            creating digital experiences
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="mt-5 text-black/40 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We have a well-educated team of designers, developers, and digital marketing experts who deliver high-quality work tailored to your needs.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-14 w-full overflow-visible">
            <div className="hidden md:flex justify-center items-end gap-3 lg:gap-4 px-4">
              {teamImages.map((src, i) => (
                <div
                  key={i}
                  className="relative flex-1 max-w-[24vw] rounded-2xl overflow-hidden border border-black/[0.06] shadow-lg shadow-black/[0.06] group"
                  style={{
                    height: '420px',
                    transform: `rotate(${cardRotations[i].rotate}deg) translateY(${cardRotations[i].y}px)`,
                  }}
                >
                  <img
                    src={src}
                    alt={`Team member ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
            <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-6 px-6 pb-4 hide-scrollbar">
              {teamImages.map((src, i) => (
                <div key={i} className="shrink-0 snap-center w-[70vw] h-52 rounded-2xl overflow-hidden border border-black/[0.06] shadow-lg shadow-black/[0.06]">
                  <img src={src} alt={`Team member ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={260}>
          <div className="mt-12">
            <button className="px-7 py-2.5 rounded-full border border-black/[0.1] bg-transparent text-black/60 text-sm font-medium tracking-wide transition-all duration-300 hover:border-[#00AEEF]/40 hover:text-[#00AEEF] hover:bg-[#00AEEF]/5">
              Learn More
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
