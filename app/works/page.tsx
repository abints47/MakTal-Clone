'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, ImageIcon } from 'lucide-react';
import { projects } from './data';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import Footer from '@/components/Footer/Footer';
import FloatingNav from '@/components/FloatingNav/FloatingNav';

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags ?? [])));

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = activeFilter
    ? projects.filter((p) => p.tags?.includes(activeFilter))
    : projects;

  return (
    <div className="min-h-screen bg-white text-black font-sans relative overflow-x-hidden">
      <FloatingNav />

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00AEEF]/4 rounded-full blur-[200px]" />
      </div>

      {/* Page Title */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-32 sm:pt-36 lg:pt-40 pb-12 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00AEEF]/15 bg-[#00AEEF]/5 text-[#0077B6] text-xs font-medium tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
            Portfolio
          </span>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight">
            Full <span className="gradient-text">Portfolio</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="mt-4 text-black/40 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            A collection of projects we&apos;ve delivered across industries — from travel and e-commerce to SaaS and digital agencies.
          </p>
        </ScrollReveal>
      </section>

      {/* Filter Tags */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-10">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveFilter(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeFilter === null
                  ? 'bg-gradient-to-r from-[#00AEEF] to-[#0077B6] text-white shadow-md shadow-[#00AEEF]/20'
                  : 'bg-[#f8f9fb] text-black/40 hover:bg-[#00AEEF]/5 hover:text-[#00AEEF] border border-black/[0.08]'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeFilter === tag
                    ? 'bg-gradient-to-r from-[#00AEEF] to-[#0077B6] text-white shadow-md shadow-[#00AEEF]/20'
                    : 'bg-[#f8f9fb] text-black/40 hover:bg-[#00AEEF]/5 hover:text-[#00AEEF] border border-black/[0.08]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filtered.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 80}>
              <div className="group relative bg-white rounded-2xl overflow-hidden border border-black/[0.06] shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#00AEEF]/5 hover:border-[#00AEEF]/15 hover:-translate-y-1 flex flex-col">
                <div className="relative w-full h-52 sm:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 z-20 hidden flex-col items-center justify-center bg-[#f8f9fb] text-black/20">
                    <ImageIcon className="w-10 h-10 mb-2 opacity-40" />
                    <span className="text-xs font-medium opacity-50">{project.title}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col grow justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-[#00AEEF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-black/40 text-xs sm:text-sm leading-relaxed">
                      {project.desc}
                    </p>
                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-[#f8f9fb] text-black/30 text-[10px] font-medium border border-black/[0.06]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-black/30 hover:text-[#00AEEF] font-medium text-xs sm:text-sm transition-colors group/link"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-black/20">
            No projects found for this filter.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16 sm:py-24 text-center">
        <ScrollReveal>
          <h2 className="relative text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Want a project like <span className="gradient-text">these</span>?
          </h2>
          <p className="relative mt-4 text-black/40 text-sm sm:text-base max-w-md mx-auto">
            Let&apos;s discuss your idea and build something great together.
          </p>
          <Link
            href="/#contact"
            className="btn-brand relative mt-8 inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all hover:scale-105 group"
          >
            <span>Talk to Us</span>
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
