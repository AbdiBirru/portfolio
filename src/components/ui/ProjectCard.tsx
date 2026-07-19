import Image from "next/image";
import { Check, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, tagline, problem, solution, features, stack, github, demo, image } = project;

  return (
    <div className="rounded-2xl border overflow-hidden flex flex-col h-full transition-transform hover:-translate-y-1" style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)" }}>
      <div className="relative w-full aspect-video flex items-center justify-center" style={{ backgroundImage: "linear-gradient(135deg, var(--accent-purple), var(--accent-blue), var(--accent-cyan))" }}>
        {image ? (
          <Image src={image} alt={`${title} preview`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-white/90">
            <Code2 size={32} />
            <span className="text-sm font-medium">{title}</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>{tagline}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p><span className="font-semibold">Problem: </span><span style={{ color: "var(--text-secondary)" }}>{problem}</span></p>
          <p><span className="font-semibold">Solution: </span><span style={{ color: "var(--text-secondary)" }}>{solution}</span></p>
        </div>

        <ul className="flex flex-col gap-1.5">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <Check size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent-cyan)" }} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>{tech}</span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto pt-2">
          {github && <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border" style={{ borderColor: "var(--border)" }}><GithubIcon size={16} /> GitHub</a>}
          {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full text-white btn-glow"><ExternalLink size={16} /> Live Demo</a>}
          {!github && !demo && <span className="text-xs italic" style={{ color: "var(--text-secondary)" }}>Repo & live demo coming soon</span>}
        </div>
      </div>
    </div>
  );
}
