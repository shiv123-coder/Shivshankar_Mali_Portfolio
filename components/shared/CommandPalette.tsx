"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Search, User, Briefcase, Code, Terminal, FileText, Mail, Trophy, Award, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
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
        className="relative z-50 w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
      >
        <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
          <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
          <Command.Input 
            autoFocus
            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Type a command or search..." 
          />
        </div>
        <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
          <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>
          
          <Command.Group heading="Navigation" className="text-xs font-medium text-muted-foreground px-2 py-1">
            <Command.Item 
              onSelect={() => runCommand(() => router.push("#about"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-accent/20 aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <User className="mr-2 h-4 w-4" />
              <span>About Me</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("#skills"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-accent/20 aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <Terminal className="mr-2 h-4 w-4" />
              <span>Skills & Tech Stack</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("#projects"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-accent/20 aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <Code className="mr-2 h-4 w-4" />
              <span>Featured Projects</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("#experience"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-accent/20 aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Experience</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("#achievements"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-accent/20 aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <Trophy className="mr-2 h-4 w-4" />
              <span>Achievements</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("#certifications"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-accent/20 aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <Award className="mr-2 h-4 w-4" />
              <span>Certifications</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("#contact"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-accent/20 aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/blog"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-accent/20 aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>Technical Blog</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Actions" className="text-xs font-medium text-muted-foreground px-2 py-1 mt-2">
            <Command.Item 
              onSelect={() => runCommand(() => window.open("https://shiv123-coder.github.io/Shivshankar_Mali_CSE_Resume_2027.pdf", "_blank"))}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-accent/20 aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>View Resume (PDF)</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.location.href = "mailto:shivashankrmali7@gmail.com")}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-accent/20 aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>Send Email</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
