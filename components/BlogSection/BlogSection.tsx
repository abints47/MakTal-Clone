'use client';

import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';

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
    tag: 'E-commerce',
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
    <section className="w-full py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[#00AEEF] text-xs font-mono tracking-[0.22em] uppercase mb-6">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Insights &{' '}
              <span className="gradient-text">Resources</span>
            </h2>
            <p className="mt-4 text-white/30 text-sm sm:text-base max-w-xl mx-auto">
              Informative tech articles, tips, and news from our team.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <a href={post.url} className="group block project-card">
                <div className="relative w-full aspect-[1.6/1] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="project-image w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#050505]/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#00AEEF] bg-[#00AEEF]/10 border border-[#00AEEF]/20 px-2.5 py-1 rounded-md backdrop-blur-sm">{post.tag}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-white text-base sm:text-lg font-semibold leading-[1.4] transition-colors duration-300 group-hover:text-[#00AEEF]">
                    {post.title}
                  </h3>
                  <p className="mt-2 font-mono text-white/25 text-xs">{post.date}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="flex justify-center mt-10 sm:mt-14">
            <a href="#blog" className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/10 bg-transparent text-white/50 text-sm font-medium tracking-wide transition-all duration-300 hover:border-[#00AEEF]/30 hover:text-[#00AEEF] hover:bg-[#00AEEF]/5">
              View All Posts
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
