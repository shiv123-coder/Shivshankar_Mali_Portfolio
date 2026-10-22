"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ZoomIn, 
  X, 
  ShieldCheck, 
  ExternalLink, 
  Calendar, 
  Building2, 
  FileCheck,
  Layers,
  Award
} from "lucide-react";

export type CertCategory = "all" | "internships" | "competitions" | "ai_cloud" | "coding";

export interface CertificateItem {
  id: string;
  label: string;
  title: string;
  issuer: string;
  category: CertCategory;
  date: string;
  image: string;
  pdfUrl?: string;
  verificationBadge: string;
  description: string;
}

export const certificatesList: CertificateItem[] = [
  {
    id: "tcs-codevita",
    label: "TCS CODEVITA (RANK 2143)",
    title: "TCS CodeVita Season 13 Certificate of Merit",
    issuer: "Tata Consultancy Services",
    category: "competitions",
    date: "Season 13",
    image: "/certificates/tcs-codevita-rank-2143.png",
    pdfUrl: "https://drive.google.com/file/d/1rH2a06f-mDsVEqGgX6KnBwNgQuLwVV1B/view?usp=sharing",
    verificationBadge: "GLOBAL COMPETITION",
    description: "Official Certificate of Merit awarded for securing Global Rank 2143 in Season 13 of TCS CodeVita, competing against over 100,000+ collegiate algorithmic programmers worldwide."
  },
  {
    id: "talent-battle",
    label: "TALENT BATTLE (JAVA & DSA)",
    title: "Java & Data Structures Internship Program",
    issuer: "Talent Battle Pvt. Ltd.",
    category: "internships",
    date: "July 2025",
    image: "/certificates/talent-battle-java-dsa.png",
    pdfUrl: "https://drive.google.com/file/d/1qzONcMVjVLykMn06f6GnNJDo4S2D311v/view?usp=sharing",
    verificationBadge: "INTERNSHIP CREDENTIAL",
    description: "Certificate of Achievement for successfully completing an intensive Offline Internship Program in Java & Data Structures and Algorithms with distinction."
  },
  {
    id: "vyoma-prototype",
    label: "VYOMA NATIONAL PROTOTYPE",
    title: "National Level Prototype Competition 2026",
    issuer: "IEEE Student Chapter & AISSMS IOIT",
    category: "competitions",
    date: "March 2026",
    image: "/certificates/vyoma-national-prototype.png",
    pdfUrl: "https://drive.google.com/file/d/1lhM2ur-aR0Zgo9dAX3g1G5qyL9Rt7902/view?usp=sharing",
    verificationBadge: "NATIONAL PROTOTYPE",
    description: "Awarded Certificate of Participation and Project Excellence for building the Mukti Portal prototype, addressing social and financial inclusion."
  },
  {
    id: "academic-topper",
    label: "ACADEMIC 2ND TOPPER (BSIOTR)",
    title: "College 2nd Topper Certificate of Appreciation",
    issuer: "JSPM's BSIOTR, Wagholi, Pune",
    category: "competitions",
    date: "Annual Honors",
    image: "/certificates/bsiotr-academic-topper-cert.jpg",
    verificationBadge: "INSTITUTE TOPPER",
    description: "Certificate of Appreciation awarded to Shivshankar Mali for securing 2nd College Topper standing with 9.53 CGPA in Computer Engineering at JSPM's BSIOTR."
  },
  {
    id: "google-cloud-ai",
    label: "GOOGLE CLOUD AGENTIC AI",
    title: "Google Cloud Agentic AI Day 2026",
    issuer: "Google Cloud Developer Community",
    category: "ai_cloud",
    date: "2026",
    image: "/certificates/google-cloud-agentic-ai.png",
    verificationBadge: "AGENTIC AI & LLMS",
    description: "Certified participation in Google Cloud's Agentic AI Day, exploring multi-agent architectures, reasoning models, and production generative AI deployments."
  },
  {
    id: "oasis-star-performer",
    label: "OASIS INFOBYTE (STAR PERFORMER)",
    title: "Star Performer Award — Java Development",
    issuer: "Oasis Infobyte",
    category: "internships",
    date: "2024",
    image: "/certificates/oasis-infobyte-star-performer.png",
    pdfUrl: "https://drive.google.com/file/d/1uV9Ec-MV_9EkuHjdvtsWhNtTsC1ZLwuj/view?usp=sharing",
    verificationBadge: "STAR PERFORMER",
    description: "Recognized as Star Performer during the Java Development Internship for delivering clean, robust modular backend code and exemplary problem-solving skills."
  },
  {
    id: "oasis-completion",
    label: "OASIS INFOBYTE (INTERNSHIP)",
    title: "Java Development Internship Completion",
    issuer: "Oasis Infobyte",
    category: "internships",
    date: "2024",
    image: "/certificates/oasis-infobyte-completion.png",
    pdfUrl: "https://drive.google.com/file/d/1uV9Ec-MV_9EkuHjdvtsWhNtTsC1ZLwuj/view?usp=sharing",
    verificationBadge: "INTERNSHIP COMPLETION",
    description: "Certified completion of Java software development internship, building console, GUI, and database connectivity applications."
  },
  {
    id: "ibm-enterprise-ai",
    label: "IBM ENTERPRISE GRADE AI",
    title: "Enterprise Grade AI & Scalable Systems",
    issuer: "IBM Skills Network",
    category: "ai_cloud",
    date: "2025",
    image: "/certificates/ibm-enterprise-ai.jpg",
    verificationBadge: "ENTERPRISE AI",
    description: "Professional certification from IBM covering enterprise machine learning pipelines, production inference architectures, and AI governance."
  },
  {
    id: "leetcode-100-days",
    label: "LEETCODE 100 DAYS BADGE",
    title: "LeetCode 100 Days Problem Solving Challenge",
    issuer: "LeetCode Official",
    category: "coding",
    date: "2025 – 2026",
    image: "/certificates/leetcode-100-days-challenge.png",
    pdfUrl: "https://leetcode.com/u/shivshankar_Mali/",
    verificationBadge: "100-DAY BADGE",
    description: "Official LeetCode credential certifying completion of 100 consecutive days of algorithmic problem solving, contributing to 300+ total solved problems."
  },
  {
    id: "matpo-aptitude",
    label: "MATPO APTITUDE IDOL 2025",
    title: "National Level Aptitude Idol Competition",
    issuer: "Maharashtra TPO Association",
    category: "competitions",
    date: "2025",
    image: "/certificates/matpo-aptitude-idol.png",
    pdfUrl: "https://drive.google.com/file/d/1e7Ol6XY2tbdIbbPpOXzWvZqQlFrdBOVI/view?usp=sharing",
    verificationBadge: "NATIONAL APTITUDE",
    description: "National-level certification awarded in the MaTPO Aptitude Idol 2025 contest for high percentile logical, quantitative, and analytical aptitude."
  },
  {
    id: "jspm-pandora",
    label: "JSPM PANDORA HACKATHON",
    title: "Pandora Hackathon 2026 — IT Department",
    issuer: "JSPM's BSIOTR Wagholi, Pune",
    category: "competitions",
    date: "2026",
    image: "/certificates/jspm-pandora-hackathon.png",
    verificationBadge: "HACKATHON SHOWCASE",
    description: "Participated and showcased innovative full-stack software solutions at the Pandora Hackathon 2026 organized by the IT Department."
  },
  {
    id: "aws-forage",
    label: "AWS SOLUTIONS ARCHITECTURE",
    title: "AWS Solutions Architecture Virtual Simulation",
    issuer: "Amazon Web Services (AWS) via Forage",
    category: "ai_cloud",
    date: "2025",
    image: "/certificates/aws-solutions-architecture.png",
    verificationBadge: "CLOUD ARCHITECTURE",
    description: "Practical simulation designing highly available, fault-tolerant distributed cloud infrastructure on Amazon Web Services."
  }
];

