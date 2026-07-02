"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Trophy, Award, ExternalLink, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    role: "Java & DSA Intern",
    company: "Talent Battle Pvt. Ltd.",
    date: "2024",
    description: "Strengthened core Java and OOP concepts by implementing foundational Data Structures and optimizing algorithms. Built robust logical problem-solving foundations.",
    certificate: "https://drive.google.com/file/d/1qzONcMVjVLykMn06f6GnNJDo4S2D311v/view?usp=sharing",
    icon: Briefcase,
  },
  {
    role: "Java Development Intern",
    company: "Oasis Infobyte",
    date: "2024",
    description: "Built modular Java applications following clean code principles and industry best practices. Focused on backend workflows and database connectivity.",
    certificate: "https://drive.google.com/file/d/1uV9Ec-MV_9EkuHjdvtsWhNtTsC1ZLwuj/view?usp=sharing",
    icon: Briefcase,
  }
];

const achievements = [
  {
    title: "TCS CodeVita Rank 2142",
    description: "Secured a Global Rank of 2142 in the International Coding Contest by Tata Consultancy Services.",
    link: "https://drive.google.com/file/d/1rH2a06f-mDsVEqGgX6KnBwNgQuLwVV1B/view?usp=sharing",
    icon: Trophy,
  },
  {
    title: "100 Days LeetCode Challenge",
    description: "Earned the 50 Days Coding Badge across two consecutive years (2025 & 2026).",
    link: "https://drive.google.com/file/d/1Rs17OSfri9b4_rHCRNbOCamKnpvfDRWB/view?usp=sharing",
    icon: Code,
  },
  {
    title: "VYOMA 2026 Prototype Competition",
    description: "Built the Mukti Portal focusing on social and financial inclusion.",
    link: "https://drive.google.com/file/d/1lhM2ur-aR0Zgo9dAX3g1G5qyL9Rt7902/view?usp=sharing",
    icon: Award,
  },
  {
    title: "MaTPO Aptitude Idol 2025",
    description: "Active participant in the national-level aptitude challenge.",
    link: "https://drive.google.com/file/d/1e7Ol6XY2tbdIbbPpOXzWvZqQlFrdBOVI/view?usp=sharing",
    icon: Award,
  },
  {
    title: "Hackathons",
    description: "Participated in TenZorX AI Hackathon (Team CodeStorm - Built LoanIQ) & UIDAI Hackathon.",
    icon: Trophy,
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "achievements">("experience");

  return (
    <section id="experience" className="relative py-24 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Tab Controls */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex p-1 bg-secondary/50 rounded-xl border border-border"
          >
            <button
              onClick={() => setActiveTab("experience")}
              className={cn(
                "px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300",
                activeTab === "experience" 
                  ? "bg-background text-foreground shadow-sm border border-border scale-[1.02]" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Experience & Certifications
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={cn(
                "px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300",
                activeTab === "achievements" 
                  ? "bg-background text-foreground shadow-sm border border-border scale-[1.02]" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Achievements
            </button>
          </motion.div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                id="certifications"
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="relative border-l border-border/50 ml-4 space-y-12"
              >
                {experiences.map((exp, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-8"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
                      <exp.icon className="w-4 h-4 text-primary" />
                    </div>
                    
                    <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors">
                      <span className="text-xs font-mono text-muted-foreground mb-2 block">{exp.date}</span>
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                      <h4 className="text-primary font-medium mb-4">{exp.company}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      <a 
                        href={exp.certificate} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 px-4 py-2 rounded-lg transition-colors"
                      >
                        View Certificate <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "achievements" && (
              <motion.div
                key="achievements"
                id="achievements"
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                {achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex gap-4 p-5 rounded-2xl border border-border bg-card hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                        <achievement.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {achievement.description}
                      </p>
                      {achievement.link && (
                        <a 
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Verify Credential <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
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
