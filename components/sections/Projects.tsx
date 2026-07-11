"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Static imports for automatic blur placeholders
import muktiImg from "@/public/mukti-portal-preview.png";
import loaniqImg from "@/public/loaniq-preview.png";
import visionKiranaImg from "@/public/vision-kirana-preview.png";
import skybankingImg from "@/public/skybanking-preview.png";
import drivezoneImg from "@/public/drivezone-preview.png";
import midwaycafeImg from "@/public/midwaycafe-preview.png";

const projects = [
  {
    title: "Mukti Portal",
    description: "A digital trust ecosystem designed to empower informal sector workers. It generates verifiable trust signals based on authentic work histories and peer validations, helping unbanked individuals build a reliable professional identity to access financial services (developed for VYOMA 2026).",
    category: "Full-Stack",
    tech: ["React", "Firebase", "Node.js", "Python"],
    demo: "https://mukti-portal.vercel.app/",
    repo: "https://github.com/shiv123-coder/Mukti-Portal",
    image: muktiImg,
  },
  {
    title: "LoanIQ",
    description: "An enterprise-grade, AI-powered Loan Origination System that automates the underwriting process. It leverages OCR for instant document data extraction, NLP for intelligent risk analysis, and biometric validation to provide secure, frictionless loan approvals at scale.",
    category: "AI & Full-Stack",
    tech: ["React", "Node.js", "Firebase", "OCR", "NLP"],
    demo: "https://loan-iq-ai.vercel.app",
    repo: "https://github.com/shiv123-coder/LoanIQ-AI",
    image: loaniqImg,
  },
  {
    title: "VisionKirana",
    description: "A micro-lending intelligence platform built to assess the creditworthiness of unbanked local stores. By utilizing computer vision to analyze store inventory and foot traffic in real-time, it dynamically generates risk profiles and loan eligibility metrics without requiring traditional financial histories.",
    category: "AI & Full-Stack",
    tech: ["React 19", "FastAPI", "PostgreSQL", "OpenCV"],
    demo: "https://visionkirana.vercel.app/",
    repo: "https://github.com/shiv123-coder/visionkirana",
    image: visionKiranaImg,
  },
  {
    title: "SkyBanking",
    description: "A comprehensive enterprise banking application engineered for high-security financial operations. It features robust peer-to-peer money transfers, multi-factor OTP authentication, and strict ACID-compliant database transactions to ensure absolute data integrity and fraud prevention.",
    category: "Enterprise Java",
    tech: ["Java 21", "PostgreSQL", "Servlets", "Stripe"],
    demo: "https://skybanking.onrender.com",
    repo: "https://github.com/shiv123-coder/skybanking",
    image: skybankingImg,
  },
  {
    title: "DriveZone",
    description: "A full-scale enterprise management platform built for car showrooms and dealerships. It streamlines daily operations by providing role-based secure authentication, real-time vehicle inventory tracking, and an automated customer enquiry handling system to boost sales conversions.",
    category: "Enterprise Java",
    tech: ["Java", "JSP", "Servlets", "Tomcat"],
    demo: "https://drivezone-project.onrender.com/",
    repo: "https://github.com/shiv123-coder/DriveZone",
    image: drivezoneImg,
  },
  {
    title: "MidwayCafe",
    description: "A robust restaurant e-commerce and order management system. It demonstrates a clean MVC architecture using Laravel and features dynamic server-side Blade rendering, automated cart management, and seamless end-to-end payment workflows for an optimized dining experience.",
    category: "Full-Stack",
    tech: ["PHP", "Laravel", "PostgreSQL"],
    demo: "https://midwaycafe-restaurant-e-commerce-system.onrender.com/",
    repo: "https://github.com/shiv123-coder/Restaurant_Ecommerce_System_Laravel",
    image: midwaycafeImg,
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

        {/* Clean uniform 2-column grid for larger cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Project Image Header */}
              <div className="relative h-[280px] w-full overflow-hidden border-b border-border bg-secondary">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="flex flex-col flex-grow p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 bg-secondary rounded-full hover:bg-secondary/80 text-xs font-medium">
                        <FaGithub className="w-4 h-4" />
                        <span>Source</span>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 bg-secondary rounded-full hover:bg-secondary/80 text-xs font-medium">
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-8 flex-grow">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50"
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
