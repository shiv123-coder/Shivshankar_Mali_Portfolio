"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, UserCheck, CheckCircle2, FileDown, ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface RecruiterSnapshotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const metrics = [
  {
    value: "9.53 CGPA",
    label: "BSIOTR 2ND TOPPER",
    color: "text-cyan-400",
  },
  {
    value: "Rank 2143",
    label: "TCS CODEVITA",
    color: "text-purple-400",
  },
  {
    value: "300+ Solved",
    label: "LEETCODE & DSA",
    color: "text-emerald-400",
  },
  {
    value: "92.90 %ile",
    label: "MHT-CET TOPPER",
    color: "text-amber-400",
  },
];

const expertise = [
  "Java 21",
  "React.js",
  "Next.js",
  "FastAPI",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "PyTorch",
  "ONNX",
  "Docker",
  "REST APIs",
  "Data Structures",
];

const highlights = [
  "College 2nd Topper: 9.53 CGPA in B.E. Computer Engineering at JSPM's BSIOTR, Pune (2023–2027).",
  "HSC 2nd College Topper at Jogeshwari Mata Secondary and Higher Secondary College with 92.90 Percentile in MHT-CET.",
  "Competitive Programmer: TCS CodeVita Global Rank 2143 & 300+ problems solved across LeetCode & CodeChef.",
  "Engineered ANTARIKSH-OS: Edge-native AI platform for earth observation and disaster response on local hardware.",
  "Built LoanIQ: AI loan origination system with PAN OCR, biometric liveness detection, and explainable credit risk scoring.",
];

export default function RecruiterSnapshotModal({ isOpen, onClose }: RecruiterSnapshotModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0b1323] p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.15)] my-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Recruiter 30-Sec Snapshot
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-400/90 font-mono">
                    Shivshankar Mali • Candidate Brief
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3.5 rounded-2xl bg-[#0e1a30] border border-cyan-500/20 text-center flex flex-col justify-center"
                >
                  <span className={`text-lg sm:text-xl font-bold ${m.color} tracking-tight`}>
                    {m.value}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Core Expertise Chips */}
            <div className="mb-6">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2.5">
                Core Expertise:
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#0f213d] text-cyan-300 border border-cyan-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="p-4 rounded-2xl bg-[#09101d] border border-white/5 space-y-2.5 mb-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="/Shivshankar_Mali_CSE_Resume_2027.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-[#06b6d4] hover:bg-[#22d3ee] text-black font-bold px-6 py-3 rounded-full text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Official Resume</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shivshankar-mali-b46198314/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0e1a30] hover:bg-[#132342] text-white border border-white/10 px-5 py-3 rounded-full text-sm font-medium transition-all"
              >
                <FaLinkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/shiv123-coder"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0e1a30] hover:bg-[#132342] text-white border border-white/10 px-5 py-3 rounded-full text-sm font-medium transition-all"
              >
                <FaGithub className="w-4 h-4 text-gray-300" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
