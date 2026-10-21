"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Trophy, 
  Sparkles,
  School,
  FileBadge
} from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  university?: string;
  period: string;
  score: string;
  scoreLabel: string;
  location: string;
  status: "In Progress" | "Completed";
  honors: string[];
  coursework?: string[];
  description: string;
  badgeColor: string;
  glowColor: string;
}

const educationJourney: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
    institution: "JSPM's Bhivarabai Sawant Institute of Technology & Research (BSIOTR)",
    university: "Savitribai Phule Pune University (SPPU)",
    period: "2023 – 2027",
    score: "9.53 CGPA",
    scoreLabel: "Cumulative CGPA",
    location: "Wagholi, Pune, Maharashtra",
    status: "In Progress",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    glowColor: "from-cyan-500/15 via-transparent to-transparent",
    honors: [
      "Instituted as 2nd College Topper across the engineering cohort",
      "Consistently maintained 9.53 CGPA across all academic semesters",
      "TCS CodeVita Season 13 Global Rank 2143 while representing BSIOTR",
      "Active researcher & lead architect on ANTARIKSH-OS edge AI platform"
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java 21)",
      "Database Management Systems (ACID/SQL)",
      "Operating Systems & Multithreading",
      "Computer Networks & TCP/IP",
      "Theory of Computation & Discrete Math"
    ],
    description: "Rigorous four-year engineering curriculum focused on computing theory, algorithms, system architecture, and software engineering principles with continuous top-tier academic standing."
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Class XII (Science)",
    institution: "Jogeshwari Mata Secondary & Higher Secondary College",
    university: "Maharashtra State Board (MSBSHSE)",
    period: "2021 – 2023",
    score: "92.90 %ile",
    scoreLabel: "MHT-CET Percentile",
    location: "Maharashtra, India",
    status: "Completed",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    glowColor: "from-amber-500/15 via-transparent to-transparent",
    honors: [
      "Secured 2nd College Topper honors in Higher Secondary Board Examination",
      "Achieved 92.90 Percentile in Maharashtra State Common Entrance Test (MHT-CET)",
      "Distinction in Advanced Mathematics and Analytical Sciences"
    ],
    coursework: [
      "Higher Mathematics & Calculus",
      "Physics & Mechanics",
      "Chemistry",
      "Computer Science Fundamentals"
    ],
    description: "Two-year pre-engineering intensive focusing on advanced mathematics, calculus, and scientific reasoning, establishing the analytical bedrock for computer engineering."
  },
  {
    degree: "Secondary School Certificate (SSC) — Class X",
    institution: "Janata Vidyalaya, Pimpri Sandas",
    university: "Maharashtra State Board (MSBSHSE)",
    period: "2020 – 2021",
    score: "84.81%",
    scoreLabel: "SSC Board Score",
    location: "Pimpri Sandas, Pune, Maharashtra",
    status: "Completed",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    glowColor: "from-purple-500/15 via-transparent to-transparent",
    honors: [
      "Secured 84.81% aggregate in Maharashtra State Board (MSBSHSE) SSC Examination",
      "Awarded First Class with Distinction at Janata Vidyalaya, Pimpri Sandas",
      "Demonstrated excellence in Mathematics & Science, establishing the analytical base for engineering"
    ],
    description: "Graduated with 84.81% First Class with Distinction from Janata Vidyalaya, Pimpri Sandas, developing strong analytical discipline and quantitative problem-solving fundamentals."
  }
];

const academicMetrics = [
  {
    value: "9.53",
    label: "Overall CGPA",
    subtitle: "B.E. Computer Engineering",
    color: "text-cyan-400",
    badge: "Institute Ranker",
  },
  {
    value: "Rank #2",
    label: "BSIOTR 2nd Topper",
    subtitle: "JSPM's BSIOTR, Pune",
    color: "text-amber-400",
    badge: "College Honor",
  },
  {
    value: "92.90",
    label: "MHT-CET %ile",
    subtitle: "Engineering Entrance",
    color: "text-emerald-400",
    badge: "Top Tier",
  },
  {
    value: "Rank #2",
    label: "HSC 2nd Topper",
    subtitle: "Jogeshwari Mata Jr. College",
    color: "text-purple-400",
    badge: "HSC Board Honor",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 bg-[#050811] text-foreground border-t border-border/60 overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b14_1px,transparent_1px),linear-gradient(to_bottom,#1e293b14_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC TRAJECTORY &amp; MERIT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400">Journey</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-primary to-purple-500 rounded-full mb-6 mx-auto md:mx-0" />
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed mx-auto md:mx-0">
            A continuous record of high academic distinction, college topper rankings, and deep foundation in computer science and mathematics.
          </p>
        </motion.div>

        {/* Top 4 Academic Honors Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {academicMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 sm:p-6 rounded-3xl border border-white/10 bg-[#090f1d]/90 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                  {m.badge}
                </span>
                <Trophy className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className={`text-2xl sm:text-3xl font-extrabold ${m.color} tracking-tight block`}>
                  {m.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white mt-1 block">
                  {m.label}
                </span>
                <span className="text-[11px] font-mono text-muted-foreground mt-0.5 block">
                  {m.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8">
          {educationJourney.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl border border-white/10 bg-[#090f1d]/90 backdrop-blur-xl p-6 sm:p-9 hover:border-cyan-400/40 transition-all duration-300 shadow-2xl overflow-hidden"
            >
              {/* Subtle Ambient Corner Glow */}
              <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${item.glowColor} blur-3xl pointer-events-none`} />

              {/* Card Header: Degree + Period & Score */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                    <School className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.degree}
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${item.badgeColor}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-cyan-400 mt-1">
                      {item.institution}
                    </p>
                    {item.university && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Affiliated with {item.university}
                      </p>
                    )}
                  </div>
                </div>

                {/* Score & Period Pill */}
                <div className="flex items-center gap-3 lg:flex-col lg:items-end lg:gap-1 shrink-0">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-extrabold text-white">{item.score}</span>
                    <span className="text-[11px] font-mono text-muted-foreground">({item.scoreLabel})</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.period}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Key Honors & Accolades */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0e1a30]/80 border border-white/5 mb-6 space-y-2.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>HONORS &amp; INSTITUTIONAL DISTINCTIONS</span>
                </div>
                {item.honors.map((honor, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{honor}</span>
                  </div>
                ))}
              </div>

              {/* Coursework Tags */}
              {item.coursework && item.coursework.length > 0 && (
                <div className="pt-4 border-t border-white/5">
                  <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>Key Coursework &amp; Competencies:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-gray-300 border border-white/5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
