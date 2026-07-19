"use client";

import { useEffect, useState } from "react";
import { Menu, X as CloseIcon } from "lucide-react";
import ThemeToggle from "@/components/layout/ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur border-b" : "bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "var(--bg-elevated)" : "transparent",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight" aria-label="AbdiBuilds home">
          <span style={{ color: "var(--text-primary)" }}>Abdi</span>
          <span className="gradient-text">Builds</span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            
             <a key={link.href}
              href={link.href}
              className="text-sm font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="w-9 h-9 flex items-center justify-center rounded-full border"
            style={{ borderColor: "var(--border)" }}
          >
            {menuOpen ? <CloseIcon size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden px-6 pb-6 flex flex-col gap-4 border-t"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
        >
          {navLinks.map((link) => (
            
             <a key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium py-2"
              style={{ color: "var(--text-primary)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
