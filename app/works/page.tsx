'use client';

import React, { useState } from 'react';
import { ExternalLink, ImageIcon } from 'lucide-react';
import { projects } from './data';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import Footer from '@/components/Footer/Footer';
import FloatingNav from '@/components/FloatingNav/FloatingNav';

import ProjectCard from '@/components/ProjectCard/ProjectCard';

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags ?? [])));

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = activeFilter
    ? projects.filter((p) => p.tags?.includes(activeFilter))
    : projects;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-x-hidden">
      <FloatingNav />

      {/* Background Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00AEEF]/10 blur-[150px] rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full -translate-x-1/3" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[#00AEEF]/5 blur-[180px] rounded-full translate-y-1/3" />
      </div>

      {/* Page Title */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-12 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00AEEF]/20 bg-[#00AEEF]/5 text-[#00AEEF] text-xs font-mono tracking-[0.22em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
            Portfolio
          </span>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Selected <span className="text-white/30 italic font-light">Works</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="mt-6 text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            A collection of projects we&apos;ve delivered across industries — from travel and e-commerce to SaaS and digital agencies.
          </p>
        </ScrollReveal>
      </section>

      {/* Filter Tags */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-16">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === null
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === tag
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                    : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-10 sm:gap-y-16 lg:gap-x-16 lg:gap-y-20 w-full">
          {filtered.map((project, index) => (
            <div key={project.title}>
              <ScrollReveal delay={(index % 2) * 100}>
                <ProjectCard
                  title={project.title}
                  desc={project.desc}
                  image={project.image}
                  video={project.video || ''}
                  url={project.url}
                />
              </ScrollReveal>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30 text-lg">
            No projects found for this filter.
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
