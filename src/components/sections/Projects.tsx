"use client";

import { motion, type Variants } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SwipeCarousel from "@/components/ui/SwipeCarousel";

const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-center max-w-xl mx-auto mb-12" style={{ color: "var(--text-secondary)" }}>A selection of full-stack applications I&apos;ve designed, built, and shipped end to end. Swipe to browse.</p>
      </div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
        <SwipeCarousel label="Featured projects">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </SwipeCarousel>
      </motion.div>
    </section>
  );
}
