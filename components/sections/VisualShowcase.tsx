"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  Calendar, 
  MapPin, 
  Award,
  ExternalLink
} from "lucide-react";

export interface MilestoneItem {
  id: string;
  milestoneNum: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  date: string;
  location: string;
}

export const milestoneItems: MilestoneItem[] = [
  {
    id: "cash-prize",
    milestoneNum: "MILESTONE 01",
    title: "BSIOTR 2nd Topper & ₹15,000 Cash Prize",
    subtitle: "Institutional Academic Merit Award",
    description: "Awarded ₹15,000 cash prize and prestigious 2nd College Topper trophy on stage at JSPM's BSIOTR Annual Gathering for stellar academic excellence across Computer Engineering.",
    image: "/milestones/bsiotr-2nd-topper-cash-prize.jpg",
    category: "ACADEMIC EXCELLENCE",
    date: "Annual Gathering",
    location: "JSPM's BSIOTR, Pune",
  },
  {
    id: "stage-ceremony",
    milestoneNum: "MILESTONE 02",
    title: "Stage Felicitation — College 2nd Topper",
    subtitle: "Honored by Dignitaries & Academic Leadership",
    description: "Felicitation ceremony on stage by institute directors and department heads, recognizing consistent 9.53 CGPA and exemplary performance in technical academics.",
    image: "/milestones/academic-topper-stage-ceremony.jpg",
    category: "FELICITATION CEREMONY",
    date: "Academic Year Honors",
    location: "Main Auditorium, Pune",
  },
  {
    id: "tenzorx-hackathon",
    milestoneNum: "MILESTONE 03",
    title: "TenZorX AI Hackathon — Team CodeStorm",
    subtitle: "National AI Underwriting Showcase",
    description: "Team CodeStorm presenting LoanIQ — an AI-powered automated loan origination pipeline with PAN card OCR, biometric face-liveness validation, and explainable risk intelligence.",
    image: "/milestones/tenzorx-hackathon-team.jpg",
    category: "AI HACKATHON",
    date: "2026",
    location: "National Hackathon Stage",
  },
  {
    id: "fe-trophy",
    milestoneNum: "MILESTONE 04",
    title: "2nd Topper Gold Trophy — BSIOTR",
    subtitle: "Inaugural Academic Distinction",
    description: "Close-up of the official BSIOTR Academic 2nd Topper Trophy awarded for securing top-tier institute standing in engineering fundamentals.",
    image: "/milestones/fe-2nd-topper-trophy.jpg",
    category: "TROPHY & MEDAL",
    date: "B.E. Computer Engineering",
    location: "JSPM's BSIOTR, Pune",
  },
  {
    id: "hsc-topper-merit",
    milestoneNum: "MILESTONE 05",
    title: "HSC Class XII 2nd College Topper",
    subtitle: "Jogeshwari Mata Jr. College Merit",
    description: "Awarded 2nd College Topper in Higher Secondary Science Board Examination alongside achieving a 92.90 percentile in MHT-CET competitive entrance.",
    image: "/milestones/hsc-2nd-topper-merit.jpg",
    category: "STATE BOARD MERIT",
    date: "Class XII Science",
    location: "Maharashtra, India",
  },
  {
    id: "hsc-prize",
    milestoneNum: "MILESTONE 06",
    title: "Class XII Academic Merit Prize",
    subtitle: "Pre-Engineering Academic Recognition",
    description: "Felicitation prize awarded for outstanding performance in Advanced Mathematics, Physics, and Chemistry, laying the analytical foundation for engineering.",
    image: "/milestones/hsc-topper-prize.jpg",
    category: "ACADEMIC AWARD",
    date: "Class XII Felicitation",
    location: "Jogeshwari Mata Jr. College",
  },
  {
    id: "fe-10-cgpa",
    milestoneNum: "MILESTONE 07",
    title: "Perfect 10 SGPA First Year Engineering",
    subtitle: "Savitribai Phule Pune University (SPPU)",
    description: "Official SPPU university marksheet displaying a rare Perfect 10 SGPA record across computational mathematics, programming in C, and basic electronics.",
    image: "/milestones/fe-10-cgpa-marksheet.jpg",
    category: "UNIVERSITY DISTINCTION",
    date: "First Year Engineering",
    location: "SPPU University Record",
  },
  {
    id: "rajya-sabha",
    milestoneNum: "MILESTONE 08",
    title: "Maharashtra Rajya Sabha Puraskar",
    subtitle: "State-Level Prestigious Recognition",
    description: "Awarded the esteemed Maharashtra Rajya Sabha Puraskar for outstanding academic and extracurricular merit at the state level.",
    image: "/milestones/maharashtra-rajya-sabha-award.jpg",
    category: "STATE PURASKAR",
    date: "State Honor",
    location: "Maharashtra, India",
  },
];

