"use client";
import { useRef, useState, useEffect, useCallback } from "react";

const reviews = [
  { name: "David Wilson", initials: "DW", date: "7 months ago", rating: 5, text: "Highly reliable SEO & digital marketing company for Thrissur and Kerala businesses. MakTal Technologies offers professional services with a dedicated team that truly understands digital growth strategies.", readMore: true, color: "#60a5fa" },
  { name: "James Mitchell", initials: "JM", date: "7 months ago", rating: 5, text: "Highly Recommended!! One of the Best Digital Marketing Agency that you can trust. Much appreciated for the great support and outstanding results they delivered for our business.", readMore: false, color: "#34d399" },
  { name: "Sarah Thompson", initials: "ST", date: "8 months ago", rating: 5, text: "We hired MakTal for doing SEO for our business. Prompt communication and result oriented marketing plan. Their expertise in search optimization has significantly improved our online visibility.", readMore: true, color: "#f472b6" },
  { name: "Emily Richardson", initials: "ER", date: "9 months ago", rating: 5, text: "Thank you for doing our ecommerce website. Appreciating the skills.", readMore: false, color: "#a78bfa" },
  { name: "Michael Carter", initials: "MC", date: "10 months ago", rating: 5, text: "Outstanding web development services. The team at MakTal Technologies delivered a stunning website that exceeded our expectations. Very professional and timely delivery.", readMore: false, color: "#fb923c" },
  { name: "Jessica Brooks", initials: "JB", date: "6 months ago", rating: 5, text: "MakTal transformed our online presence completely. Their social media marketing strategies brought us real customers and measurable growth. Highly recommended for any business!", readMore: true, color: "#e879f9" },
];

function StarIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>);
}

function GoogleGIcon({ className }: { className?: string }) {
  return (<svg viewBox="0 0 24 24" className={className ?? "w-4 h-4"} xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>);
}

function GoogleWordmark() {
  return (<span className="inline-flex items-baseline text-[38px] sm:text-[40px] font-medium tracking-tight select-none" style={{ fontFamily: "'Product Sans', 'Google Sans', Arial, sans-serif" }}><span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span><span style={{ color: "#FBBC05" }}>o</span><span style={{ color: "#4285F4" }}>g</span><span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span></span>);
}

function ChevronLeft() { return (<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>); }
function ChevronRight() { return (<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>); }
function CheckBadge() { return (<svg className="w-4 h-4 text-blue-500 inline-block ml-1" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>); }

