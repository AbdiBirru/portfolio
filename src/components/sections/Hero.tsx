"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { socialLinks } from "@/lib/socials";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = { hidden: {}, show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 } } };
  const item: Variants = { hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
  };

  return (
    <section id="hero" aria-label="Introduction" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-blob hero-blob-3" aria-hidden="true" />

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <motion.p variants={item} className="text-sm font-medium tracking-wide uppercase" style={{ color: "var(--text-secondary)" }}>Hi, I&apos;m</motion.p>

        <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span style={{ color: "var(--text-primary)" }}>Abdisa </span>
          <span className="gradient-text">Birru</span>
        </motion.h1>

        <motion.h2 variants={item} className="text-lg sm:text-xl font-medium" style={{ color: "var(--text-secondary)" }}>Full-Stack Developer</motion.h2>

        <motion.p variants={item} className="text-base sm:text-lg max-w-xl" style={{ color: "var(--text-secondary)" }}>
          I build fast, scalable web applications that turn ideas into real products.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <button type="button" onClick={() => scrollTo("projects")} className="btn-glow w-full sm:w-auto px-8 py-3 rounded-full text-white font-medium">View Projects</button>
          <button type="button" onClick={() => scrollTo("contact")} className="w-full sm:w-auto px-8 py-3 rounded-full font-medium border" style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>Contact Me</button>
          <a href="/resume.pdf" download className="w-full sm:w-auto px-8 py-3 rounded-full font-medium text-center" style={{ color: "var(--text-secondary)" }}>Download Resume</a>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-4 mt-6">
          {socialLinks.map(({ label, href, icon: Icon }) => {
            const isExternal = href.startsWith("http");
            const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <a key={label} href={href} aria-label={label} {...linkProps} className="w-10 h-10 flex items-center justify-center rounded-full border hover:opacity-80" style={{ borderColor: "var(--border)" }}>
                <Icon size={18} />
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
