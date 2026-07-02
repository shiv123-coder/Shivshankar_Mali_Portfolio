"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Layout, Terminal, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Frontend", "Backend", "Database", "AI & Tools"];

const skills = [
  // Frontend
  { name: "React 19", category: "Frontend", level: 95 },
  { name: "Next.js 15", category: "Frontend", level: 90 },
  { name: "TypeScript", category: "Frontend", level: 85 },
  { name: "Tailwind CSS", category: "Frontend", level: 95 },
  { name: "Vite & PWA", category: "Frontend", level: 80 },
  
  // Backend
  { name: "Node.js & Express", category: "Backend", level: 90 },
  { name: "Java (Spring, Servlets)", category: "Backend", level: 85 },
  { name: "Python (FastAPI)", category: "Backend", level: 80 },
  { name: "PHP (Laravel)", category: "Backend", level: 75 },
  { name: "C++", category: "Backend", level: 70 },
  
  // Database
  { name: "PostgreSQL", category: "Database", level: 85 },
  { name: "MySQL", category: "Database", level: 85 },
  { name: "Firebase", category: "Database", level: 90 },
  { name: "Supabase", category: "Database", level: 80 },
  
  // AI & Tools
  { name: "OpenCV (Computer Vision)", category: "AI & Tools", level: 85 },
  { name: "Docker", category: "AI & Tools", level: 75 },
  { name: "Git & CI/CD", category: "AI & Tools", level: 90 },
  { name: "Maven & Build Tools", category: "AI & Tools", level: 80 },
];

const getIconForCategory = (category: string) => {
  switch (category) {
    case "Frontend": return <Layout className="w-4 h-4" />;
    case "Backend": return <Terminal className="w-4 h-4" />;
    case "Database": return <Database className="w-4 h-4" />;
    case "AI & Tools": return <Cpu className="w-4 h-4" />;
    default: return <Code2 className="w-4 h-4" />;
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category 
                    ? "bg-foreground text-background shadow-[0_0_15px_rgba(6,182,212,0.3)]" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary rounded-lg text-primary">
                      {getIconForCategory(skill.category)}
                    </div>
                    <span className="font-semibold text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Language Stats (Static Approximation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            Repository Language Distribution
          </h3>
          <div className="flex h-3 w-full rounded-full overflow-hidden mb-4">
            <div className="bg-[#b07219] w-[45%]" title="Java" />
            <div className="bg-[#3178c6] w-[25%]" title="TypeScript" />
            <div className="bg-[#f1e05a] w-[15%]" title="JavaScript" />
            <div className="bg-[#3572A5] w-[10%]" title="Python" />
            <div className="bg-[#4F5D95] w-[5%]" title="PHP" />
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#b07219]"/> Java (45%)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#3178c6]"/> TypeScript (25%)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#f1e05a]"/> JavaScript (15%)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#3572A5]"/> Python (10%)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#4F5D95]"/> PHP (5%)</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
