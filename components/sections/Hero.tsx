"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, TerminalSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] opacity-50 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col items-center max-w-4xl"
        >
          {/* Availability Badge */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mb-6 flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Available for Opportunities</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">scalable platforms</span> for the modern web.
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            I'm <strong className="text-foreground font-semibold">Shivshankar Mali</strong>, a Software Engineer specializing in enterprise architecture, high-performance APIs, and AI integrations.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link 
              href="#projects" 
              className="flex items-center gap-2 bg-foreground text-background px-8 py-3.5 rounded-lg font-semibold hover:bg-foreground/90 transition-all active:scale-95 w-full sm:w-auto justify-center"
            >
              <TerminalSquare className="w-5 h-5" />
              View Architecture
            </Link>
            <a 
              href="https://shiv123-coder.github.io/Shivshankar_Mali_CSE_Resume_2027.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary/50 border border-border text-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary transition-all active:scale-95 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5 text-primary" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-6 mt-12 text-muted-foreground">
            <a href="https://github.com/shiv123-coder" target="_blank" className="hover:text-foreground transition-colors p-2 hover:bg-secondary/50 rounded-md">
              <span className="sr-only">GitHub</span>
              <FaGithub className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/shivshankar-mali-b46198314/" target="_blank" rel="noreferrer" className="p-3 bg-secondary/50 rounded-full hover:bg-secondary transition-colors group">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="w-5 h-5 text-muted-foreground hover:text-[#0077b5] transition-colors" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