export default function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollTo = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>("[data-review-card]");
    if (cards[index]) {
      const card = cards[index];
      const gap = 16;
      const scrollLeft = card.offsetLeft - container.offsetLeft - gap;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      setActiveIndex(index);
    }
  }, []);

  const goNext = useCallback(() => { scrollTo(Math.min(activeIndex + 1, reviews.length - 1)); }, [activeIndex, scrollTo]);
  const goPrev = useCallback(() => { scrollTo(Math.max(activeIndex - 1, 0)); }, [activeIndex, scrollTo]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => { const next = prev >= reviews.length - 1 ? 0 : prev + 1; scrollTo(next); return next; });
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, scrollTo]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const cards = container.querySelectorAll<HTMLElement>("[data-review-card]");
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closest = 0; let minDist = Infinity;
      cards.forEach((card, i) => { const cardCenter = card.offsetLeft + card.offsetWidth / 2; const dist = Math.abs(containerCenter - cardCenter); if (dist < minDist) { minDist = dist; closest = i; } });
      setActiveIndex(closest);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full h-1 bg-gradient-to-r from-[#059669] via-[#10b981] to-[#059669]" />
      <div className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#111827] font-bold sm:font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-[1.2] mb-8 sm:mb-10">Our Satisfied Clients</h2>

          <div className="hidden sm:flex items-stretch gap-3 lg:gap-4">
            <div className="shrink-0 w-40 lg:w-48 flex flex-col items-center justify-center text-center gap-2 sm:gap-3 py-3 sm:py-4">
              <p className="text-[#111827] font-bold text-lg lg:text-xl tracking-wide">EXCELLENT</p>
              <div className="flex gap-0.75">{[...Array(5)].map((_, i) => (<StarIcon key={i} className="w-7 h-7 lg:w-8 lg:h-8 text-[#FFC107]" />))}</div>
              <p className="text-[#111827] text-xs lg:text-sm">Based on <span className="font-bold">310</span> reviews</p>
              <GoogleWordmark />
            </div>
            <button onClick={goPrev} className="shrink-0 self-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#111827] transition-all duration-200 z-10" aria-label="Previous review"><ChevronLeft /></button>
            <div ref={scrollRef} className="flex-1 min-w-0 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide scroll-smooth" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              {reviews.map((review, index) => (
                <div key={index} data-review-card className="shrink-0 w-60 lg:w-64 snap-start rounded-xl bg-gray-50 p-4 lg:p-5 border border-gray-100 flex flex-col transition-all duration-250 hover:bg-gray-100 cursor-default shadow-sm" style={{ minHeight: "230px" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0" style={{ backgroundColor: review.color }}>{review.initials}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#111827] text-sm font-bold truncate">{review.name}</p>
                      <p className="text-gray-400 text-xs">{review.date}</p>
                    </div>
                    <GoogleGIcon className="w-4 h-4 shrink-0" />
                  </div>
                  <div className="flex items-center gap-0.5 mb-3">{[...Array(review.rating)].map((_, i) => (<StarIcon key={i} className="w-4 h-4 text-[#FFC107]" />))}<CheckBadge /></div>
                  <p className="text-gray-600 text-sm leading-normal flex-1">{'\u201C'}{review.text}{'\u201D'}</p>
                  {review.readMore && (<button className="mt-2 text-gray-400 hover:text-gray-600 text-xs text-left transition-colors duration-200">Read more</button>)}
                </div>
              ))}
            </div>
            <button onClick={goNext} className="shrink-0 self-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#111827] transition-all duration-200 z-10" aria-label="Next review"><ChevronRight /></button>
          </div>
          <p className="hidden sm:block text-right text-gray-400 text-xs sm:text-sm mt-4 pr-1">Showing our latest reviews</p>

          <div className="sm:hidden flex flex-col items-center">
            <div className="flex flex-col items-center gap-2 mb-8">
              <p className="text-[#111827] font-bold text-lg tracking-wide">EXCELLENT</p>
              <div className="flex gap-1">{[...Array(5)].map((_, i) => (<StarIcon key={i} className="w-6 h-6 text-[#FFC107]" />))}</div>
              <p className="text-[#111827] text-sm">Based on <span className="font-bold">310</span> reviews</p>
              <GoogleWordmark />
            </div>
            <div ref={scrollRef} className="w-full flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide scroll-smooth px-4" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              {reviews.map((review, index) => (
                <div key={index} data-review-card className="shrink-0 w-[85vw] snap-start rounded-xl bg-gray-50 p-4 border border-gray-100 flex flex-col transition-all duration-250 hover:bg-gray-100 shadow-sm" style={{ minHeight: "230px" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0" style={{ backgroundColor: review.color }}>{review.initials}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#111827] text-sm font-bold truncate">{review.name}</p>
                      <p className="text-gray-400 text-xs">{review.date}</p>
                    </div>
                    <GoogleGIcon className="w-4 h-4 shrink-0" />
                  </div>
                  <div className="flex items-center gap-0.5 mb-3">{[...Array(review.rating)].map((_, i) => (<StarIcon key={i} className="w-4 h-4 text-[#FFC107]" />))}<CheckBadge /></div>
                  <p className="text-gray-600 text-sm leading-normal flex-1">{'\u201C'}{review.text}{'\u201D'}</p>
                  {review.readMore && (<button className="mt-2 text-gray-400 hover:text-gray-600 text-xs text-left transition-colors duration-200">Read more</button>)}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-2">
              <button onClick={goPrev} className="w-7 h-7 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#111827] transition-all duration-200" aria-label="Previous"><ChevronLeft /></button>
              <div className="flex gap-2">{reviews.map((_, i) => (<button key={i} onClick={() => scrollTo(i)} className={"w-2 h-2 rounded-full transition-all duration-200 " + (i === activeIndex ? "bg-[#FFC107] w-4" : "bg-gray-300")} aria-label={"Go to review " + (i + 1)} />))}</div>
              <button onClick={goNext} className="w-7 h-7 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#111827] transition-all duration-200" aria-label="Next"><ChevronRight /></button>
            </div>
            <p className="text-gray-400 text-sm mt-4">Showing our latest reviews</p>
          </div>
        </div>
      </div>
      <style jsx>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </section>
  );
}
