import { Star, GitFork, Users, BookOpen, ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import GithubCalendarClient from "./GithubCalendarClient";
import LeetcodeCalendarClient from "./LeetcodeCalendarClient";
import { LeetCodeData, fallbackLeetCodeData } from "@/lib/leetcodeSnapshot";

// Fetch LeetCode User Data with Next.js ISR
async function getLeetCodeUser(): Promise<LeetCodeData> {
  const query = `
    query userProfileCalendar($username: String!) {
      matchedUser(username: $username) {
        userCalendar {
          activeYears
          streak
          totalActiveDays
          submissionCalendar
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        profile {
          ranking
          reputation
        }
      }
    }
  `;

  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      body: JSON.stringify({
        query,
        variables: { username: "shivshankar_Mali" },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return fallbackLeetCodeData;
    const d = await res.json();
    const u = d?.data?.matchedUser;
    if (!u) return fallbackLeetCodeData;

    return {
      username: "shivshankar_Mali",
      ranking: u.profile?.ranking ?? fallbackLeetCodeData.ranking,
      streak: u.userCalendar?.streak ?? fallbackLeetCodeData.streak,
      totalActiveDays: u.userCalendar?.totalActiveDays ?? fallbackLeetCodeData.totalActiveDays,
      acSubmissionNum: u.submitStats?.acSubmissionNum ?? fallbackLeetCodeData.acSubmissionNum,
      submissionCalendar: JSON.parse(u.userCalendar?.submissionCalendar || "{}"),
    };
  } catch (e) {
    return fallbackLeetCodeData;
  }
}

// Fetching GitHub with Next.js ISR (Cache revalidates every 1 hour)
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
  const leetcode = await getLeetCodeUser();

  return (
    <section id="activity" className="relative py-24 bg-background border-t border-border">
      <span id="github" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Live Telemetry &amp; Heatmaps</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
              Activity &amp; Contribution Heatmaps
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#FFA116] via-cyan-400 to-purple-500 rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              Consistent daily execution across competitive programming on LeetCode and open-source shipping on GitHub.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="https://leetcode.com/u/shivshankar_Mali/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:border-[#FFA116]/50 hover:bg-[#FFA116]/10 text-sm font-medium transition-all group shadow-sm"
            >
              <SiLeetcode className="w-4 h-4 text-[#FFA116]" />
              <span>LeetCode (302 Solved)</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://github.com/shiv123-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/10 text-sm font-medium transition-all group shadow-sm"
            >
              <FaGithub className="w-4 h-4 text-primary" />
              <span>GitHub (shiv123-coder)</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://www.codechef.com/users/shiv_core"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:border-[#5B4638]/50 hover:bg-[#5B4638]/10 text-sm font-medium transition-all group shadow-sm"
            >
              <SiCodechef className="w-4 h-4 text-[#5B4638] dark:text-[#D1A684]" />
              <span>CodeChef (Rank 2143)</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>

        {/* 1. LeetCode Activity & Heatmap (Directly Above GitHub Heatmap) */}
        <div className="mb-16">
          <LeetcodeCalendarClient data={leetcode} />
        </div>

        {/* 2. GitHub Header & Contribution Area */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
              <FaGithub className="w-7 h-7 text-primary" /> GitHub Activity &amp; Contributions
            </h3>
            <p className="text-sm text-muted-foreground">
              Real-time insights directly from my GitHub profile. I believe in open-source and continuous daily shipping.
            </p>
          </div>
          <a
            href="https://github.com/shiv123-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Top GitHub Stats */}
        {user && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-6 rounded-2xl border border-border bg-card flex items-center gap-4 hover:border-primary/40 transition-colors">
              <div className="p-3 bg-secondary rounded-xl text-primary"><Users className="w-6 h-6" /></div>
              <div>
                <p className="text-2xl font-bold text-foreground">{user.followers}</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card flex items-center gap-4 hover:border-primary/40 transition-colors">
              <div className="p-3 bg-secondary rounded-xl text-primary"><BookOpen className="w-6 h-6" /></div>
              <div>
                <p className="text-2xl font-bold text-foreground">{user.public_repos}</p>
                <p className="text-sm text-muted-foreground">Public Repos</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card flex items-center gap-4 hover:border-primary/40 transition-colors">
              <div className="p-3 bg-secondary rounded-xl text-primary"><Star className="w-6 h-6" /></div>
              <div>
                <p className="text-2xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Stars Earned</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card flex items-center gap-4 hover:border-primary/40 transition-colors">
              <div className="p-3 bg-secondary rounded-xl text-primary"><GitFork className="w-6 h-6" /></div>
              <div>
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Total Commits (2026)</p>
              </div>
            </div>
          </div>
        )}

        {/* GitHub Contribution Graph */}
        <div className="mb-14">
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

