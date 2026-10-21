"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, UserCheck, Download, GraduationCap, BarChart3, Rocket, Trophy } from "lucide-react";
import Link from "next/link";
import RecruiterSnapshotModal from "@/components/shared/RecruiterSnapshotModal";

export default function Hero() {
  const roles = [
    "Competitive Programmer (300+ Solved)",
    "AI-Driven Software Engineer",
    "Full-Stack MERN Dev",
    "ANTARIKSH-OS Architect",
    "Java & Cloud Engineer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Typewriter Effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[currentRoleIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
    }, isDeleting ? 35 : 85);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#070b12] text-foreground">
        {/* Subtle Cyber Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1f_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
            >
              {/* Top Badges: Open for Roles, CodeVita Rank 2143, and BSIOTR 2nd Topper */}
              <div className="mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/40 bg-[#091524]/80 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                  </span>
                  <span>Open for Internships &amp; Full-Time Roles</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-500/40 bg-[#160f29]/80 text-purple-300 text-xs font-mono font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <Trophy className="w-3.5 h-3.5 text-purple-400" />
                  <span>TCS CodeVita Rank 2143</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-[#0a192f]/80 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>9.53 CGPA • BSIOTR 2nd Topper</span>
                </div>
              </div>

              {/* Main Heading: Hi, I'm Shivshankar Mali */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-bold tracking-tight mb-4 leading-tight">
                <span className="text-white">Hi, I&apos;m </span>
                <span className="text-[#22d3ee]">Shivshankar </span>
                <span className="text-[#c084fc]">Mali</span>
              </h1>

              {/* Dynamic Typewriter Text */}
              <div className="h-10 sm:h-12 mb-6 text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight flex items-center justify-center lg:justify-start">
                <span>{currentText}</span>
                <span className="animate-pulse text-cyan-400 font-light ml-0.5">|</span>
              </div>

              {/* Bio Description matching reference */}
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
                Computer Engineering student specializing in building real-world MERN stack applications, AI-driven microservices, and cloud architectures. Focused on clean system design and high-performance applications.
              </p>

              {/* Action Buttons (3-Button Layout matching reference) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
                {/* 1. Get In Touch */}
                <Link
                  href="#contact"
                  className="flex items-center gap-2 bg-[#22d3ee] hover:bg-[#38bdf8] text-black font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-[0_0_25px_rgba(34,211,238,0.35)] active:scale-95"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* 2. Recruiter Snapshot */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 bg-[#0c1626]/90 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 font-semibold px-6 py-3.5 rounded-full text-sm transition-all shadow-sm active:scale-95"
                >
                  <UserCheck className="w-4 h-4 text-cyan-400" />
                  <span>Recruiter Snapshot</span>
                </button>

                {/* 3. Resume */}
                <a
                  href="/Shivshankar_Mali_CSE_Resume_2027.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#121927] border border-white/10 hover:border-white/20 text-white hover:bg-[#1a2336] font-semibold px-6 py-3.5 rounded-full text-sm transition-all active:scale-95"
                >
                  <span>Resume</span>
                  <Download className="w-4 h-4 text-gray-300" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Circular Photo with Glowing Ring & Orbiting Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 mb-6 lg:mb-0"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                
                {/* Glowing Gradient Border (Cyan to Purple) */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-sm opacity-80 animate-pulse-subtle" />
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-[4px] border-[#070b12] bg-[#0c172a] shadow-2xl">
                  <img
                    src="https://github.com/shiv123-coder.png"
                    alt="Shivshankar Mali"
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Floating Orbit Badge 1: Top-Left (Academics) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -top-3 -left-3 sm:top-2 sm:-left-8 bg-[#0c172a]/95 backdrop-blur-md border border-cyan-500/30 rounded-2xl px-3.5 py-2 shadow-xl flex items-center gap-2.5 z-20 hover:scale-105 transition-transform"
                >
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                      ACADEMICS (2ND TOPPER)
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-cyan-400">
                      9.53 CGPA
                    </div>
                  </div>
                </motion.div>

                {/* Floating Orbit Badge 2: Left (LeetCode & DSA) */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-1/2 -left-6 sm:top-[58%] sm:-left-12 -translate-y-1/2 bg-[#0c172a]/95 backdrop-blur-md border border-emerald-500/30 rounded-2xl px-3.5 py-2 shadow-xl flex items-center gap-2.5 z-20 hover:scale-105 transition-transform"
                >
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                      DSA &amp; LEETCODE
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-400">
                      300+ Solved
                    </div>
                  </div>
                </motion.div>

                {/* Floating Orbit Badge 3: Bottom-Right (TCS CodeVita) */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-2 -right-2 sm:bottom-4 sm:-right-6 bg-[#0c172a]/95 backdrop-blur-md border border-purple-500/30 rounded-2xl px-3.5 py-2 shadow-xl flex items-center gap-2.5 z-20 hover:scale-105 transition-transform"
                >
                  <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                      GLOBAL RANK
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-purple-400">
                      CODEVITA 2143
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Recruiter 30-Sec Snapshot Modal */}
      <RecruiterSnapshotModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
