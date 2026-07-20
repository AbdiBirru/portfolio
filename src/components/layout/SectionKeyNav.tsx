"use client";

import { useEffect } from "react";

export default function SectionKeyNav() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;

      const pages = Array.from(document.querySelectorAll<HTMLElement>("[data-section-page]"));
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const currentIndex = pages.findIndex((page) => scrollPosition >= page.offsetTop && scrollPosition < page.offsetTop + page.offsetHeight);
      const activeIndex = currentIndex === -1 ? 0 : currentIndex;
      const targetIndex = event.key === "ArrowDown" ? Math.min(pages.length - 1, activeIndex + 1) : Math.max(0, activeIndex - 1);

      if (pages[targetIndex]) { event.preventDefault(); pages[targetIndex].scrollIntoView({ behavior: "smooth", block: "start" }); }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
