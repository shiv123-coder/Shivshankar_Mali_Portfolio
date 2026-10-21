"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Database, 
  Layout, 
  Wrench, 
  ArrowUpRight,
  Code2
} from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer, 
  SiNodedotjs, 
  SiExpress, 
  SiFastapi, 
  SiPython, 
  SiPytorch, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb, 
  SiFirebase, 
  SiSupabase, 
  SiDocker, 
  SiGit, 
  SiGithub, 
  SiOpencv, 
  SiPostman, 
  SiCplusplus, 
  SiPhp 
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

type CategoryId = "all" | "frontend" | "backend" | "database" | "ai_tools";

interface SkillItem {
  name: string;
  category: CategoryId;
  icon: any;
  color: string;
  tag: string;
  context: string;
  proficiency: number;
}

const filterTabs: { id: CategoryId; label: string; icon: any; count: number }[] = [
  { id: "all", label: "All Technologies", icon: Layers, count: 22 },
  { id: "frontend", label: "Frontend & UI", icon: Layout, count: 6 },
  { id: "backend", label: "Backend & Systems", icon: Terminal, count: 6 },
  { id: "database", label: "Database & Cloud", icon: Database, count: 5 },
  { id: "ai_tools", label: "AI & DevOps Tools", icon: Cpu, count: 5 },
];

const coreSuperpowers = [
  {
    title: "Java 21 & Algorithmic Rigor",
    badge: "CORE FOUNDATION",
    icon: FaJava,
    iconColor: "text-[#ED8B00]",
    glow: "from-[#ED8B00]/15 via-transparent to-transparent",
    borderHover: "hover:border-[#ED8B00]/40",
    description: "Primary language for competitive programming & systems. Solved 300+ challenges on LeetCode & CodeChef. TCS CodeVita Global Rank 2143.",
    highlights: ["300+ DSA Solved", "TCS CodeVita Rank 2143", "Multithreading & OOP", "Memory Management"],
  },
  {
    title: "Next.js 15 & Modern Frontend",
    badge: "FULL-STACK PRODUCTION",
    icon: SiNextdotjs,
    iconColor: "text-white",
    glow: "from-cyan-500/15 via-transparent to-transparent",
    borderHover: "hover:border-cyan-400/40",
    description: "Engineered scalable web applications using React 19, TypeScript, Tailwind CSS, and Framer Motion with ISR caching & 100% Lighthouse scores.",
    highlights: ["React 19 & App Router", "Server Components (RSC)", "Tailwind & Framer Motion", "TypeScript Strict"],
  },
  {
    title: "Edge AI & Computer Vision",
    badge: "INNOVATION & RESEARCH",
    icon: SiPytorch,
    iconColor: "text-[#EE4C2C]",
    glow: "from-[#EE4C2C]/15 via-transparent to-transparent",
    borderHover: "hover:border-[#EE4C2C]/40",
    description: "Architecting ANTARIKSH-OS for satellite radar cloud-removal on local hardware with FFT and PyTorch. Built LoanIQ OCR underwriting pipelines.",
    highlights: ["ANTARIKSH-OS Edge AI", "OpenCV Vision Pipeline", "PyTorch & ONNX", "Explainable AI Scoring"],
  },
  {
    title: "Distributed Data & Cloud",
    badge: "ENTERPRISE BACKEND",
    icon: SiPostgresql,
    iconColor: "text-[#4169E1]",
    glow: "from-[#4169E1]/15 via-transparent to-transparent",
    borderHover: "hover:border-[#4169E1]/40",
    description: "Designing ACID-compliant relational schemas, indexed queries, RESTful microservices in FastAPI / Spring Boot, and containerized Docker CI/CD.",
    highlights: ["PostgreSQL & MySQL", "FastAPI & Express", "Docker Containerization", "GitHub Actions CI/CD"],
  },
];

