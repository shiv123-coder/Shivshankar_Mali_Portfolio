"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "LoanIQ",
    description: "Enterprise AI-Powered Loan Origination System with automated underwriting workflows and biometric validation.",
    category: "AI & Full-Stack",
    tech: ["React", "Node.js", "Firebase", "OCR", "NLP"],
    demo: "https://loan-iq-ai.vercel.app",
    repo: "https://github.com/shiv123-coder/LoanIQ-AI",
    featured: true,
  },
  {
    title: "VisionKirana",
    description: "AI-Powered Micro-Lending Intelligence platform dynamically assessing unbanked store loan eligibility via computer vision.",
    category: "AI & Full-Stack",
    tech: ["React 19", "FastAPI", "PostgreSQL", "OpenCV"],
    demo: "https://vision-kirana.vercel.app/",
    repo: "https://github.com/shiv123-coder/vision-kirana",
    featured: true,
  },
  {
    title: "Mukti Portal",
    description: "Digital trust ecosystem generating trust signals from verified work history for informal workers (VYOMA 2026).",
    category: "Full-Stack",
    tech: ["React", "Firebase", "Node.js", "Python Flask"],
    demo: "https://mukti-portal.vercel.app/",
    repo: "https://github.com/shiv123-coder/Mukti-Portal",
    featured: false,
  },
  {
    title: "SkyBanking",
    description: "Secure enterprise banking application featuring peer-to-peer transfers, OTP verification, and ACID transactions.",
    category: "Enterprise Java",
    tech: ["Java 21", "PostgreSQL", "Servlets", "Stripe"],
    demo: "https://skybanking.onrender.com",
    repo: "https://github.com/shiv123-coder/skybanking",
    featured: true,
  },
  {
    title: "DriveZone",
    description: "Enterprise car showroom management platform with secure authentication, enquiry handling, and inventory control.",
    category: "Enterprise Java",
    tech: ["Java", "JSP", "Servlets", "Tomcat"],
    demo: "https://drivezone-project.onrender.com/",
    repo: "https://github.com/shiv123-coder/DriveZone",
    featured: false,
  },
  {
    title: "MidwayCafe",
    description: "Complete restaurant e-commerce system demonstrating Laravel MVC architecture, Blade rendering, and payment workflows.",
    category: "Full-Stack",
    tech: ["PHP", "Laravel", "PostgreSQL"],
    demo: "https://midwaycafe-restaurant-e-commerce-system.onrender.com/",
    repo: "https://github.com/shiv123-coder/Restaurant_Ecommerce_System_Laravel",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Architecture</h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of enterprise-grade systems, AI platforms, and full-stack applications 
              I've engineered from the ground up.
            </p>
          </div>
          <Link 
            href="https://github.com/shiv123-coder" 
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors pb-2"
          >
            View GitHub Archive <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "group relative flex flex-col justify-between p-6 rounded-2xl border bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300",
                project.featured ? "border-border hover:border-primary/50 lg:col-span-2" : "border-border/50 hover:border-border"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-secondary rounded-xl">
                    <FolderGit2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-secondary/50 rounded-full hover:bg-secondary">
                        <span className="sr-only">GitHub Repository</span>
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary/50 rounded-full hover:bg-secondary">
                        <span className="sr-only">Live Demo</span>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-mono font-medium text-primary mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-secondary/80 text-secondary-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
