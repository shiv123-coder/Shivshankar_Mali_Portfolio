import { Github, Star, GitFork, Users, BookOpen } from "lucide-react";
import GithubCalendarClient from "./GithubCalendarClient";

// Fetching with Next.js ISR (Cache revalidates every 1 hour)
async function getGithubUser() {
  try {
    const res = await fetch("https://api.github.com/users/shiv123-coder", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    return null;
  }
}

async function getRecentRepos() {
  try {
    const res = await fetch("https://api.github.com/users/shiv123-coder/repos?sort=updated&per_page=6", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch (e) {
    return [];
  }
}

export default async function GithubDashboard() {
  const user = await getGithubUser();
  const repos = await getRecentRepos();

  return (
    <section id="github" className="relative py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-4">
            <Github className="w-10 h-10 text-primary" /> GitHub Activity
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real-time insights directly from my GitHub profile. I believe in open-source 
            and continuous daily shipping.
          </p>
        </div>

        {/* Top Stats */}
        {user && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-6 rounded-2xl border border-border bg-card flex items-center gap-4">
              <div className="p-3 bg-secondary rounded-xl text-primary"><Users className="w-6 h-6" /></div>
              <div>
                <p className="text-2xl font-bold text-foreground">{user.followers}</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card flex items-center gap-4">
              <div className="p-3 bg-secondary rounded-xl text-primary"><BookOpen className="w-6 h-6" /></div>
              <div>
                <p className="text-2xl font-bold text-foreground">{user.public_repos}</p>
                <p className="text-sm text-muted-foreground">Public Repos</p>
              </div>
            </div>
            {/* Displaying static stars/PRs approximation if we don't use GQL */}
            <div className="p-6 rounded-2xl border border-border bg-card flex items-center gap-4">
              <div className="p-3 bg-secondary rounded-xl text-primary"><Star className="w-6 h-6" /></div>
              <div>
                <p className="text-2xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Stars Earned</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card flex items-center gap-4">
              <div className="p-3 bg-secondary rounded-xl text-primary"><GitFork className="w-6 h-6" /></div>
              <div>
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Total Commits (2026)</p>
              </div>
            </div>
          </div>
        )}

        {/* Contribution Graph */}
        <div className="mb-12">
          <GithubCalendarClient />
        </div>

        {/* Recent Repos */}
        <h3 className="text-xl font-bold mb-6">Recently Updated Repositories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.length > 0 ? repos.map((repo: any) => (
            <a 
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {repo.name}
                </h4>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-1">
                {repo.description || "No description provided."}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                {repo.language && (
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                    {repo.language}
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5" />
                  {repo.stargazers_count}
                </div>
                <div className="flex items-center gap-1.5">
                  <GitFork className="w-3.5 h-3.5" />
                  {repo.forks_count}
                </div>
              </div>
            </a>
          )) : (
            <p className="text-muted-foreground">No repositories found or API rate limit reached.</p>
          )}
        </div>

      </div>
    </section>
  );
}
