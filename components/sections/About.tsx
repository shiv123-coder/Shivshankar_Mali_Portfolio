"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Rocket, 
  Code2, 
  CheckCircle2, 
  Sparkles, 
  Terminal 
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "academics",
    label: "Academic Excellence",
    icon: GraduationCap,
    tag: "FOCUS: ACADEMIC RIGOR & HONORS",
    tagClass: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    title: "Consistently High-Performing & BSIOTR 2nd Topper",
    description:
      "My engineering discipline is rooted in deep theoretical grounding and academic rigor. I have maintained a 9.53 CGPA at JSPM's Bhivarabai Sawant Institute of Technology & Research (BSIOTR), Pune, ranking as the 2nd College Topper. Previously, I secured 2nd College Topper honors in HSC at Jogeshwari Mata Secondary and Higher Secondary College and achieved a 92.90 percentile in MHT-CET, reflecting a continuous commitment to excellence.",
    highlights: [
      "Maintained 9.53 CGPA in B.E. Computer Engineering (2023–2027) at JSPM's BSIOTR, Pune.",
      "Secured 2nd College Topper standing across the entire institute.",
      "HSC 2nd College Topper at Jogeshwari Mata Jr. College with 92.90 percentile in MHT-CET.",
      "Deep fundamentals in Operating Systems, Database Management Systems (ACID), and OOP in Java 21.",
    ],
  },
  {
    id: "systems",
    label: "The Builder Mindset",
    icon: Rocket,
    tag: "FOCUS: AI PLATFORMS & PRODUCTION ARCHITECTURE",
    tagClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    title: "Engineering ANTARIKSH-OS & Scalable AI Systems",
    description:
      "I believe the best way to understand systems is to build them from the ground up. Currently architecting ANTARIKSH-OS, an edge-native AI platform for earth observation, radar-guided cloud removal, and disaster response on local hardware. I have also engineered LoanIQ (automated OCR and biometric underwriting) and VisionKirana (inventory computer-vision risk assessment). Additionally, I actively take on commercial freelance development for real-world clients.",
    highlights: [
      "Developing ANTARIKSH-OS: Edge AI platform using PyTorch, ONNX, and FFT on local hardware.",
      "Built LoanIQ: End-to-end loan origination with PAN OCR, biometric liveness, and explainable risk scoring.",
      "Engineered VisionKirana: Micro-lending intelligence assessing kirana store health via shelf imagery.",
      "Proven freelance delivery: Designing, deploying, and maintaining cloud-backed full-stack systems.",
    ],
  },
  {
    id: "dsa",
    label: "Problem Solving & CS",
    icon: Code2,
    tag: "FOCUS: ALGORITHMIC RIGOR & COMPETITIVE PROGRAMMING",
    tagClass: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    title: "Algorithmic Rigor & Global Competition Experience",
    description:
      "Problem solving is the core foundation of my software development philosophy. I regularly practice data structures and algorithms in Java, having solved 300+ challenges across LeetCode and CodeChef. On the global contest stage, I achieved a Global Rank of 2143 in TCS CodeVita Season 13 and completed the LeetCode 100 Days Challenge, earning 50 Days Coding Badges across multiple consecutive years.",
    highlights: [
      "Secured Global Rank 2143 in Season 13 of the TCS CodeVita international coding contest.",
      "Solved 300+ algorithmic and data structure problems on LeetCode (@shivshankar_Mali) and CodeChef (@shiv_core).",
      "Awarded consecutive LeetCode 50 Days Coding Badges (2025 & 2026).",
      "Strong mastery of graph theory, dynamic programming, asymptotic optimization, and clean Java architecture.",
    ],
  },
];

const metrics = [
  {
    value: "9.53",
    label: "OVERALL CGPA",
    color: "text-cyan-400",
  },
  {
    value: "300+",
    label: "DSA SOLVED",
    color: "text-emerald-400",
  },
  {
    value: "Rank 2143",
    label: "TCS CODEVITA",
    color: "text-purple-400",
  },
  {
    value: "2nd Topper",
    label: "BSIOTR RANKER",
    color: "text-amber-400",
  },
];

export default function About() {
  const [activeTabId, setActiveTabId] = useState("academics");
  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#060a12] text-foreground overflow-hidden">
      {/* Background Cyber Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b14_1px,transparent_1px),linear-gradient(to_bottom,#1e293b14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>DISCOVERY &amp; BACKGROUND</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Driven by engineering discipline, strong CS fundamentals, and a passion for turning complex ideas into clean, scalable software.
          </p>
        </motion.div>

        {/* 2-Column Main Dossier Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Profile Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-3xl border border-cyan-500/25 bg-[#0b1323]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Corner Flare */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

            {/* Profile Avatar with Glowing Ring */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_30px_rgba(34,211,238,0.25)] mb-4">
                <img
                  src="https://github.com/shiv123-coder.png"
                  alt="Shivshankar Mali"
                  className="w-full h-full object-cover rounded-full border-2 border-[#070b12]"
                />
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                Shivshankar Mali
              </h3>
              <p className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mt-1">
                Computer Engineering Undergraduate
              </p>
              <p className="text-xs text-gray-400 mt-1">
                JSPM&apos;s BSIOTR, Pune • Class of 2027
              </p>
            </div>

            {/* 4-Stat Metric Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3.5 rounded-2xl bg-[#0e1a30] border border-white/5 text-center flex flex-col justify-center"
                >
                  <span className={`text-lg sm:text-xl font-bold ${m.color} tracking-tight`}>
                    {m.value}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Arsenal Quick Chips */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                Core Domains
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Java 21", "Next.js 15", "PyTorch", "FastAPI", "PostgreSQL", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#0e1a30] text-gray-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Multi-Tab Narrative Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl border border-cyan-500/25 bg-[#0b1323]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl flex flex-col min-h-[500px]"
          >
            {/* Top Interactive Tabs Pill Switcher */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => {
                const isSelected = tab.id === activeTabId;
                const Icon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95",
                      isSelected
                        ? "bg-[#22d3ee] text-black shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                        : "bg-[#0e1a30] text-gray-400 hover:text-white hover:bg-[#132342] border border-white/5"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Animated Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Eyebrow Tag */}
                  <div
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border mb-3",
                      currentTab.tagClass
                    )}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{currentTab.tag}</span>
                  </div>

                  {/* Tab Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 leading-snug">
                    {currentTab.title}
                  </h3>

                  {/* Narrative Body */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {currentTab.description}
                  </p>
                </div>

                {/* Key Highlights Checklist Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#080e1a] border border-cyan-500/20 mt-4 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>KEY HIGHLIGHTS</span>
                  </div>
                  {currentTab.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
