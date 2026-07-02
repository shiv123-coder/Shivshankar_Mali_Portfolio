"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const cards = [
  {
    title: "The Mission",
    description: "Bridging the gap between bleeding-edge AI models and robust, scalable backend infrastructure to build the next generation of enterprise SaaS.",
    icon: Target,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Education",
    description: "B.E. Computer Engineering • JSPM BSIOTR (Expected 2027). Consistently building production-grade software outside the classroom.",
    icon: GraduationCap,
    className: "md:col-span-1",
  },
  {
    title: "Location",
    description: "Based in Pune, Maharashtra, India. Available for remote and hybrid opportunities worldwide.",
    icon: MapPin,
    className: "md:col-span-1",
  },
  {
    title: "Core Philosophy",
    description: "Performance is a feature. Clean architecture is a necessity. Empathy for the end user is everything.",
    icon: Zap,
    className: "md:col-span-2",
  },
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-card p-8 flex flex-col justify-between hover:border-primary/50 transition-colors",
                card.className
              )}
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <card.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
