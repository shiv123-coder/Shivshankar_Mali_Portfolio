"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Search, User, Terminal, Code, FileText, Mail, Trophy, Award, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    const handleOpen = () => setOpen(true);

    document.addEventListener("keydown", down);
    window.addEventListener("open-command-palette", handleOpen);
    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("open-command-palette", handleOpen);
    };
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-background/80 backdrop-blur-sm p-4">
      <div 
        className="fixed inset-0" 
        onClick={() => setOpen(false)}
      />
      <Command 
        className="relative z-50 w-full max-w-2xl overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#0b1323] shadow-2xl text-foreground"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
      >
        <div className="flex items-center border-b border-white/10 px-3" cmdk-input-wrapper="">
          <Search className="mr-2 h-4 w-4 shrink-0 text-cyan-400" />
          <Command.Input 
            autoFocus
            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground text-white disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Type a command or search sections..." 
          />
        </div>
        <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">No results found.</Command.Empty>
          
          <Command.Group heading="Navigation" className="text-xs font-mono font-medium text-cyan-400/80 px-2 py-1">
            <Command.Item 
              onSelect={() => runCommand(() => router.push("#about"))}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors mt-1"
            >
              <User className="mr-2 h-4 w-4 text-cyan-400" />
              <span>About Me</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("#skills"))}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors mt-1"
            >
              <Terminal className="mr-2 h-4 w-4 text-cyan-400" />
              <span>Skills &amp; Tech Stack</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("#projects"))}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors mt-1"
            >
              <Code className="mr-2 h-4 w-4 text-cyan-400" />
              <span>Featured Architecture &amp; Projects</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("#experience"))}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors mt-1"
            >
              <Award className="mr-2 h-4 w-4 text-cyan-400" />
              <span>Experience &amp; Certifications</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("#achievements"))}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors mt-1"
            >
              <Trophy className="mr-2 h-4 w-4 text-cyan-400" />
              <span>Achievements &amp; Hackathons</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("#contact"))}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors mt-1"
            >
              <Mail className="mr-2 h-4 w-4 text-cyan-400" />
              <span>Get in Touch</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Actions &amp; Resume" className="text-xs font-mono font-medium text-cyan-400/80 px-2 py-1 mt-2">
            <Command.Item 
              onSelect={() => runCommand(() => window.open("/Shivshankar_Mali_CSE_Resume_2027.pdf", "_blank"))}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors mt-1"
            >
              <FileText className="mr-2 h-4 w-4 text-cyan-400" />
              <span>View Resume (PDF)</span>
              <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.open("mailto:shivashankrmali7@gmail.com"))}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors mt-1"
            >
              <Mail className="mr-2 h-4 w-4 text-cyan-400" />
              <span>Send Email</span>
              <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Profiles" className="text-xs font-mono font-medium text-cyan-400/80 px-2 py-1 mt-2">
            <Command.Item 
              onSelect={() => runCommand(() => window.open("https://github.com/shiv123-coder", "_blank"))}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors mt-1"
            >
              <FaGithub className="mr-2 h-4 w-4 text-white" />
              <span>GitHub</span>
              <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/shivshankar-mali-b46198314/", "_blank"))}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors mt-1"
            >
              <FaLinkedin className="mr-2 h-4 w-4 text-[#0a66c2]" />
              <span>LinkedIn</span>
              <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.open("https://leetcode.com/u/shivshankar_Mali/", "_blank"))}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors mt-1"
            >
              <SiLeetcode className="mr-2 h-4 w-4 text-[#ffa116]" />
              <span>LeetCode</span>
              <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.open("https://www.codechef.com/users/shiv_core", "_blank"))}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-2.5 text-sm outline-none hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors mt-1"
            >
              <SiCodechef className="mr-2 h-4 w-4 text-[#d39e82]" />
              <span>CodeChef</span>
              <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
