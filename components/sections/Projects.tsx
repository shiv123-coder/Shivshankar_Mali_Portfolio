"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  FolderGit2, 
  Sparkles, 
  Terminal, 
  Radio, 
  Cpu, 
  Activity, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Maximize2,
  Lock,
  GitBranch,
  ShieldCheck
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import TiltCard from "@/components/shared/TiltCard";

// Static imports for automatic blur placeholders
import muktiImg from "@/public/mukti-portal-preview.png";
import loaniqImg from "@/public/loaniq-preview.png";
import visionKiranaImg from "@/public/vision-kirana-preview.png";
import skybankingImg from "@/public/skybanking-preview.png";
import drivezoneImg from "@/public/drivezone-preview.png";
import midwaycafeImg from "@/public/midwaycafe-preview.png";
import coralReefImg from "@/public/coral-ai-login-page.png";

export type ProjectCategory = "all" | "ai" | "fullstack" | "enterprise";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: "live" | "prototype" | "ongoing";
  statusBadge: string;
  statusColor: string;
  tech: string[];
  highlights: string[];
  demo?: string;
  repo: string;
  caseStudy?: string;
  image?: StaticImageData;
  isOngoing?: boolean;
}

export const projectsList: ProjectItem[] = [
  {
    id: "antariksh-os",
    title: "ANTARIKSH-OS",
    subtitle: "Edge-Native Earth Observation & InSAR Radar Platform",
    description: "An edge-native AI architecture for satellite earth observation and disaster response. Implements radar-guided cloud removal, InSAR coherence flood mapping, and crop-stress vegetation indices optimized for low-latency offline inference on constrained hardware.",
    category: "ai",
    categoryLabel: "AI & Edge Systems",
    status: "ongoing",
    statusBadge: "ACTIVE DEVELOPMENT",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    tech: ["FastAPI", "PyTorch", "ONNX Runtime", "FFT Analysis", "Next.js 15", "Docker"],
    highlights: [
      "Radar-guided cloud penetration and SAR despeckling pipeline for all-weather vision.",
      "Local offline inference engine designed for edge deployment during disaster blackouts.",
      "InSAR coherence flood displacement and spectral crop-stress analytics."
    ],
    demo: "",
    repo: "https://github.com/shiv123-coder/ANTARIKSH-OS",
    isOngoing: true,
  },
  {
    id: "loaniq",
    title: "LoanIQ",
    subtitle: "Autonomous AI-Powered Loan Origination Pipeline",
    description: "An enterprise-grade loan origination system that automates end-to-end credit underwriting. Features optical character recognition for instant identity document parsing, biometric face-liveness anti-spoofing verification, and explainable risk intelligence.",
    category: "ai",
    categoryLabel: "AI & Full-Stack",
    status: "live",
    statusBadge: "HACKATHON FINALIST",
    statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    tech: ["React 19", "FastAPI", "Node.js", "OpenCV", "Firebase", "NLP", "Tailwind CSS"],
    highlights: [
      "Underwriting pipeline reducing document evaluation cycle from 48 hours to <45 seconds.",
      "Biometric facial liveness validation preventing impersonation and deepfake identity fraud.",
      "NLP-driven financial transaction parsing with granular explainable risk indicators."
    ],
    demo: "https://loan-iq-ai.vercel.app",
    repo: "https://github.com/shiv123-coder/LoanIQ-AI",
    caseStudy: "/blog/engineering-loaniq",
    image: loaniqImg,
  },
  {
    id: "mukti-portal",
    title: "Mukti Portal",
    subtitle: "Decentralized Trust Ecosystem for Informal Workers",
    description: "A digital trust ecosystem designed to empower informal sector workers. Generates verifiable trust signals based on authentic work histories and peer validations, helping unbanked individuals build a credible professional identity to access formal financial services.",
    category: "fullstack",
    categoryLabel: "Full-Stack System",
    status: "prototype",
    statusBadge: "VYOMA 2026 MERIT",
    statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    tech: ["React", "Firebase", "Node.js", "Python", "Tailwind CSS", "RESTful APIs"],
    highlights: [
      "Awarded 1st Runner Up (₹2,500 Cash Prize) at VYOMA 2026 National Prototype Contest.",
      "Decentralized peer-to-peer validation mechanism producing tamper-proof trust ratings.",
      "Micro-financial inclusion portal connecting unbanked labor to low-interest community lenders."
    ],
    demo: "https://mukti-portal.vercel.app/",
    repo: "https://github.com/shiv123-coder/Mukti-Portal",
    image: muktiImg,
  },
  {
    id: "visionkirana",
    title: "VisionKirana",
    subtitle: "Computer Vision Intelligence for Retail Micro-Lending",
    description: "A retail micro-lending intelligence platform built to assess creditworthiness for unbanked local grocery stores. Uses computer vision to analyze shelf stock turnover and customer foot-traffic patterns, producing dynamic risk profiles without traditional bank filings.",
    category: "ai",
    categoryLabel: "Computer Vision AI",
    status: "live",
    statusBadge: "PRODUCTION DEPLOYED",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    tech: ["React 19", "FastAPI", "PostgreSQL", "OpenCV", "PyTorch", "Docker"],
    highlights: [
      "Real-time object detection quantifying stock density and shelf replenishment rates.",
      "Dynamic credit eligibility metric generated purely from visual inventory turnover data.",
      "High-throughput asynchronous FastAPI backend integrated with PostgreSQL data storage."
    ],
    demo: "https://visionkirana.vercel.app/",
    repo: "https://github.com/shiv123-coder/visionkirana",
    image: visionKiranaImg,
  },
  {
    id: "skybanking",
    title: "SkyBanking",
    subtitle: "High-Security Enterprise Core Banking System",
    description: "An enterprise banking system engineered for mission-critical financial operations. Implements ACID-compliant database transactions to prevent double-spending, secure peer-to-peer money transfers, and multi-factor OTP validation with comprehensive audit trails.",
    category: "enterprise",
    categoryLabel: "Enterprise Java",
    status: "live",
    statusBadge: "ENTERPRISE JAVA 21",
    statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    tech: ["Java 21", "Jakarta Servlets", "PostgreSQL", "Stripe API", "Docker", "Apache Tomcat"],
    highlights: [
      "Strict relational database transaction locks guaranteeing absolute balance consistency.",
      "Multi-factor OTP verification pipeline and encrypted user session management.",
      "Stripe payment integration with automated webhooks and real-time ledger generation."
    ],
    demo: "https://skybanking.onrender.com",
    repo: "https://github.com/shiv123-coder/skybanking",
    image: skybankingImg,
  },
  {
    id: "coral-reef",
    title: "Coral Reef Admin Portal",
    subtitle: "Geospatial Marine Ecosystem Health Monitoring",
    description: "An enterprise administration portal for coral reef ecosystem health mapping. Designed for marine scientists to visualize environmental telemetry, track bleaching severity across geospatial coordinates, and collaborate on biological conservation interventions.",
    category: "ai",
    categoryLabel: "AI & Environmental",
    status: "live",
    statusBadge: "PRODUCTION CLOUD",
    statusColor: "text-teal-400 bg-teal-500/10 border-teal-500/30",
    tech: ["React", "Next.js", "Node.js", "Tailwind CSS", "REST APIs", "Vercel"],
    highlights: [
      "Geospatial map layer tracking coral bleaching progression and sea temperature trends.",
      "Role-based scientist data submission workflows with automated image verification.",
      "Responsive analytics dashboard rendering time-series water acidity and biodiversity charts."
    ],
    demo: "https://coral-reef-frontend.vercel.app/login",
    repo: "https://github.com/shiv123-coder/coral-reef-health-mapping",
    image: coralReefImg,
  },
  {
    id: "drivezone",
    title: "DriveZone",
    subtitle: "Automotive Dealership ERP & Inventory Engine",
    description: "A full-scale dealership management platform built for automotive showrooms. Streamlines commercial operations with role-based staff authentication, real-time vehicle inventory tracking, automated customer lead capture, and test-drive scheduling.",
    category: "enterprise",
    categoryLabel: "Enterprise Java",
    status: "live",
    statusBadge: "ENTERPRISE JAVA",
    statusColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
    tech: ["Java", "JSP", "Servlets", "Apache Tomcat", "MySQL", "Bootstrap 5"],
    highlights: [
      "Role-based access control segregating sales reps, mechanics, and dealership executive portals.",
      "Real-time vehicle inventory state machine handling bookings, sales, and service cycles.",
      "Parameterized SQL backend protecting sensitive client transactions and lease agreements."
    ],
    demo: "https://drivezone-project.onrender.com/",
    repo: "https://github.com/shiv123-coder/DriveZone",
    image: drivezoneImg,
  },
  {
    id: "midwaycafe",
    title: "MidwayCafe",
    subtitle: "Full-Stack Restaurant E-Commerce & Kitchen Engine",
    description: "A robust restaurant e-commerce and order processing system engineered with clean MVC architecture using Laravel. Features dynamic Blade templating, automated cart recalculations, and end-to-end digital receipt workflows for optimized dining hospitality.",
    category: "fullstack",
    categoryLabel: "Full-Stack System",
    status: "live",
    statusBadge: "PRODUCTION CLOUD",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    tech: ["PHP 8.2", "Laravel 11", "PostgreSQL", "Tailwind CSS", "Render Cloud"],
    highlights: [
      "Dynamic Model-View-Controller design with server-side rendered Blade components.",
      "Session-based cart state management with real-time tax and gratuity calculations.",
      "Relational order logging and automated invoice generation with PostgreSQL persistence."
    ],
    demo: "https://midwaycafe-restaurant-e-commerce-system.onrender.com/",
    repo: "https://github.com/shiv123-coder/Restaurant_Ecommerce_System_Laravel",
    image: midwaycafeImg,
  },
];

