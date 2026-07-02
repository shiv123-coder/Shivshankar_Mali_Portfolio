"use client";

import { motion } from "framer-motion";
import { Database, Layout, Terminal, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Vite & PWA", "Framer Motion"]
  },
  {
    title: "Backend",
    icon: Terminal,
    skills: ["Node.js", "Express", "Java (Spring, Servlets)", "Python (FastAPI)", "PHP (Laravel)", "C++"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Firebase", "Supabase", "MongoDB"]
  },
  {
    title: "AI & Tools",
    icon: Cpu,
    skills: ["OpenCV (Computer Vision)", "Docker", "Git & GitHub", "CI/CD Actions", "Maven", "Postman"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive overview of the technologies, languages, and tools I use to build robust, scalable, and modern applications.
          </p>
        </motion.div>

        {/* Compact Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-secondary rounded-2xl text-primary">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-2.5 rounded-xl bg-secondary/50 text-foreground text-sm font-medium border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Language Stats (Static Approximation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3 tracking-tight">
            <Terminal className="w-6 h-6 text-primary" />
            Repository Language Distribution
          </h3>
          <div className="flex h-3 w-full rounded-full overflow-hidden mb-6">
            <div className="bg-[#b07219] w-[45%]" title="Java" />
            <div className="bg-[#3178c6] w-[25%]" title="TypeScript" />
            <div className="bg-[#f1e05a] w-[15%]" title="JavaScript" />
            <div className="bg-[#3572A5] w-[10%]" title="Python" />
            <div className="bg-[#4F5D95] w-[5%]" title="PHP" />
          </div>
          <div className="flex flex-wrap gap-8 text-sm font-medium text-muted-foreground">
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
