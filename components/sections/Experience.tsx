"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  Trophy, 
  Award, 
  ExternalLink, 
  Code, 
  Sparkles, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  FileCheck,
  ShieldCheck,
  Terminal,
  Clock
} from "lucide-react";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { cn } from "@/lib/utils";

type TabId = "experience" | "achievements" | "certifications";

const experiences = [
  {
    role: "Freelance AI & Full-Stack Developer",
    company: "Self-Employed / Global Clients",
    date: "2024 – Present",
    status: "Active",
    location: "Remote / Worldwide",
    type: "Freelance & Production Delivery",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    description: "Architecting, developing, and deploying full-stack web applications and AI pipelines for commercial clients with focus on scalability, speed, and real user empathy.",
    highlights: [
      "Engineered responsive modern web apps using Next.js 15, React 19, TypeScript, and Tailwind CSS with 100% Lighthouse performance.",
      "Built backend microservices and high-throughput REST APIs in FastAPI, Node.js, and PostgreSQL with Docker deployments.",
      "Handled complete software lifecycles: requirement discovery, UI/UX implementation, cloud configuration, and production maintenance."
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "FastAPI", "PostgreSQL", "PyTorch", "Docker", "Tailwind CSS"],
    certificate: "",
    icon: Code,
  },
  {
    role: "Java & Data Structures Intern",
    company: "Talent Battle Pvt. Ltd.",
    date: "July 2025",
    status: "Completed",
    location: "Pune, MH, India",
    type: "Summer Internship",
    tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    description: "Intensive algorithmic engineering internship focused on advanced data structures, computational complexity, and clean object-oriented architecture in Java 21.",
    highlights: [
      "Deepened mastery in core Java 21, multithreading, memory management, and Collections framework.",
      "Implemented complex data structures (Trees, Graphs, HashMaps, Heaps) and optimized asymptotic runtime complexities.",
      "Solved 100+ algorithmic scenarios, building the competitive foundations for TCS CodeVita Season 13 Global Rank 2143."
    ],
    tech: ["Java 21", "Data Structures", "Algorithms", "OOP", "Collections Framework", "Problem Solving"],
    certificate: "https://drive.google.com/file/d/1qzONcMVjVLykMn06f6GnNJDo4S2D311v/view?usp=sharing",
    icon: Briefcase,
  },
  {
    role: "Java Development Intern",
    company: "Oasis Infobyte",
    date: "2024",
    status: "Completed",
    location: "Remote, India",
    type: "Software Internship",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    description: "Engineered modular backend Java applications adhering to clean code standards, separation of concerns, and industry best practices.",
    highlights: [
      "Built backend service layers, business logic controllers, and database connectivity with JDBC and MySQL.",
      "Followed clean architecture principles and implemented robust exception-handling and validation routines.",
      "Practiced version control workflows with Git & GitHub, documentation, and automated test cases."
    ],
    tech: ["Java", "JDBC", "MySQL", "Backend Workflows", "Clean Architecture", "Git"],
    certificate: "https://drive.google.com/file/d/1uV9Ec-MV_9EkuHjdvtsWhNtTsC1ZLwuj/view?usp=sharing",
    icon: Briefcase,
  }
];