const allSkills: SkillItem[] = [
  // Frontend
  {
    name: "React 19",
    category: "frontend",
    icon: SiReact,
    color: "#61DAFB",
    tag: "Core Library",
    context: "Client & Server Components",
    proficiency: 95,
  },
  {
    name: "Next.js 15",
    category: "frontend",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    tag: "Production",
    context: "App Router & SSR / ISR",
    proficiency: 92,
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "#3178C6",
    tag: "Type Safety",
    context: "Enterprise Architecture",
    proficiency: 90,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    color: "#06B6D4",
    tag: "Design System",
    context: "Responsive Cyber UI",
    proficiency: 96,
  },
  {
    name: "Framer Motion",
    category: "frontend",
    icon: SiFramer,
    color: "#0055FF",
    tag: "Animation",
    context: "Interactive Micro-Interactions",
    proficiency: 88,
  },
  {
    name: "Vite & PWA",
    category: "frontend",
    icon: SiReact,
    color: "#BD34FE",
    tag: "Bundler",
    context: "Offline-First Web Apps",
    proficiency: 86,
  },

  // Backend
  {
    name: "Java 21",
    category: "backend",
    icon: FaJava,
    color: "#ED8B00",
    tag: "Primary Lang",
    context: "300+ DSA • Spring Boot",
    proficiency: 95,
  },
  {
    name: "Python",
    category: "backend",
    icon: SiPython,
    color: "#3776AB",
    tag: "AI & Scripts",
    context: "FastAPI • Automation",
    proficiency: 90,
  },
  {
    name: "FastAPI",
    category: "backend",
    icon: SiFastapi,
    color: "#009688",
    tag: "High-Perf API",
    context: "Asynchronous Python Backend",
    proficiency: 88,
  },
  {
    name: "Node.js",
    category: "backend",
    icon: SiNodedotjs,
    color: "#5FA04E",
    tag: "Runtime",
    context: "Full-Stack Web Services",
    proficiency: 90,
  },
  {
    name: "Express.js",
    category: "backend",
    icon: SiExpress,
    color: "#FFFFFF",
    tag: "REST APIs",
    context: "LoanIQ & Microservices",
    proficiency: 92,
  },
  {
    name: "C++",
    category: "backend",
    icon: SiCplusplus,
    color: "#00599C",
    tag: "Systems CS",
    context: "Low-level Fundamentals",
    proficiency: 82,
  },

  // Database
  {
    name: "PostgreSQL",
    category: "database",
    icon: SiPostgresql,
    color: "#4169E1",
    tag: "Relational",
    context: "ACID • Indexed Queries",
    proficiency: 92,
  },
  {
    name: "MySQL",
    category: "database",
    icon: SiMysql,
    color: "#4479A1",
    tag: "SQL Engine",
    context: "Relational Data Modeling",
    proficiency: 88,
  },
  {
    name: "Supabase",
    category: "database",
    icon: SiSupabase,
    color: "#3ECF8E",
    tag: "Postgres BaaS",
    context: "Row-Level Security & Auth",
    proficiency: 86,
  },
  {
    name: "MongoDB",
    category: "database",
    icon: SiMongodb,
    color: "#47A248",
    tag: "Document NoSQL",
    context: "Aggregations & Mongoose",
    proficiency: 88,
  },
  {
    name: "Firebase",
    category: "database",
    icon: SiFirebase,
    color: "#FFCA28",
    tag: "Cloud Services",
    context: "Firestore & Cloud Storage",
    proficiency: 85,
  },

  // AI & Tools
  {
    name: "PyTorch",
    category: "ai_tools",
    icon: SiPytorch,
    color: "#EE4C2C",
    tag: "Deep Learning",
    context: "ANTARIKSH-OS Neural Models",
    proficiency: 87,
  },
  {
    name: "OpenCV",
    category: "ai_tools",
    icon: SiOpencv,
    color: "#5C3EE8",
    tag: "Computer Vision",
    context: "Image Preprocessing & OCR",
    proficiency: 89,
  },
  {
    name: "Docker",
    category: "ai_tools",
    icon: SiDocker,
    color: "#2496ED",
    tag: "DevOps",
    context: "Containerized Workflows",
    proficiency: 84,
  },
  {
    name: "Git & GitHub",
    category: "ai_tools",
    icon: SiGithub,
    color: "#F05032",
    tag: "Version Control",
    context: "CI/CD & Branching Strategy",
    proficiency: 94,
  },
  {
    name: "Postman",
    category: "ai_tools",
    icon: SiPostman,
    color: "#FF6C37",
    tag: "API Testing",
    context: "Automated Integration Tests",
    proficiency: 90,
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filteredSkills = activeCategory === "all" 
    ? allSkills 
    : allSkills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#060a12] text-foreground border-t border-border/60 overflow-hidden">
      {/* Background Cyber Ambient Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b14_1px,transparent_1px),linear-gradient(to_bottom,#1e293b14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>TECHNICAL ARSENAL &amp; ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Skills &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-primary to-purple-500 rounded-full mb-6 mx-auto md:mx-0" />
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed mx-auto md:mx-0">
            A battle-tested technology stack spanning algorithmic systems in Java, production full-stack engineering with Next.js, and edge computer vision with PyTorch.
          </p>
        </motion.div>

        {/* 1. CORE SUPERPOWERS COMMAND DECK */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Primary Core Pillars</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreSuperpowers.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group relative p-6 rounded-3xl border border-white/10 bg-[#090f1d]/90 backdrop-blur-xl flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5 ${card.borderHover} overflow-hidden`}
                >
                  <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br ${card.glow} blur-2xl pointer-events-none`} />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform">
                        <Icon className={`w-6 h-6 ${card.iconColor}`} />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/5 text-gray-300 border border-white/10">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 space-y-1.5">
                    {card.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-[11px] font-mono text-gray-300">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. INTERACTIVE CATEGORY FILTER TABS */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Tech Arsenal</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-cyan-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                      : "bg-[#0e1a30] text-gray-400 hover:text-white hover:bg-[#132342] border border-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isSelected ? "bg-black/20 text-black font-bold" : "bg-white/10 text-gray-400"}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. DYNAMIC SKILL CARDS GRID */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 mb-16">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="group relative p-4 rounded-2xl border border-white/10 bg-[#090f1d]/80 hover:bg-[#0d162b] backdrop-blur-md flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg shadow-sm"
                >
                  <div>
                    {/* Top Row: Icon + Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <div 
                        className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform"
                        style={{ color: skill.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                        {skill.tag}
                      </span>
                    </div>

                    {/* Skill Name */}
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                      {skill.name}
                    </h4>

                    {/* Usage Context */}
                    <p className="text-[11px] text-muted-foreground mt-1 line-clamp-1">
                      {skill.context}
                    </p>
                  </div>

                  {/* Level Indicator Bar */}
                  <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-400">
                    <span>Proficiency</span>
                    <span className="text-cyan-400 font-bold">{skill.proficiency}%</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* 4. REPOSITORY LANGUAGE DISTRIBUTION TELEMETRY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl border border-cyan-500/20 bg-[#0b1323]/80 backdrop-blur-xl shadow-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-3">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span>Production Codebase Language Distribution</span>
            </h3>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
              Verified from GitHub &amp; Local Workspaces
            </span>
          </div>

          {/* Glowing Multi-Color Progress Track */}
          <div className="flex h-3.5 w-full rounded-full overflow-hidden mb-6 p-0.5 bg-black/40 border border-white/10 shadow-inner">
            <div className="bg-gradient-to-r from-[#b07219] to-[#d68b24] w-[45%] rounded-l-full transition-all" title="Java: 45%" />
            <div className="bg-gradient-to-r from-[#3178c6] to-[#4994e6] w-[25%] transition-all" title="TypeScript: 25%" />
            <div className="bg-gradient-to-r from-[#f1e05a] to-[#fae868] w-[15%] transition-all" title="JavaScript: 15%" />
            <div className="bg-gradient-to-r from-[#3572A5] to-[#4891cc] w-[10%] transition-all" title="Python: 10%" />
            <div className="bg-gradient-to-r from-[#00599C] to-[#4F5D95] w-[5%] rounded-r-full transition-all" title="C++ & PHP: 5%" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-xs font-mono text-gray-300">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#b07219] shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-white">Java (45%)</span>
                <span className="text-[10px] text-muted-foreground">DSA &amp; Systems</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3178c6] shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-white">TypeScript (25%)</span>
                <span className="text-[10px] text-muted-foreground">Next.js &amp; Web</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f1e05a] shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-white">JavaScript (15%)</span>
                <span className="text-[10px] text-muted-foreground">MERN &amp; Node</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3572A5] shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-white">Python (10%)</span>
                <span className="text-[10px] text-muted-foreground">FastAPI &amp; PyTorch</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00599C] shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-white">C++ / Other (5%)</span>
                <span className="text-[10px] text-muted-foreground">Low-Level CS</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
