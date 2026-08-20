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
    <div className="relative w-full py-16 sm:py-24 lg:pt-72">
      <div className="relative z-10 max-w-8xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <ScrollReveal>
          <p className="text-[#cbfb45] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Friendly Team in Action
          </p>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={80}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f6f6f4] tracking-tight leading-snug max-w-3xl mx-auto">
            Our friendly team builds strong client relationships.
          </h2>
        </ScrollReveal>

        {/* Paragraph */}
        <ScrollReveal delay={140}>
          <p className="mt-5 text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We have a well educated team of designers, developers and digital marketing experts
            who can deliver high quality work according to your needs.
          </p>
        </ScrollReveal>

        {/* Image Gallery */}
        <ScrollReveal delay={200}>
          <div className="mt-14 sm:mt-20 w-full overflow-visible">
            {/* Desktop / Tablet: perspective grid */}
            <div className="hidden md:flex justify-center items-end gap-3 lg:gap-4 px-4">
              {teamImages.map((src, i) => (
                <div
                  key={i}
                  className="relative flex-1 max-w-[24vw] rounded-2xl overflow-hidden shadow-lg shadow-black/30"
                  style={{
                    height: '450px',
                    transform: `rotate(${cardRotations[i].rotate}deg) translateY(${cardRotations[i].y}px)`,
                  }}
                >
                  <img
                    src={src}
                    alt={`Team member ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Mobile: horizontal scroll carousel */}
            <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-6 px-6 pb-4 hide-scrollbar">
              {teamImages.map((src, i) => (
                <div
                  key={i}
                  className="shrink-0 snap-center w-[70vw] h-50 rounded-2xl overflow-hidden shadow-lg shadow-black/30"
                >
                  <img
                    src={src}
                    alt={`Team member ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Read More Button */}
        <ScrollReveal delay={260}>
          <div className="mt-12 sm:mt-16">
            <button className="px-7 py-2 rounded-full border border-white/20 bg-transparent text-[#f6f6f4] text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:border-[#cbfb45]/50 hover:text-[#cbfb45]">
              Read More
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
