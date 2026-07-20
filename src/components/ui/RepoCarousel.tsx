"use client";

import RepoCard from "@/components/ui/RepoCard";
import SwipeCarousel from "@/components/ui/SwipeCarousel";

interface RepoItem {
  fallbackName: string;
  data: { name: string; description: string | null; language: string | null; stars: number; url: string } | null;
}

export default function RepoCarousel({ repos }: { repos: RepoItem[] }) {
  return (
    <SwipeCarousel items={repos} getKey={(repo) => repo.fallbackName} ariaLabel="GitHub repositories" renderItem={(repo) =>
      repo.data ? (
        <RepoCard name={repo.data.name} description={repo.data.description} language={repo.data.language} stars={repo.data.stars} url={repo.data.url} />
      ) : (
        <a href={`https://github.com/abdibirru/${repo.fallbackName}`} target="_blank" rel="noopener noreferrer" className="rounded-2xl border p-6 flex flex-col gap-2 justify-center items-center text-center h-40" style={{ backgroundColor: "var(--bg-elevated-2)", borderColor: "var(--border)" }}>
          <h3 className="text-base font-semibold">{repo.fallbackName}</h3>
          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>View on GitHub</span>
        </a>
      )
    } />
  );
}
