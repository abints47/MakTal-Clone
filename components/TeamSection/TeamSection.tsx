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
    <div className="relative w-full py-16 sm:py-20 lg:py-28">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-[#059669] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">Friendly Team in Action</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-snug max-w-3xl mx-auto">Our friendly team builds strong client relationships.</h2>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="mt-4 sm:mt-5 text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">We have a well educated team of designers, developers and digital marketing experts who can deliver high quality work according to your needs.</p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 sm:mt-14 w-full overflow-visible">
            <div className="hidden md:flex justify-center items-end gap-3 lg:gap-4 px-4">
              {teamImages.map((src, i) => (
                <div key={i} className="relative flex-1 max-w-[24vw] rounded-2xl overflow-hidden shadow-lg shadow-black/10" style={{ height: '450px', transform: `rotate(${cardRotations[i].rotate}deg) translateY(${cardRotations[i].y}px)` }}>
                  <img src={src} alt={`Team member ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-6 px-6 pb-4 hide-scrollbar">
              {teamImages.map((src, i) => (
                <div key={i} className="shrink-0 snap-center w-[70vw] h-50 rounded-2xl overflow-hidden shadow-lg shadow-black/10">
                  <img src={src} alt={`Team member ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={260}>
          <div className="mt-10 sm:mt-12">
            <button className="px-6 sm:px-7 py-2.5 rounded-full border border-gray-300 bg-transparent text-[#111827] text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:border-[#059669]/50 hover:text-[#059669]">Read More</button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
