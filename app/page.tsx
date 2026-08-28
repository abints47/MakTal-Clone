'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone, Lightbulb, Code2, Rocket, MessageSquare, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat';
import BlogSection from '@/components/BlogSection/BlogSection';
import GoogleReviews from '@/components/GoogleReviews/GoogleReviews';
import TeamSection from '@/components/TeamSection/TeamSection';
import StatsCounter from '@/components/StatsCounter/StatsCounter';
import BlurText from '@/components/bits/BlurText';

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textsToCycle = ["Logo Design", "Social Media", "Mobile-App Development", "Website Development", "Design Services", "Digital Marketing", "SEO Optimization"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayBrandingText, setDisplayBrandingText] = useState(textsToCycle[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } }, { threshold: 0.2 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex(p => (p + 1) % textsToCycle.length), 3000);
    return () => clearInterval(interval);
  }, [textsToCycle.length]);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayBrandingText(textsToCycle[currentIndex].split("").map((l, i) => l === " " ? " " : i < iteration ? textsToCycle[currentIndex][i] : chars[Math.floor(Math.random() * chars.length)]).join(""));
      if (iteration >= textsToCycle[currentIndex].length) clearInterval(interval);
      iteration += 0.5;
    }, 30);
    return () => clearInterval(interval);
  }, [currentIndex, isVisible]);

  return (
    <div className="min-h-screen text-[#111827] font-sans selection:bg-[#61d9f7] selection:text-[#0a0a0b] relative overflow-x-hidden">

      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen min-h-[35rem] overflow-hidden flex flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.25),transparent_30%),linear-gradient(135deg,#0a0a0b_0%,#141416_40%,#0f1112_100%)]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video autoPlay loop muted playsInline poster="/images/it.jpg" className="w-full h-full object-cover" style={{ filter: 'saturate(0.85) contrast(1.1) brightness(0.5)' }}>
            <source src="https://assets.mixkit.co/videos/46635/46635-720.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0a0a0b]/40" />
        </div>

        <header className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between bg-transparent">
          <div className="relative inline-flex items-center">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white uppercase select-none" style={{ fontFamily: "var(--font-poppins), 'Poppins', system-ui, sans-serif" }}>MAKTAL</span>
            <sup className="pb-4 sm:pb-5 text-xs sm:text-sm font-bold text-white select-none">{'®'}</sup>
          </div>
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm xl:text-base font-medium text-slate-200">
            <a href="#about" className="hover:text-[#61d9f7] transition-colors">About</a>
            <div className="relative">
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center space-x-1 hover:text-[#61d9f7] transition-colors focus:outline-none">
                <span>Services</span>
                <ChevronDown className={"w-4 h-4 transition-transform " + (servicesOpen ? 'rotate-180' : '')} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full mt-2 w-52 rounded-xl bg-white/95 border border-gray-200 shadow-xl py-2 backdrop-blur-md">
                  <a href="#web-dev" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#09bdeb]">Website Development</a>
                  <a href="#digital-marketing" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#09bdeb]">Digital Marketing</a>
                  <a href="#seo" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#09bdeb]">SEO Optimization</a>
                </div>
              )}
            </div>
            <a href="#works" className="hover:text-[#61d9f7] transition-colors">Our Works</a>
            <a href="#blog" className="hover:text-[#61d9f7] transition-colors">Blog</a>
            <a href="#careers" className="hover:text-[#61d9f7] transition-colors">Careers</a>
            <a href="#contact" className="hover:text-[#61d9f7] transition-colors">Contact Us</a>
          </nav>
          <div className="hidden lg:flex items-center space-x-3">
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="p-2.5 text-white hover:bg-white/10 hover:text-[#61d9f7] transition-all" aria-label="WhatsApp"><MessageCircle className="w-6 h-6" /></a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-[#61d9f7] hover:bg-[#076f81] text-[#0a0a0b] hover:text-white font-medium text-sm transition-all shadow-lg shadow-[#61d9f7]/25 flex items-center space-x-2"><Phone className="w-4 h-4" /><span>Call Now</span></a>
          </div>
          <div className="flex items-center space-x-3 lg:hidden">
            <a href="#contact" className="px-4 py-2 rounded-full bg-[#54def0] text-[#0a0a0b] font-medium text-xs flex items-center space-x-1.5"><Phone className="w-3.5 h-3.5" /><span>Call Now</span></a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg bg-white/10 text-white focus:outline-none" aria-label="Toggle Menu" aria-expanded={mobileMenuOpen}>{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
          </div>
        </header>

        <div className={"fixed inset-0 bg-black/30 z-30 lg:hidden transition-opacity duration-300 " + (mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')} onClick={() => setMobileMenuOpen(false)} />

        <aside className={"fixed inset-y-0 left-0 w-[280px] bg-white z-40 lg:hidden transform transition-transform duration-300 shadow-2xl " + (mobileMenuOpen ? 'translate-x-0' : '-translate-x-full')} aria-hidden={!mobileMenuOpen}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center space-x-2 mb-8">
              <span className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase select-none" style={{ fontFamily: "var(--font-poppins), 'Poppins', system-ui, sans-serif" }}>MAKTAL</span>
              <sup className="pb-8 text-xs font-bold text-gray-900 select-none">{'®'}</sup>
            </div>
            <nav className="flex flex-col space-y-1">
              {['About', 'Services', 'Our Works', 'Blog', 'Careers', 'Contact Us'].map((item) => (
                <a key={item} href={'#' + item.toLowerCase().replace(/\s+/g, '-')} onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-[#09bdeb] hover:bg-gray-50 font-medium py-3 px-3 rounded-lg transition-colors">{item}</a>
              ))}
            </nav>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <a href="https://whatsapp.com" className="flex items-center space-x-2 text-[#059669] font-medium text-sm"><MessageSquare className="w-4 h-4" /><span>WhatsApp Us</span></a>
            </div>
          </div>
        </aside>

        <div className="relative z-20 max-w-4xl mx-auto px-5 sm:px-6 text-center my-auto flex flex-col items-center justify-center">
          <span className="text-[#61d9f7] text-[10px] sm:text-xs md:text-sm font-mono tracking-[0.2em] sm:tracking-widest uppercase mb-3 sm:mb-4">MAKTAL TECHNOLOGIES</span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] tracking-tight leading-tight max-w-3xl mb-5 sm:mb-6">
            Website Development & <br className="hidden sm:inline" /> Digital Marketing
          </h1>
          <a href="#contact" className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full border border-white/30 bg-white/5 hover:bg-white/10 text-[#f6f6f4] font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 hover:border-[#61d9f7] backdrop-blur-sm">GET IN TOUCH</a>
        </div>
        <div className="pb-4 sm:pb-6"></div>
      </section>

      <section id="about" className="w-full bg-white py-20 sm:py-28 lg:py-36">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 sm:gap-y-2">
            <BlurText text="At" delay={80} animateBy="words" direction="bottom" threshold={0.2} stepDuration={0.4} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#111827] leading-snug tracking-tight text-center" />
            <BlurText text="MakTal Technologies," delay={80} animateBy="words" direction="bottom" threshold={0.2} stepDuration={0.4} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#09bdeb] leading-snug tracking-tight text-center" />
          </div>
          <BlurText text="we craft digital experiences that inspire, connect, and drive meaningful growth and we are here to build it for you." delay={80} animateBy="words" direction="bottom" threshold={0.2} stepDuration={0.4} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#111827] leading-snug tracking-tight text-center mt-1 sm:mt-2" />
        </div>
      </section>

      <main className="max-w-full mx-auto">
        <section ref={containerRef} id="works" className="w-full relative overflow-hidden">
          {/* Premium Light Section */}
          <div className="relative w-full overflow-hidden bg-[#f8f9fa]">
            {/* Background layers */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(9,189,235,0.06),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(5,150,105,0.04),transparent_50%)]" />
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            {/* Floating orbs */}
            <div className="absolute top-20 left-[10%] w-72 h-72 bg-[#09bdeb]/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-20 right-[10%] w-64 h-64 bg-[#059669]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-8 sm:pb-12">
              {/* Badge */}
              <ScrollReveal>
                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white backdrop-blur-sm shadow-sm">
                    
                    <span className="text-[#09bdeb] text-xs font-medium tracking-[0.15em] uppercase">Our Expertise</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Heading */}
              <ScrollReveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight leading-tight">
                  One Stop Solution for
                </h2>
              </ScrollReveal>

              {/* Animated Scrambler Text */}
              <ScrollReveal>
                <div className="mt-3 sm:mt-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                    <span className="text-[#111827]">
                      {displayBrandingText}
                    </span>
                  </h1>
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal>
                <p className="mt-6 sm:mt-8 text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                  We create stunning, user-friendly websites to help your business stand out and succeed. With expertise in secure web development, we bring your business online and boost sales.
                </p>
              </ScrollReveal>
            </div>

            {/* Process Steps - Premium Glass Cards */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-6 py-12 sm:py-16 lg:py-20">
              <div className="relative flex items-center justify-between">
                {/* Connecting line */}
                <div className="absolute top-1/2 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent -translate-y-1/2" />
                <div className="absolute top-1/2 left-[16%] right-[16%] h-px bg-gradient-to-r from-[#09bdeb]/40 via-[#09bdeb]/15 to-[#059669]/40 -translate-y-1/2" style={{ filter: 'blur(1px)' }} />

                {[{ icon: Lightbulb, label: 'Plan', desc: 'Strategy & Discovery', step: '01' }, { icon: Code2, label: 'Develop', desc: 'Build & Refine', step: '02' }, { icon: Rocket, label: 'Launch', desc: 'Deploy & Grow', step: '03' }].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 200}>
                    <div className="group relative flex flex-col items-center text-center">
                      {/* Glow behind card */}
                      <div className="absolute -inset-4 bg-[#09bdeb]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Card */}
                      <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl border border-gray-200 bg-white backdrop-blur-md flex flex-col items-center justify-center space-y-2 sm:space-y-3 transition-all duration-500 group-hover:border-[#09bdeb]/40 group-hover:shadow-xl group-hover:shadow-[#09bdeb]/10 group-hover:scale-105">
                        <div className="absolute top-3 left-3 text-[10px] sm:text-xs font-mono text-gray-300 group-hover:text-[#09bdeb]/40 transition-colors">{item.step}</div>
                        <div className="p-2.5 sm:p-3 rounded-xl bg-[#09bdeb]/10 group-hover:bg-[#09bdeb]/15 transition-colors duration-500">
                          <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-[#09bdeb] transition-colors duration-500" />
                        </div>
                        <span className="text-gray-700 group-hover:text-[#111827] text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300">{item.label}</span>
                        <span className="text-gray-400 group-hover:text-gray-500 text-[10px] sm:text-xs transition-colors duration-300 hidden sm:block">{item.desc}</span>
                      </div>
                      {/* Node dot on the line */}
                      <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-gray-300 bg-white group-hover:border-[#09bdeb] group-hover:bg-[#09bdeb]/10 transition-all duration-500" style={{ top: 'calc(50% + 4rem)' }} />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          <StatsCounter />

          <div className="relative z-10 w-full px-5 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 space-y-12 sm:space-y-16">
            <div className="text-center">
              <span className="text-[#059669] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">OUR WORKS</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-4 sm:pt-6 font-extrabold text-[#111827] tracking-tight">Few of our favorite projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {[
                { title: "BlueTerra, UAE", desc: "Boutique travel company website developed in Next.js and Python", image: "https://maktalseo.com/wp-content/uploads/2025/10/blueterra-travel-website-development-work-1.avif", url: "https://www.myblueterra.com/" },
                { title: "Drizzla, USA", desc: "Outcome-as-a-Service partner website developed in React.js and Python", image: "https://maktalseo.com/wp-content/uploads/2025/10/drizzla-react-js-website-development-1.avif", url: "https://www.drizzla.com/" },
                { title: "Solo Flowers, UAE", desc: "Flower delivery E-commerce website development in WordPress and WooCommerce.", image: "https://maktalseo.com/wp-content/uploads/2025/10/solo-flowers-ecommerce-website-development.avif", url: "https://www.soloflowers.ae" },
                { title: "World of Appliances, Bahrain", desc: "WordPress based E-commerce website development project with Shipping and Payment options.", image: "https://maktalseo.com/wp-content/uploads/2025/10/ecommerce-development-wordpress.avif", url: "https://www.worldofappliancesbh.com/" }
              ].map((project, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-[#059669] transition-all duration-300 hover:shadow-xl hover:shadow-[#059669]/10 hover:-translate-y-1 flex flex-col justify-between shadow-sm">
                    <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" onError={(e) => { const t = e.currentTarget; t.style.display = 'none'; const f = t.nextElementSibling as HTMLElement; if (f) f.style.display = 'flex'; }} />
                      <div className="absolute inset-0 z-20 hidden flex-col items-center justify-center bg-gray-100 text-gray-400">
                        <svg className="w-10 h-10 mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" /></svg>
                        <span className="text-xs font-medium opacity-50">{project.title}</span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 flex flex-col grow justify-between space-y-2 sm:space-y-3">
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#111827] group-hover:text-[#059669] transition-colors">{project.title}</h3>
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{project.desc}</p>
                      </div>
                      <div className="pt-1 sm:pt-2">
                        <Link href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#059669] font-medium text-xs sm:text-sm transition-colors group/link">
                          <span>Visit Website</span>
                          <span className="transform group-hover/link:translate-x-1 transition-transform">{'→'}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={200}>
              <div className="flex justify-center">
                <Link href="/works" className="inline-flex items-center justify-center px-7 sm:px-8 py-3 rounded-full border border-gray-300 bg-transparent hover:bg-gray-50 text-[#111827] font-medium text-sm tracking-wide transition-all duration-300 hover:border-[#059669]/50">View All</Link>
              </div>
            </ScrollReveal>
          </div>

          <TeamSection />
          <BlogSection />

          <ScrollReveal delay={100}>
            <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center bg-white">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#059669]/3 rounded-full blur-[120px] sm:blur-[150px]" />
              </div>
              <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">Have Something in Mind?</h2>
              <p className="relative mt-3 sm:mt-4 text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                We build custom websites that grow your business and attract more customers. Our expert team creates tailored sites designed to exceed your goals.
              </p>
              <a href="#contact" className="relative mt-6 sm:mt-8 inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#059669] text-white font-medium text-sm tracking-wide transition-all hover:scale-105 shadow-lg shadow-[#059669]/20">Talk to Us</a>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <GoogleReviews />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
