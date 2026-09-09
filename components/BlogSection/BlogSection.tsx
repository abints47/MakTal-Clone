'use client';

import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Is Your Website Built for Humans or Just Search Engines?',
    date: 'August 18, 2026',
    image: 'https://maktalseo.com/wp-content/uploads/2026/08/human-friendly-SEO-Website.webp',
    url: '#',
    tag: 'SEO',
  },
  {
    title: 'Proven Shopify Conversion Rate Optimization Strategies to Boost Sales',
    date: 'July 27, 2026',
    image: 'https://maktalseo.com/wp-content/uploads/2026/07/Shopify-conversion-rate-optimization-strategies.webp',
    url: '#',
    tag: 'E-Commerce',
  },
  {
    title: 'Brand Authority Signals Become Critical for Rankings',
    date: 'July 7, 2026',
    image: 'https://maktalseo.com/wp-content/uploads/2026/07/Brand-Authority-Signals.webp',
    url: '#',
    tag: 'Marketing',
  },
];

export default function BlogSection() {
  return (
    <section className="relative z-10 w-full bg-white rounded-t-[3rem] sm:rounded-t-[4rem] -mt-12 sm:-mt-20 py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Subtle ambient blur matching the site */}
      <div className="absolute top-0 right-1/4 w-120 h-60 bg-[#00AEEF]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Recent Posts From{' '}<br className="hidden sm:inline" />
              <span className="gradient-text">Our Blog</span>
            </h2>
            <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
              Informative tech articles, growth strategies, and industry insights from our engineering team.
            </p>
          </div>
        </ScrollReveal>

        {/* Borderless Editorial Grid matching site architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <a
                href={post.url}
                className="group block w-full text-left cursor-pointer"
              >
                {/* Standalone Rounded Media Frame - No Card Box, No Border */}
                <div className="relative w-full aspect-16/12 rounded-2xl sm:rounded-4xl overflow-hidden mb-5 bg-slate-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[0.985]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>

                {/* Borderless Typography Content */}
                <div className="flex flex-col gap-2 px-1">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-[#00AEEF] font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">
                      Read <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <h3 className="text-slate-900 text-lg sm:text-xl font-bold font-sans tracking-tight leading-[1.35] transition-colors duration-300 group-hover:text-[#00AEEF]">
                    {post.title}
                  </h3>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="flex justify-center mt-12 sm:mt-16">
            <a
              href="#blog"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-slate-900/15 bg-transparent text-slate-700 text-sm font-semibold tracking-wide transition-all duration-300 hover:border-[#00AEEF] hover:text-[#00AEEF] hover:bg-[#00AEEF]/5"
            >
              View All Posts
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#00AEEF]" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
