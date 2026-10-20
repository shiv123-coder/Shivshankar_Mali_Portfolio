import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-background py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shivshankar D. Mali. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Engineered with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>

        {/* Social & Competitive Programming Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/shiv123-coder"
            target="_blank"
            rel="noreferrer"
            title="GitHub: shiv123-coder"
            className="p-2.5 rounded-xl border border-border/60 bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-border transition-all"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/shivshankar-mali-b46198314/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn: Shivshankar Mali"
            className="p-2.5 rounded-xl border border-border/60 bg-secondary/40 text-muted-foreground hover:text-[#0077B5] hover:bg-secondary hover:border-border transition-all"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://leetcode.com/u/shivshankar_Mali/"
            target="_blank"
            rel="noreferrer"
            title="LeetCode: shivshankar_Mali"
            className="p-2.5 rounded-xl border border-border/60 bg-secondary/40 text-muted-foreground hover:text-[#FFA116] hover:bg-secondary hover:border-border transition-all"
          >
            <span className="sr-only">LeetCode</span>
            <SiLeetcode className="w-4 h-4" />
          </a>
          <a
            href="https://www.codechef.com/users/shiv_core"
            target="_blank"
            rel="noreferrer"
            title="CodeChef: shiv_core"
            className="p-2.5 rounded-xl border border-border/60 bg-secondary/40 text-muted-foreground hover:text-[#5B4638] dark:hover:text-[#D1A684] hover:bg-secondary hover:border-border transition-all"
          >
            <span className="sr-only">CodeChef</span>
            <SiCodechef className="w-4 h-4" />
          </a>
          <a
            href="mailto:shivashankrmali7@gmail.com"
            title="Email: shivashankrmali7@gmail.com"
            className="p-2.5 rounded-xl border border-border/60 bg-secondary/40 text-muted-foreground hover:text-primary hover:bg-secondary hover:border-border transition-all"
          >
            <span className="sr-only">Email</span>
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