const categoryTabs: { id: CertCategory; label: string; count: number }[] = [
  { id: "all", label: "All Credentials", count: certificatesList.length },
  { id: "internships", label: "Internships & Industry", count: certificatesList.filter(c => c.category === "internships").length },
  { id: "competitions", label: "Contests & Hackathons", count: certificatesList.filter(c => c.category === "competitions").length },
  { id: "ai_cloud", label: "AI & Cloud Platforms", count: certificatesList.filter(c => c.category === "ai_cloud").length },
  { id: "coding", label: "Algorithmic & LeetCode", count: certificatesList.filter(c => c.category === "coding").length },
];

export default function CertificationsShowcase() {
  const [activeTab, setActiveTab] = useState<CertCategory>("all");
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const filteredCerts = activeTab === "all" 
    ? certificatesList 
    : certificatesList.filter(c => c.category === activeTab);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="relative py-24 md:py-32 bg-[#050812] text-foreground border-t border-border/60 overflow-hidden">
      {/* Background Cyber Glow Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b14_1px,transparent_1px),linear-gradient(to_bottom,#1e293b14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header Matching Screenshot 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <span className="text-cyan-400">✦</span>
            <span>CERTIFICATIONS</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Verified Credentials &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400">Industry Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-mono">
            (Click any certificate to expand in high-definition)
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Filter By Domain</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categoryTabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-cyan-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)] font-bold scale-[1.02]"
                      : "bg-[#0b1323] text-gray-400 hover:text-white hover:bg-white/5 border border-white/10"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isSelected ? "bg-black/20 text-black font-bold" : "bg-white/10 text-gray-400"}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* STATIC ELEGANT CERTIFICATES GRID (Matching Screenshot 2) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedCert(cert)}
                className="group relative rounded-3xl border border-white/10 bg-[#090f1d]/90 hover:bg-[#0c1426] backdrop-blur-xl p-5 shadow-xl hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top Label Bar Matching Screenshot 2 */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 group-hover:text-cyan-200 transition-colors uppercase truncate">
                      {cert.label}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  {/* High-Definition Certificate Thumbnail Preview */}
                  <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden bg-black/60 border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Dark gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Hover Inspect Pill */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px] transition-opacity duration-200">
                      <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-400 text-black font-bold text-xs shadow-2xl">
                        <ZoomIn className="w-4 h-4" />
                        <span>Inspect in Full HD</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="truncate max-w-[200px]">
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1 text-cyan-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Verified</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* FULL-IMAGE HIGH-DEFINITION EXPAND MODAL WITH BLURRY BACKDROP */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-2xl"
            onClick={() => setSelectedCert(null)}
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
                    {selectedCert.verificationBadge}
                  </span>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {selectedCert.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">
                      Issued by {selectedCert.issuer} • {selectedCert.date}
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2.5 rounded-2xl bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 border border-white/10 transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-Definition Certificate Image Display */}
              <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/60 min-h-[300px]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[62vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
                />
              </div>

              {/* Modal Description Footer */}
              <div className="p-5 sm:p-6 border-t border-white/10 bg-black/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Official Credential Verification</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs shadow-lg transition-all active:scale-95 shrink-0"
                    >
                      <span>Verify Credential Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/10 transition-all active:scale-95 shrink-0"
                  >
                    <span>Full Image</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
