"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Zap, Code2, Coffee, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

const cards = [
  {
    title: "The Mission",
    description: "Bridging the gap between bleeding-edge AI models and robust, scalable backend infrastructure to build the next generation of enterprise software.",
    icon: Target,
    className: "md:col-span-2 bg-gradient-to-br from-card to-primary/5",
    iconClassName: "text-primary",
  },
  {
    title: "Tech Stack",
    description: "Proficient in Next.js, React, Node.js, Express, MongoDB, PostgreSQL, TailwindCSS, TypeScript, and Java.",
    icon: Code2,
    className: "md:col-span-1",
    iconClassName: "text-accent",
  },
  {
    title: "Education",
    description: "B.E. Computer Engineering • JSPM BSIOTR (Expected 2027).",
    icon: GraduationCap,
    className: "md:col-span-1",
    iconClassName: "text-primary",
  },
  {
    title: "Location",
    description: "Based in Pune, India. Available for remote work.",
    icon: Globe2,
    className: "md:col-span-1",
    iconClassName: "text-primary",
  },
  {
    title: "Beyond Code",
    description: "Fueled by good coffee, great books, and continuous learning.",
    icon: Coffee,
    className: "md:col-span-1",
    iconClassName: "text-accent",
  },
  {
    title: "Core Philosophy",
    description: "Performance is a feature. Clean architecture is a necessity. Empathy for the end user is everything.",
    icon: Zap,
    className: "md:col-span-3 bg-gradient-to-r from-card via-card to-accent/5",
    iconClassName: "text-primary",
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I am a Full Stack Developer deeply passionate about software engineering. 
            I don't just write code; I architect systems designed to scale, perform efficiently, 
            and solve real-world problems.
          </p>
        </motion.div>

        {/* Polished Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-border bg-card p-8 flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1",
                card.className
              )}
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/80 flex items-center justify-center mb-6 border border-border group-hover:scale-110 transition-transform duration-300">
                    <card.icon className={cn("w-6 h-6", card.iconClassName)} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight text-foreground">{card.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
