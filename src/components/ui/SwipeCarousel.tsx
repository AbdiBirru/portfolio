"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwipeCarouselProps {
  children: React.ReactNode[];
  label: string;
}

export default function SwipeCarousel({ children, label }: SwipeCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateStyles = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      const ratio = Math.min(distance / (container.clientWidth / 2), 1);
      card.style.transform = `scale(${1 - ratio * 0.15})`;
      card.style.opacity = `${1 - ratio * 0.55}`;
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    updateStyles();
    const container = scrollRef.current;
    if (!container) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateStyles);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [updateStyles]);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;
    const target = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    container.scrollTo({ left: target, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const goPrev = () => scrollToIndex(Math.max(activeIndex - 1, 0));
  const goNext = () => scrollToIndex(Math.min(activeIndex + 1, children.length - 1));

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div ref={scrollRef} role="region" aria-roledescription="carousel" aria-label={label} tabIndex={0} onKeyDown={onKeyDown} className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory px-[9%] sm:px-[18%] lg:px-[27%] focus:outline-none" style={{ touchAction: "pan-y" }}>
        {children.map((child, i) => (
          <div key={i} ref={(el) => { cardRefs.current[i] = el; }} className="snap-center shrink-0 w-[82%] sm:w-[64%] lg:w-[46%] transition-[opacity,transform] duration-200 ease-out">
            {child}
          </div>
        ))}
      </div>

      <button type="button" onClick={goPrev} disabled={activeIndex === 0} aria-label="Previous card" className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center border disabled:opacity-30 hover:opacity-80" style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)" }}><ChevronLeft size={18} /></button>
      <button type="button" onClick={goNext} disabled={activeIndex === children.length - 1} aria-label="Next card" className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center border disabled:opacity-30 hover:opacity-80" style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)" }}><ChevronRight size={18} /></button>

      <div className="flex justify-center gap-2 mt-4">
        {children.map((_, i) => (
          <button key={i} type="button" onClick={() => scrollToIndex(i)} aria-label={`Go to slide ${i + 1}`} aria-current={i === activeIndex ? "true" : undefined} className="h-2 rounded-full transition-all" style={{ backgroundColor: i === activeIndex ? "var(--accent-blue)" : "var(--border)", width: i === activeIndex ? "20px" : "8px" }} />
        ))}
      </div>
    </div>
  );
}
