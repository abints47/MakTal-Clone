'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ImageIcon } from 'lucide-react';
import { projects } from './data';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import Footer from '@/components/Footer/Footer';

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags ?? [])));

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = activeFilter
    ? projects.filter((p) => p.tags?.includes(activeFilter))
    : projects;

  return (
    <div className="min-h-screen text-[#111827] font-sans selection:bg-[#cbfb45] selection:text-[#111827] relative overflow-x-hidden">
      {/* Header */}
      <header className="relative z-20 w-full px-6 lg:px-12 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-gray-500 hover:text-[#cbfb45] transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <span
          className="text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase select-none"
          style={{ fontFamily: "var(--font-poppins), 'Inter', system-ui, sans-serif" }}
        >
          MAKTAL
          <sup className="pb-4 text-xs font-bold text-white select-none">®</sup>
        </span>
      </header>

      {/* Page Title */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-10 sm:pt-16 lg:pt-20 pb-8 text-center">
        <span className="text-[#cbfb45] text-sm font-semibold tracking-[0.2em] uppercase">
          OUR WORKS
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight mt-3">
          Full Portfolio
        </h1>
        <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          A collection of projects we&apos;ve delivered across industries — from travel and e-commerce to SaaS and digital agencies.
        </p>
      </section>

      {/* Filter Tags */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              activeFilter === null
                ? 'bg-[#cbfb45] text-[#111827]'
                : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-[#111827] border border-white/10'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeFilter === tag
                  ? 'bg-[#cbfb45] text-[#111827]'
                  : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-[#111827] border border-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filtered.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-[#cbfb45] transition-all duration-300 hover:shadow-2xl hover:shadow-[#cbfb45]/10 hover:-translate-y-1 flex flex-col justify-between">
                <div className="relative w-full h-52 sm:h-64 overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,23,0.2),rgba(7,11,23,0.6))] z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div
                    className="absolute inset-0 z-20 hidden flex-col items-center justify-center bg-gray-100 text-slate-600"
                  >
                    <ImageIcon className="w-10 h-10 mb-2 opacity-40" />
                    <span className="text-xs font-medium opacity-50">{project.title}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col grow justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] group-hover:text-[#cbfb45] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {project.desc}
                    </p>
                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full bg-white/5 text-gray-400 text-[10px] font-medium border border-white/5"
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
                      className="inline-flex items-center space-x-2 text-[#94A3B8] hover:text-[#cbfb45] font-medium text-xs sm:text-sm transition-colors group/link"
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
          <div className="text-center py-20 text-gray-400">
            No projects found for this filter.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16 sm:py-24 text-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-100 h-100 bg-[#cbfb45]/3 rounded-full blur-[150px]" />
        </div>
        <h2 className="relative text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
          Want a project like these?
        </h2>
        <p className="relative mt-4 text-white/40 text-sm sm:text-base max-w-md mx-auto">
          Let&apos;s discuss your idea and build something great together.
        </p>
        <Link
          href="/#contact"
          className="relative mt-8 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#cbfb45] text-[#111827] font-medium text-sm tracking-wide transition-all hover:scale-105 shadow-lg shadow-[#cbfb45]/20"
        >
          Talk to Us
        </Link>
      </section>

      <Footer />
    </div>
  );
}
