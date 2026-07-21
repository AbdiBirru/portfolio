import { Users, GitBranch } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import RepoCard from "@/components/ui/RepoCard";
import SwipeCarousel from "@/components/ui/SwipeCarousel";

const GITHUB_USERNAME = "abdibirru";
const FEATURED_REPOS = ["portfolio", "codealpha_calculator", "codealpha_abdixmeet", "codealpha_eonex", "Ethiopian_Universities"];

interface GithubUser {
  followers: number;
  public_repos: number;
}

interface GithubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
}

async function getUser(): Promise<GithubUser | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

async function getRepo(repo: string): Promise<GithubRepo | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo}`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function GitHubStats() {
  const [user, repos] = await Promise.all([getUser(), Promise.all(FEATURED_REPOS.map((repo) => getRepo(repo)))]);

  const repoCards = repos.map((repo, index) =>
    repo ? (
      <RepoCard key={repo.name} name={repo.name} description={repo.description} language={repo.language} stars={repo.stargazers_count} url={repo.html_url} />
    ) : (
      <a key={FEATURED_REPOS[index]} href={`https://github.com/${GITHUB_USERNAME}/${FEATURED_REPOS[index]}`} target="_blank" rel="noopener noreferrer" className="rounded-2xl border p-6 flex flex-col gap-2 justify-center items-center text-center" style={{ backgroundColor: "var(--bg-elevated-2)", borderColor: "var(--border)", boxShadow: "var(--card-glow)" }}>
        <h3 className="text-base font-semibold">{FEATURED_REPOS[index]}</h3>
        <span className="text-xs" style={{ color: "var(--text-secondary)" }}>View on GitHub</span>
      </a>
    )
  );

  return (
    <section id="github" aria-labelledby="github-heading" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="github-heading" className="text-3xl sm:text-4xl font-bold text-center mb-4">GitHub & Open Source</h2>
        <p className="text-center max-w-xl mx-auto mb-10" style={{ color: "var(--text-secondary)" }}>Live activity and highlighted repositories from my GitHub profile. Swipe to browse.</p>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          {user && <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}><Users size={16} /><span>{user.followers} followers</span></div>}
          {user && <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}><GitBranch size={16} /><span>{user.public_repos} public repos</span></div>}
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full text-white btn-glow"><GithubIcon size={16} /> View GitHub Profile</a>
        </div>

        <div className="flex justify-center mb-12">
          <img src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_border=true&theme=dark&bg_color=0d0d1f&title_color=a855f7&icon_color=22d3ee&text_color=9797ab`} alt="GitHub stats" className="gh-stats-dark rounded-xl max-w-full" loading="lazy" />
          <img src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_border=true&theme=default&bg_color=ffffff&title_color=7c3aed&icon_color=0891b2&text_color=55556b`} alt="GitHub stats" className="gh-stats-light rounded-xl max-w-full" loading="lazy" />
        </div>
      </div>

      <SwipeCarousel label="Featured repositories">{repoCards}</SwipeCarousel>
    </section>
  );
}