const categoryTabs: { id: ProjectCategory; label: string; count: number }[] = [
  { id: "all", label: "All Architectures", count: projectsList.length },
  { id: "ai", label: "AI & Edge Systems", count: projectsList.filter(p => p.category === "ai").length },
  { id: "fullstack", label: "Full-Stack Platforms", count: projectsList.filter(p => p.category === "fullstack").length },
  { id: "enterprise", label: "Enterprise Java", count: projectsList.filter(p => p.category === "enterprise").length },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#050813] text-foreground border-t border-border/60 overflow-hidden">
      {/* Background Cyber Glow Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ENGINEERING SHOWCASE &amp; SYSTEMS ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400">Architecture</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-primary to-purple-500 rounded-full mb-6" />
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              A curated catalog of enterprise-grade systems, AI inference platforms, and distributed software engineered from the ground up for high reliability.
            </p>
          </div>

          <Link 
            href="https://github.com/shiv123-coder" 
            target="_blank"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#0b1324] hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-950/40 transition-all duration-300 group shrink-0"
          >
            <FaGithub className="w-4 h-4" />
            <span>EXPLORE GITHUB ARCHIVE</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Domain Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start mb-12 overflow-x-auto pb-2 scrollbar-none"
        >
          <div className="flex p-1.5 bg-[#0b1323] rounded-2xl border border-white/10 shadow-2xl gap-1 shrink-0">
            {categoryTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer",
                    isActive
                      ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] font-bold scale-[1.02]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span>{tab.label}</span>
                  <span className={cn(
                    "text-[10px] font-mono px-1.5 py-0.2 rounded-full",
                    isActive ? "bg-black/20 text-black font-bold" : "bg-white/10 text-gray-400"
                  )}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Responsive Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <TiltCard className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#090f1d]/90 hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] transition-all duration-500 h-full">
                  
                  {/* Top Media / Preview Container */}
                  <div className="relative h-[270px] w-full overflow-hidden border-b border-white/10 bg-[#060b17]">
                    
                    {/* ANTARIKSH-OS: High-Tech Telemetry HUD (No Image as project is ongoing) */}
                    {project.isOngoing ? (
                      <div className="relative h-full w-full bg-gradient-to-br from-[#030712] via-[#051126] to-[#020617] flex flex-col justify-between p-6 overflow-hidden">
                        
                        {/* Sci-Fi Radar Grid Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:18px_18px] opacity-20 pointer-events-none" />
                        
                        {/* Concentric Radar Rings & Sweep */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
                          <div className="w-[380px] h-[380px] rounded-full border border-cyan-500/30 animate-pulse" />
                          <div className="absolute w-[260px] h-[260px] rounded-full border border-cyan-500/40" />
                          <div className="absolute w-[140px] h-[140px] rounded-full border border-cyan-500/50" />
                          {/* Radar Sweep Line */}
                          <div className="absolute w-[200px] h-[200px] rounded-full bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(6,182,212,0.5)_360deg)] animate-spin [animation-duration:6s]" />
                        </div>

                        {/* Top HUD Telemetry Bar */}
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/60 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                            <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                            <span>ORBITAL TELEMETRY // SAR PIPELINE</span>
                          </div>

                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-[10px] font-mono font-bold text-amber-300">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                            <span>IN DEVELOPMENT</span>
                          </div>
                        </div>

                        {/* Center HUD Notice */}
                        <div className="relative z-10 my-auto text-center space-y-2">
                          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-1">
                            <Cpu className="w-6 h-6 animate-pulse" />
                          </div>
                          <div className="font-mono text-xs font-bold text-cyan-300 tracking-wider uppercase">
                            [ ARCHITECTURE PIPELINE INCOMING ]
                          </div>
                          <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                            Edge Radar-Guided SAR Despeckling &amp; Real-Time Satellite Telemetry Ingestion Engine
                          </p>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/10 text-[10px] font-mono text-gray-400">
                            <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                            <span>Status: Ongoing Research &amp; Prototyping</span>
                          </div>
                        </div>

                        {/* Bottom Readout Bar */}
                        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-gray-400 border-t border-cyan-500/20 pt-2.5 bg-black/30 px-2 rounded-lg">
                          <span>MODELS: ONNX / FFT / PyTorch</span>
                          <span className="text-amber-400">PUBLIC PREVIEW INCOMING</span>
                        </div>
                      </div>
                    ) : (
                      /* Standard Project Image with Zoom on Hover */
                      <>
                        <Image 
                          src={project.image!} 
                          alt={project.title} 
                          fill
                          placeholder="blur"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-transparent to-black/30" />

                        {/* Top Overlay Badges */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                          <span className="text-[11px] font-mono font-bold text-cyan-300 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-cyan-500/30 shadow-lg">
                            {project.categoryLabel}
                          </span>

                          <span className={cn(
                            "text-[10px] font-mono font-bold px-2.5 py-1 rounded-full backdrop-blur-md border shadow-lg uppercase tracking-wider",
                            project.statusColor
                          )}>
                            {project.statusBadge}
                          </span>
                        </div>

                        {/* Quick View Button on Image Hover */}
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 p-2.5 rounded-xl bg-black/80 hover:bg-cyan-500 text-white hover:text-black border border-white/20 hover:border-cyan-400 shadow-xl backdrop-blur-md cursor-pointer z-10"
                          title="View Architecture Details"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Card Body Details */}
                  <div className="flex flex-col flex-grow p-6 sm:p-8">
                    
                    {/* Header Title & Subtitle */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between gap-3 mb-1.5">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-cyan-300/80 leading-snug">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Detailed Paragraph */}
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technical Architectural Highlights */}
                    <div className="space-y-2 mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] font-mono font-bold tracking-wider uppercase text-gray-400 flex items-center gap-1.5 mb-2">
                        <Layers className="w-3.5 h-3.5 text-cyan-400" />
                        <span>ARCHITECTURAL CAPABILITIES</span>
                      </div>
                      {project.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-300 leading-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mt-auto mb-6 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span 
                          key={t} 
                          className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      
                      {/* Left Side: Live Demo or In-Development Status */}
                      <div className="flex items-center gap-2">
                        {project.isOngoing ? (
                          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                            <span>ACTIVE CORE DEVELOPMENT</span>
                          </div>
                        ) : project.demo ? (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all duration-200 group/btn"
                          >
                            <span>Live Application</span>
                            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : (
                          <span className="text-xs font-mono text-gray-500">Internal Engine</span>
                        )}

                        {/* Optional Case Study Deep Dive Link */}
                        {project.caseStudy && (
                          <Link
                            href={project.caseStudy}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                          >
                            <span>Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                          </Link>
                        )}
                      </div>

                      {/* Right Side: GitHub Repository */}
                      {project.repo && (
                        <a 
                          href={project.repo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-gray-400 hover:text-white px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                          <span>Code Repository</span>
                        </a>
                      )}

                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* High-Definition Architecture Inspection Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#090f1e] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(6,182,212,0.25)] text-left overflow-hidden my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image / Preview */}
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10 mb-6 bg-black">
                {selectedProject.isOngoing ? (
                  <div className="h-full w-full bg-gradient-to-br from-[#020617] via-[#051126] to-[#020617] flex flex-col justify-center items-center p-6 text-center">
                    <Radio className="w-12 h-12 text-cyan-400 mb-3 animate-pulse" />
                    <h4 className="text-xl font-mono font-bold text-white mb-2">ANTARIKSH-OS</h4>
                    <p className="text-xs text-gray-300 max-w-md font-mono">
                      Edge-Native Satellite Earth Observation Platform under Active Development
                    </p>
                  </div>
                ) : (
                  <Image
                    src={selectedProject.image!}
                    alt={selectedProject.title}
                    fill
                    className="object-cover object-top"
                  />
                )}
              </div>

              {/* Title & Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <span className={cn(
                  "text-xs font-mono font-bold px-3 py-1 rounded-full border",
                  selectedProject.statusColor
                )}>
                  {selectedProject.statusBadge}
                </span>
              </div>
              <p className="text-sm font-mono text-cyan-300 mb-4">{selectedProject.subtitle}</p>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Architectural Highlights */}
              <div className="space-y-2 mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono font-bold uppercase text-cyan-400 mb-2">
                  System Architecture Highlights
                </div>
                {selectedProject.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 text-gray-300 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-400 text-black hover:bg-cyan-300 transition-colors"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.repo && (
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
