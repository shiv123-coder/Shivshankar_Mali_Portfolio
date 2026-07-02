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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // Tech dashboard
  },
  {
    title: "VisionKirana",
    description: "AI-Powered Micro-Lending Intelligence platform dynamically assessing unbanked store loan eligibility via computer vision.",
    category: "AI & Full-Stack",
    tech: ["React 19", "FastAPI", "PostgreSQL", "OpenCV"],
    demo: "https://vision-kirana.vercel.app/",
    repo: "https://github.com/shiv123-coder/vision-kirana",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop", // Code/AI
  },
  {
    title: "SkyBanking",
    description: "Secure enterprise banking application featuring peer-to-peer transfers, OTP verification, and ACID transactions.",
    category: "Enterprise Java",
    tech: ["Java 21", "PostgreSQL", "Servlets", "Stripe"],
    demo: "https://skybanking.onrender.com",
    repo: "https://github.com/shiv123-coder/skybanking",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop", // Finance/Banking
  },
  {
    title: "DriveZone",
    description: "Enterprise car showroom management platform with secure authentication, enquiry handling, and inventory control.",
    category: "Enterprise Java",
    tech: ["Java", "JSP", "Servlets", "Tomcat"],
    demo: "https://drivezone-project.onrender.com/",
    repo: "https://github.com/shiv123-coder/DriveZone",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop", // Cars/Showroom
  },
  {
    title: "Mukti Portal",
    description: "Digital trust ecosystem generating trust signals from verified work history for informal workers (VYOMA 2026).",
    category: "Full-Stack",
    tech: ["React", "Firebase", "Node.js", "Python"],
    demo: "https://mukti-portal.vercel.app/",
    repo: "https://github.com/shiv123-coder/Mukti-Portal",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop", // Collaboration/Portal
  },
  {
    title: "MidwayCafe",
    description: "Complete restaurant e-commerce system demonstrating Laravel MVC architecture, Blade rendering, and payment workflows.",
    category: "Full-Stack",
    tech: ["PHP", "Laravel", "PostgreSQL"],
    demo: "https://midwaycafe-restaurant-e-commerce-system.onrender.com/",
    repo: "https://github.com/shiv123-coder/Restaurant_Ecommerce_System_Laravel",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop", // Cafe/Restaurant
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

        {/* Clean uniform 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Project Image Header */}
              <div className="relative h-48 w-full overflow-hidden border-b border-border bg-secondary">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex flex-col flex-grow p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-secondary rounded-full hover:bg-secondary/80">
                        <span className="sr-only">GitHub</span>
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary rounded-full hover:bg-secondary/80">
                        <span className="sr-only">Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-[11px] font-mono font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50"
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
