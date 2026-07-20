"use client";

import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SwipeCarousel from "@/components/ui/SwipeCarousel";
import SectionPage from "@/components/layout/SectionPage";

export default function Projects() {
  return (
    <SectionPage id="projects" ariaLabel="Featured Projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Featured Projects</h2>
      <p className="text-center max-w-xl mx-auto mb-10" style={{ color: "var(--text-secondary)" }}>Swipe or use the arrows to browse. A selection of full-stack applications I&apos;ve designed, built, and shipped end to end.</p>
      <SwipeCarousel items={projects} getKey={(project) => project.title} ariaLabel="Featured projects" renderItem={(project) => <ProjectCard project={project} />} />
    </SectionPage>
  );
}
