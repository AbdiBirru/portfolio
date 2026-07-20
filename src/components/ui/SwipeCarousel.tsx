"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwipeCarouselProps<T> {
  items: T[];
  renderItem: (item: T, isActive: boolean) => React.ReactNode;
  getKey: (item: T) => string;
  ariaLabel: string;
}

const OFFSET_THRESHOLD = 90;
const VELOCITY_THRESHOLD = 350;
const CLICK_DRAG_THRESHOLD = 8;

export default function SwipeCarousel<T,>({ items, renderItem, getKey, ariaLabel }: SwipeCarouselProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragDistance = useRef(0);
  const shouldReduceMotion = useReducedMotion();
  const count = items.length;

  const goTo = (index: number) => setActiveIndex(Math.max(0, Math.min(count - 1, index)));
  const handleDrag = (_e: unknown, info: PanInfo) => { dragDistance.current = info.offset.x; };

  const handleDragEnd = (_e: unknown, info: PanInfo) => {
    if (info.offset.x < -OFFSET_THRESHOLD || info.velocity.x < -VELOCITY_THRESHOLD) goTo(activeIndex + 1);
    else if (info.offset.x > OFFSET_THRESHOLD || info.velocity.x > VELOCITY_THRESHOLD) goTo(activeIndex - 1);
  };

  const handleCardClick = (event: React.MouseEvent) => {
    if (Math.abs(dragDistance.current) > CLICK_DRAG_THRESHOLD) { event.preventDefault(); event.stopPropagation(); }
    dragDistance.current = 0;
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); goTo(activeIndex - 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); goTo(activeIndex + 1); }
  };

  const visible = items.map((item, index) => ({ item, index, offset: index - activeIndex })).filter(({ offset }) => Math.abs(offset) <= 1);

  return (
    <div role="group" aria-label={ariaLabel} tabIndex={0} onKeyDown={handleKeyDown} className="relative w-full flex flex-col items-center gap-6 outline-none">
      <div className="carousel-track">
        <button type="button" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous card" className="carousel-arrow left-0 sm:-left-5 disabled:opacity-30 disabled:pointer-events-none hidden sm:flex">
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-start justify-center gap-3 sm:gap-4">
          {visible.map(({ item, index, offset }) => {
            const isActive = offset === 0;
            return (
              <motion.div key={getKey(item)} layout onClick={isActive ? handleCardClick : () => goTo(index)} drag={isActive ? "x" : false} dragElastic={0.5} dragConstraints={{ left: -120, right: 120 }} onDrag={isActive ? handleDrag : undefined} onDragEnd={isActive ? handleDragEnd : undefined} animate={{ scale: isActive ? 1 : 0.86, opacity: isActive ? 1 : 0.45 }} transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 280, damping: 28 }} style={{ width: "min(320px, 78vw)", cursor: isActive ? "grab" : "pointer", flexShrink: 0 }} className="select-none active:cursor-grabbing">
                {renderItem(item, isActive)}
              </motion.div>
            );
          })}
        </div>

        <button type="button" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === count - 1} aria-label="Next card" className="carousel-arrow right-0 sm:-right-5 disabled:opacity-30 disabled:pointer-events-none hidden sm:flex">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex items-center gap-2" role="tablist" aria-label={`${ariaLabel} pagination`}>
        {items.map((item, index) => (
          <button key={getKey(item)} type="button" onClick={() => goTo(index)} aria-label={`Go to card ${index + 1} of ${count}`} aria-selected={index === activeIndex} role="tab" className="carousel-dot" data-active={index === activeIndex} />
        ))}
      </div>
    </div>
  );
}
