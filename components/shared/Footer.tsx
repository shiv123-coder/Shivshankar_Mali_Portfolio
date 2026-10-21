"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Mail, 
  ArrowUp, 
  Copy, 
  Check, 
  FileText, 
  Terminal, 
  GraduationCap, 
  Flame, 
  Cpu, 
  ExternalLink, 
  Sparkles,
  MapPin,
  Code2
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { toast } from "sonner";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Heatmaps", href: "#activity" },
  { name: "Contact", href: "#contact" },
];

const flashcards = [
  {
    id: "status",
    badge: "HIRING STATUS",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    title: "Open for Opportunities",
    subtitle: "Software Engineer / AI & Full-Stack",
    description: "Available for Full-Time Roles & Internships. High-speed shipping, clean architecture, and rapid deployment.",
    icon: Sparkles,
    iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    glowColor: "from-emerald-500/15 via-transparent to-transparent",
    hoverBorder: "hover:border-emerald-500/40",
    metric: "< 24h",
    metricLabel: "Response SLA",
  },
  {
    id: "academics",
    badge: "ACADEMIC EXCELLENCE",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    title: "9.53 CGPA • BSIOTR 2nd Topper",
    subtitle: "JSPM's BSIOTR, Pune • CE '27",
    description: "HSC 2nd Topper (Jogeshwari Mata) with 92.90 %ile in MHT-CET. Deep foundations in OS, DBMS, OOP & Computer Networks.",
    icon: GraduationCap,
    iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    glowColor: "from-amber-500/15 via-transparent to-transparent",
    hoverBorder: "hover:border-amber-500/40",
    metric: "Rank #2",
    metricLabel: "College Ranker",
  },
  {
    id: "dsa",
    badge: "COMPETITIVE EDGE",
    badgeColor: "bg-[#FFA116]/10 text-[#FFA116] border-[#FFA116]/30",
    title: "300+ Solved • CodeVita 2143",
    subtitle: "TCS CodeVita Global Rank 2143",
    description: "109-Day Max Streak on LeetCode with consecutive 50 Days Coding Badges. Consistent algorithmic rigor in Java 21.",
    icon: Flame,
    iconColor: "text-[#FFA116] bg-[#FFA116]/10 border-[#FFA116]/30",
    glowColor: "from-[#FFA116]/15 via-transparent to-transparent",
    hoverBorder: "hover:border-[#FFA116]/40",
    metric: "109 Days",
    metricLabel: "Max Streak 🔥",
  },
  {
    id: "systems",
    badge: "SYSTEMS & AI",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    title: "ANTARIKSH-OS & LoanIQ",
    subtitle: "Edge AI Platforms & Microservices",
    description: "Architecting edge AI radar cloud-removal systems, OCR underwriting pipelines, and production full-stack apps.",
    icon: Cpu,
    iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    glowColor: "from-cyan-500/15 via-transparent to-transparent",
    hoverBorder: "hover:border-cyan-500/40",
    metric: "Full-Stack",
    metricLabel: "PyTorch + MERN",
  },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shivashankrmali7@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!", {
      description: "shivashankrmali7@gmail.com",
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-border/60 bg-[#050811] text-foreground pt-16 pb-12 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* SECTION 1: INTERACTIVE DEVELOPER FLASHCARDS */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-2">
                <Code2 className="w-3.5 h-3.5" />
                <span>PROFILE QUICK SUMMARY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Engineer Snapshot <span className="text-cyan-400">Flashcards</span>
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-md sm:text-right">
              Key credentials, verified metrics &amp; engineering focus areas at a glance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {flashcards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`group relative p-6 rounded-3xl border border-white/10 bg-[#090f1d]/90 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${card.hoverBorder} overflow-hidden`}
                >
                  {/* Subtle top ambient glow */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${card.glowColor} blur-2xl pointer-events-none`} />

                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className={`p-2.5 rounded-2xl border ${card.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${card.badgeColor}`}>
                        {card.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-1">
                      {card.title}
                    </h4>
                    <p className="text-xs font-mono text-cyan-400/90 font-medium mb-3">
                      {card.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Bottom Metric Pill */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {card.metricLabel}
                    </span>
                    <span className="text-xs font-mono font-bold text-white px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                      {card.metric}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: COMMAND DOCK & QUICK ACTIONS */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl border border-cyan-500/20 bg-[#0b1323]/80 backdrop-blur-xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0 hidden sm:block">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-semibold text-emerald-400 tracking-wide uppercase">
                  Available for Hire • Remote &amp; On-Site
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mt-1">
                Let&apos;s Build Something Extraordinary Together
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Pune, Maharashtra, India • IST (UTC +5:30) • Open to Global Teams
              </p>
            </div>
          </div>

          {/* Quick Action Button Hub */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card/80 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-xs font-medium transition-all group shadow-sm active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <button
              onClick={handleOpenCommandPalette}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card/80 hover:border-purple-400/50 hover:bg-purple-500/10 text-xs font-medium transition-all group shadow-sm active:scale-95"
            >
              <Terminal className="w-4 h-4 text-muted-foreground group-hover:text-purple-400 transition-colors" />
              <span>Command Palette</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-muted-foreground">
                ⌘K
              </kbd>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500 hover:text-black text-cyan-400 text-xs font-semibold transition-all group shadow-sm active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2.5 rounded-xl border border-border bg-card/80 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-muted-foreground hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* SECTION 3: NAVIGATION LINKS & SOCIAL CARDS */}
        <div className="pb-12 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Quick Nav Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <Link href="/" className="flex items-center gap-1 group shrink-0">
              <span className="font-pixel text-xl font-bold tracking-wide text-cyan-400 group-hover:text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.65)] transition-all">
                Shivshankar Mali
              </span>
              <span className="text-primary font-mono font-bold text-lg">/&gt;</span>
            </Link>

            <nav className="flex items-center gap-4 flex-wrap justify-center text-xs font-medium text-muted-foreground">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Platforms Row */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="https://github.com/shiv123-coder"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-[#090f1d] text-xs font-medium text-muted-foreground hover:text-white hover:border-white/30 hover:bg-white/5 transition-all shadow-sm group"
            >
              <FaGithub className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shivshankar-mali-b46198314/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-[#090f1d] text-xs font-medium text-muted-foreground hover:text-[#0077B5] hover:border-[#0077B5]/40 hover:bg-[#0077B5]/10 transition-all shadow-sm group"
            >
              <FaLinkedin className="w-4 h-4 text-[#0077B5] group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://leetcode.com/u/shivshankar_Mali/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-[#090f1d] text-xs font-medium text-muted-foreground hover:text-[#FFA116] hover:border-[#FFA116]/40 hover:bg-[#FFA116]/10 transition-all shadow-sm group"
            >
              <SiLeetcode className="w-4 h-4 text-[#FFA116] group-hover:scale-110 transition-transform" />
              <span>LeetCode</span>
            </a>

            <a
              href="https://www.codechef.com/users/shiv_core"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-[#090f1d] text-xs font-medium text-muted-foreground hover:text-[#D1A684] hover:border-[#5B4638]/40 hover:bg-[#5B4638]/10 transition-all shadow-sm group"
            >
              <SiCodechef className="w-4 h-4 text-[#D1A684] group-hover:scale-110 transition-transform" />
              <span>CodeChef</span>
            </a>

            <a
              href="mailto:shivashankrmali7@gmail.com"
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-[#090f1d] text-xs font-medium text-muted-foreground hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all shadow-sm group"
            >
              <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>
          </div>

        </div>

        {/* SECTION 4: BIG CYBER BRAND WATERMARK & COPYRIGHT BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center sm:text-left">
          <div>
            <p>© {new Date().getFullYear()} Shivshankar D. Mali. All rights reserved.</p>
            <p className="text-[11px] text-muted-foreground/80 mt-0.5">
              Engineered with Next.js 15, TypeScript, Tailwind CSS &amp; Framer Motion.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Fast Edge Deployment</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-cyan-400" />
              <span>Pune, MH</span>
            </span>
          </div>
        </div>

      </div>

      {/* Low-opacity background typographic watermark */}
      <div className="max-w-7xl mx-auto px-6 mt-4 select-none pointer-events-none opacity-[0.03] dark:opacity-[0.04] text-center font-black tracking-tighter text-6xl sm:text-8xl md:text-9xl uppercase font-sans text-white overflow-hidden whitespace-nowrap">
        SHIVSHANKAR MALI
      </div>
    </footer>
  );
}