const achievements = [
  {
    title: "TCS CodeVita Season 13 — Global Rank 2143",
    category: "GLOBAL CONTEST",
    categoryColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    description: "Secured a Global Rank of 2143 in Season 13 of the International Coding Contest conducted by Tata Consultancy Services, competing against over 100,000+ competitive programmers globally.",
    metric: "Rank 2143",
    metricLabel: "Global Standing",
    link: "https://drive.google.com/file/d/1rH2a06f-mDsVEqGgX6KnBwNgQuLwVV1B/view?usp=sharing",
    icon: Trophy,
    glow: "from-amber-500/15 via-transparent to-transparent",
  },
  {
    title: "Academic Honors & BSIOTR 2nd College Topper",
    category: "ACADEMIC EXCELLENCE",
    categoryColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    description: "Ranked as 2nd College Topper at JSPM's BSIOTR Pune with a 9.53 CGPA across Computer Engineering. Previously secured 2nd College Topper in HSC at Jogeshwari Mata Jr. College with a 92.90 percentile in MHT-CET.",
    metric: "9.53 CGPA",
    metricLabel: "College Rank #2",
    link: "",
    icon: Award,
    glow: "from-cyan-500/15 via-transparent to-transparent",
  },
  {
    title: "300+ Algorithmic Challenges Solved",
    category: "COMPETITIVE PROGRAMMING",
    categoryColor: "text-[#FFA116] bg-[#FFA116]/10 border-[#FFA116]/30",
    description: "Solved 300+ data structures and algorithm problems across LeetCode (@shivshankar_Mali) and CodeChef (@shiv_core) with a 109-Day Max Streak and consecutive 50 Days Coding Badges.",
    metric: "300+ Solved",
    metricLabel: "109-Day Streak",
    link: "https://leetcode.com/u/shivshankar_Mali/",
    icon: SiLeetcode,
    glow: "from-[#FFA116]/15 via-transparent to-transparent",
  },
  {
    title: "TenZorX AI Hackathon Finalist — LoanIQ",
    category: "AI HACKATHON",
    categoryColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    description: "Built LoanIQ under Team CodeStorm — an automated underwriting platform featuring PAN card OCR data extraction, face-liveness biometric verification, and explainable credit risk scoring.",
    metric: "Finalist",
    metricLabel: "AI Underwriting",
    link: "https://drive.google.com/file/d/1HUlUk8fwqefLBVxeIl4censhd-O7jdY6/view?usp=sharing",
    icon: Trophy,
    glow: "from-purple-500/15 via-transparent to-transparent",
  },
  {
    title: "VYOMA 2026 Prototype Competition",
    category: "SYSTEMS INNOVATION",
    categoryColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    description: "Engineered the Mukti Portal prototype, focusing on tech-driven social and financial inclusion for underserved demographics, earning competition accolades.",
    metric: "Winner Prototype",
    metricLabel: "Social Impact",
    link: "https://drive.google.com/file/d/1lhM2ur-aR0Zgo9dAX3g1G5qyL9Rt7902/view?usp=sharing",
    icon: Award,
    glow: "from-emerald-500/15 via-transparent to-transparent",
  },
  {
    title: "MaTPO National Aptitude Idol 2025",
    category: "NATIONAL RECOGNITION",
    categoryColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    description: "Earned national certification in the prestigious aptitude and logical reasoning competition organized by the Maharashtra Training and Placement Officers association.",
    metric: "Certified",
    metricLabel: "Aptitude Idol",
    link: "https://drive.google.com/file/d/1e7Ol6XY2tbdIbbPpOXzWvZqQlFrdBOVI/view?usp=sharing",
    icon: Award,
    glow: "from-blue-500/15 via-transparent to-transparent",
  }
];

