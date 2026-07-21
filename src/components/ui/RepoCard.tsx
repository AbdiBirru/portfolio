import { Star, ExternalLink } from "lucide-react";

interface RepoCardProps {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  url: string;
}

export default function RepoCard({ name, description, language, stars, url }: RepoCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="rounded-2xl border p-6 flex flex-col gap-3 h-full transition-transform hover:-translate-y-1" style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)", boxShadow: "var(--card-glow)" }}>
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base font-semibold truncate">{name}</h3>
        <ExternalLink size={16} style={{ color: "var(--text-secondary)" }} />
      </div>
      <p className="text-sm flex-1" style={{ color: "var(--text-secondary)" }}>{description || "No description provided."}</p>
      <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-secondary)" }}>
        {language && <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--accent-cyan)" }} />{language}</span>}
        <span className="flex items-center gap-1"><Star size={14} />{stars}</span>
      </div>
    </a>
  );
}