export default function VisualShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<MilestoneItem | null>(null);
  const total = milestoneItems.length;

  // Continuous circular auto-rotation
  useEffect(() => {
    if (isPaused || selectedMilestone) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, selectedMilestone, total]);

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMilestone(null);
      if (!selectedMilestone) {
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "ArrowRight") nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMilestone]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Helper to get card style for circular 3D carousel effect
  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + total) % total;
    // diff = 0 is center
    // diff = 1 is immediate right
    // diff = total - 1 (or -1) is immediate left
    if (diff === 0) {
      return {
        zIndex: 30,
        scale: 1.05,
        x: "0%",
        opacity: 1,
        filter: "blur(0px)",
        pointerEvents: "auto" as const,
      };
    } else if (diff === 1 || diff === - (total - 1)) {
      return {
        zIndex: 20,
        scale: 0.88,
        x: "85%",
        opacity: 0.5,
        filter: "blur(2px)",
        pointerEvents: "auto" as const,
      };
    } else if (diff === total - 1 || diff === -1) {
      return {
        zIndex: 20,
        scale: 0.88,
        x: "-85%",
        opacity: 0.5,
        filter: "blur(2px)",
        pointerEvents: "auto" as const,
      };
    } else {
      return {
        zIndex: 10,
        scale: 0.75,
        x: diff < total / 2 ? "140%" : "-140%",
        opacity: 0,
        filter: "blur(5px)",
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <section id="showcase" className="relative py-24 md:py-32 bg-[#040711] text-foreground border-t border-border/60 overflow-hidden">
      <div id="achievements" className="absolute -top-24 pointer-events-none" />
      {/* Background Cyber Ambient Atmosphere */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b14_1px,transparent_1px),linear-gradient(to_bottom,#1e293b14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[550px] h-[550px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header Matching Screenshot 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VISUAL SHOWCASE</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Achievements &amp; Milestone Highlights
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-mono">
            (Click any certificate or photo to expand in high-definition)
          </p>
        </motion.div>

        {/* 3D Continuous Circular Moving Carousel Container */}
        <div 
          className="relative h-[530px] sm:h-[560px] flex items-center justify-center max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous Milestone"
            className="absolute left-2 sm:-left-12 z-40 p-3 sm:p-3.5 rounded-full bg-[#0b1323]/90 hover:bg-cyan-500 hover:text-black border border-white/10 hover:border-cyan-400 text-white shadow-2xl transition-all duration-200 active:scale-90 cursor-pointer backdrop-blur-md"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Milestone"
            className="absolute right-2 sm:-right-12 z-40 p-3 sm:p-3.5 rounded-full bg-[#0b1323]/90 hover:bg-cyan-500 hover:text-black border border-white/10 hover:border-cyan-400 text-white shadow-2xl transition-all duration-200 active:scale-90 cursor-pointer backdrop-blur-md"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Track */}
          <div className="relative w-full h-full flex items-center justify-center">
            {milestoneItems.map((item, index) => {
              const style = getCardStyle(index);
              const isCenter = index === activeIndex;

              return (
                <motion.div
                  key={item.id}
                  animate={{
                    x: style.x,
                    scale: style.scale,
                    opacity: style.opacity,
                    filter: style.filter,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    zIndex: style.zIndex,
                    position: "absolute",
                    pointerEvents: style.pointerEvents,
                  }}
                  className={`w-[320px] sm:w-[420px] md:w-[480px] rounded-3xl border ${
                    isCenter 
                      ? "border-cyan-400/60 bg-[#090f1d]/95 shadow-[0_0_40px_rgba(6,182,212,0.25)]" 
                      : "border-white/10 bg-[#090f1d]/80 shadow-xl"
                  } backdrop-blur-xl overflow-hidden cursor-pointer transition-colors duration-300`}
                  onClick={() => {
                    if (isCenter) {
                      setSelectedMilestone(item);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                >
                  {/* Card Header Bar Matching Screenshot 1 */}
                  <div className="px-5 py-3.5 bg-black/40 border-b border-white/10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {item.milestoneNum}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-gray-400 group-hover:text-cyan-300 transition-colors">
                      <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Click to View</span>
                    </span>
                  </div>

                  {/* Image Container with 4:3 Aspect Ratio */}
                  <div className="relative w-full h-[260px] sm:h-[300px] overflow-hidden bg-black/60 group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-transparent to-transparent opacity-80" />
                    
                    {/* Hover Click-to-Zoom Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px] transition-opacity duration-200">
                      <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-black font-bold text-xs shadow-2xl">
                        <ZoomIn className="w-4 h-4" />
                        <span>Expand Full Image</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Footer Details */}
                  <div className="p-5 sm:p-6 bg-[#090f1d]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                        {item.category}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mt-1 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Circular Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {milestoneItems.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              aria-label={`Go to milestone ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                dotIdx === activeIndex
                  ? "w-8 h-2 bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>

      {/* FULL-IMAGE HIGH-DEFINITION EXPAND MODAL WITH BLURRY BACKDROP */}
      <AnimatePresence>
        {selectedMilestone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-2xl"
            onClick={() => setSelectedMilestone(null)}
          >
            {/* Modal Dialog Card */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col rounded-3xl border border-cyan-500/40 bg-[#070c17]/95 shadow-[0_0_80px_rgba(6,182,212,0.3)] overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {selectedMilestone.milestoneNum}
                  </span>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {selectedMilestone.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">
                      {selectedMilestone.subtitle}
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedMilestone(null)}
                  className="p-2.5 rounded-2xl bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 border border-white/10 transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-Definition Image Display */}
              <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/60 min-h-[300px]">
                <img
                  src={selectedMilestone.image}
                  alt={selectedMilestone.title}
                  className="max-h-[62vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
                />
              </div>

              {/* Modal Description Footer */}
              <div className="p-5 sm:p-6 border-t border-white/10 bg-black/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {selectedMilestone.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {selectedMilestone.location}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {selectedMilestone.description}
                  </p>
                </div>

                <a
                  href={selectedMilestone.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs shadow-lg transition-all active:scale-95 shrink-0"
                >
                  <span>Open Full Resolution</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