const credentialsList = [
  {
    title: "Java & DSA Internship Certification",
    issuer: "Talent Battle Pvt. Ltd.",
    date: "July 2025",
    badge: "INTERNSHIP CREDENTIAL",
    link: "https://drive.google.com/file/d/1qzONcMVjVLykMn06f6GnNJDo4S2D311v/view?usp=sharing",
  },
  {
    title: "Java Development Internship Certification",
    issuer: "Oasis Infobyte",
    date: "2024",
    badge: "INTERNSHIP CREDENTIAL",
    link: "https://drive.google.com/file/d/1uV9Ec-MV_9EkuHjdvtsWhNtTsC1ZLwuj/view?usp=sharing",
  },
  {
    title: "TCS CodeVita Season 13 Certificate of Merit",
    issuer: "Tata Consultancy Services",
    date: "Season 13",
    badge: "GLOBAL COMPETITION",
    link: "https://drive.google.com/file/d/1rH2a06f-mDsVEqGgX6KnBwNgQuLwVV1B/view?usp=sharing",
  },
  {
    title: "TenZorX AI Hackathon Achievement",
    issuer: "TenZorX Technologies",
    date: "2025",
    badge: "HACKATHON FINALIST",
    link: "https://drive.google.com/file/d/1HUlUk8fwqefLBVxeIl4censhd-O7jdY6/view?usp=sharing",
  },
  {
    title: "VYOMA 2026 Prototype Innovation Certificate",
    issuer: "VYOMA Competition",
    date: "2026",
    badge: "PROTOTYPE COMPETITION",
    link: "https://drive.google.com/file/d/1lhM2ur-aR0Zgo9dAX3g1G5qyL9Rt7902/view?usp=sharing",
  },
  {
    title: "MaTPO Aptitude Idol National Certificate",
    issuer: "MaTPO Association",
    date: "2025",
    badge: "NATIONAL APTITUDE",
    link: "https://drive.google.com/file/d/1e7Ol6XY2tbdIbbPpOXzWvZqQlFrdBOVI/view?usp=sharing",
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TabId>("experience");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#achievements") {
        setActiveTab("achievements");
      } else if (hash === "#certifications") {
        setActiveTab("certifications");
      } else if (hash === "#experience") {
        setActiveTab("experience");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#060a12] text-foreground border-t border-border/60 overflow-hidden">
      {/* Invisible anchor points for smooth navigation */}
      <div id="certifications" className="absolute -top-24 pointer-events-none" />
      <div id="achievements" className="absolute -top-24 pointer-events-none" />

      {/* Cyber Ambient Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b14_1px,transparent_1px),linear-gradient(to_bottom,#1e293b14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY &amp; VERIFIED MILESTONES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Experience &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400">Milestones</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-primary to-purple-500 rounded-full mb-6 mx-auto md:mx-0" />
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed mx-auto md:mx-0">
            A track record of high-velocity client software delivery, intensive engineering internships, and national &amp; global contest accolades.
          </p>
        </motion.div>

        {/* 3-Tab Interactive Segmented Pill Switcher */}
        <div className="flex justify-center md:justify-start mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex p-1.5 bg-[#0b1323] rounded-2xl border border-white/10 shadow-2xl flex-wrap gap-1"
          >
            <button
              onClick={() => setActiveTab("experience")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer",
                activeTab === "experience" 
                  ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] font-bold scale-[1.02]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
              <span className={cn("text-[10px] font-mono px-1.5 py-0.2 rounded-full", activeTab === "experience" ? "bg-black/20 text-black font-bold" : "bg-white/10 text-gray-400")}>
                {experiences.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("achievements")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer",
                activeTab === "achievements" 
                  ? "bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.4)] font-bold scale-[1.02]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Trophy className="w-4 h-4" />
              <span>Global Honors</span>
              <span className={cn("text-[10px] font-mono px-1.5 py-0.2 rounded-full", activeTab === "achievements" ? "bg-black/20 text-black font-bold" : "bg-white/10 text-gray-400")}>
                {achievements.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("certifications")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer",
                activeTab === "certifications" 
                  ? "bg-purple-400 text-black shadow-[0_0_20px_rgba(192,132,252,0.4)] font-bold scale-[1.02]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <FileCheck className="w-4 h-4" />
              <span>Certifications</span>
              <span className={cn("text-[10px] font-mono px-1.5 py-0.2 rounded-full", activeTab === "certifications" ? "bg-black/20 text-black font-bold" : "bg-white/10 text-gray-400")}>
                {credentialsList.length}
              </span>
            </button>
          </motion.div>
        </div>

        {/* Dynamic Tab Panes */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: WORK EXPERIENCE TIMELINE */}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {experiences.map((exp, idx) => {
                  const Icon = exp.icon;
                  return (
                    <motion.div 
                      key={exp.role}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative rounded-3xl border border-white/10 bg-[#090f1d]/90 backdrop-blur-xl p-6 sm:p-8 hover:border-cyan-400/40 transition-all duration-300 shadow-xl overflow-hidden"
                    >
                      {/* Ambient background flare */}
                      <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                      {/* Header Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-5 border-b border-white/5">
                        <div className="flex items-start sm:items-center gap-4">
                          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2.5 flex-wrap">
                              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                {exp.role}
                              </h3>
                              <span className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border", exp.tagColor)}>
                                {exp.status}
                              </span>
                            </div>
                            <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        {/* Date & Location Pill */}
                        <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1 text-xs font-mono text-muted-foreground shrink-0">
                          <span className="flex items-center gap-1.5 text-white font-medium bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{exp.date}</span>
                          </span>
                          <span className="flex items-center gap-1 text-[11px] text-gray-400">
                            <MapPin className="w-3 h-3 text-purple-400" />
                            <span>{exp.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Narrative Overview */}
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Key Highlights Bulleted Box */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#0e1a30]/80 border border-white/5 mb-6 space-y-2.5">
                        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>KEY CONTRIBUTIONS &amp; IMPACT</span>
                        </div>
                        {exp.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Chips & Certificate Button */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-gray-300 border border-white/5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {exp.certificate && (
                          <a 
                            href={exp.certificate} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-black bg-cyan-500/10 hover:bg-cyan-400 px-4 py-2 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-200 group/btn shrink-0"
                          >
                            <ShieldCheck className="w-4 h-4" />
                            <span>Verify Certificate</span>
                            <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {/* TAB 2: GLOBAL HONORS & ACHIEVEMENTS BENTO */}
            {activeTab === "achievements" && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {achievements.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="group relative p-6 sm:p-7 rounded-3xl border border-white/10 bg-[#090f1d]/90 backdrop-blur-xl hover:border-amber-400/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl overflow-hidden"
                    >
                      <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br ${item.glow} blur-2xl pointer-events-none`} />

                      <div>
                        {/* Top: Category Tag + Metric */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border", item.categoryColor)}>
                            {item.category}
                          </span>
                          <div className="text-right">
                            <span className="text-sm font-bold text-white block">
                              {item.metric}
                            </span>
                            <span className="text-[10px] font-mono text-muted-foreground block -mt-0.5">
                              {item.metricLabel}
                            </span>
                          </div>
                        </div>

                        {/* Title with Icon */}
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-amber-400 group-hover:scale-110 transition-transform shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                            {item.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-gray-300 leading-relaxed mb-6">
                          {item.description}
                        </p>
                      </div>

                      {/* Credential Link Button */}
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-gray-400">
                          {item.link ? "Official Verification Available" : "Institutional Honor"}
                        </span>
                        {item.link ? (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-white transition-colors group/link"
                          >
                            <span>Verify</span>
                            <ExternalLink className="w-3.5 h-3.5 group-link:translate-x-0.5 transition-transform" />
                          </a>
                        ) : (
                          <span className="text-xs font-mono text-cyan-400 font-semibold">
                            Verified
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {/* TAB 3: VERIFIED CERTIFICATIONS DIRECT VERIFICATION */}
            {activeTab === "certifications" && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {credentialsList.map((cert, idx) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.06 }}
                    className="group relative p-6 rounded-3xl border border-white/10 bg-[#090f1d]/90 backdrop-blur-xl hover:border-purple-400/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-purple-500/10 text-purple-400 border border-purple-500/30">
                          {cert.badge}
                        </span>
                        <span className="text-[11px] font-mono text-gray-400">
                          {cert.date}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors leading-snug mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400 mb-4">
                        Issued by: {cert.issuer}
                      </p>
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-white border border-white/10 hover:border-purple-400/40 transition-all duration-200 group/btn"
                    >
                      <ShieldCheck className="w-4 h-4 text-purple-400" />
                      <span>View Credential Document</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
