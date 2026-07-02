"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, TerminalSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const roles = ["Software Engineer", "Full Stack Developer", "Open Source Contributor", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[currentRoleIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
    }, isDeleting ? 40 : 100);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-40 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] opacity-30 mix-blend-screen" />
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
          
          {/* GitHub Profile Image */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mb-10 relative group">
            {/* Glowing ring effect */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <img 
              src="https://github.com/shiv123-coder.png" 
              alt="Shivshankar Mali"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-[3px] border-background shadow-2xl"
            />
          </motion.div>

          {/* Subtitle Tags */}
          <motion.div 
            variants={FADE_UP_ANIMATION_VARIANTS} 
            className="mb-6 flex flex-wrap justify-center items-center gap-3 text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase"
          >
            <span>Full Stack Developer</span>
            <span className="text-muted-foreground/40 hidden sm:inline">|</span>
            <span>React</span>
            <span className="text-muted-foreground/40 hidden sm:inline">|</span>
            <span>Firebase</span>
            <span className="text-muted-foreground/40 hidden sm:inline">|</span>
            <span>Problem Solver</span>
          </motion.div>

          {/* Prominent Name */}
          <motion.h1 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-6xl md:text-[6rem] lg:text-[7rem] font-bold tracking-tighter mb-4 leading-none"
          >
            <span className="text-foreground">Shivshankar</span>{" "}
            <span className="text-primary">Mali</span>
          </motion.h1>

          {/* Dynamic Typing Text */}
          <motion.div 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="h-10 mb-12 text-2xl md:text-3xl font-medium text-muted-foreground tracking-tight"
          >
            {currentText}<span className="animate-pulse text-primary font-light">|</span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link 
              href="#projects" 
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20 w-full sm:w-auto justify-center"
            >
              <TerminalSquare className="w-5 h-5" />
              View Architecture
            </Link>
            <a 
              href="https://shiv123-coder.github.io/Shivshankar_Mali_CSE_Resume_2027.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary/80 border border-border text-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-secondary transition-all active:scale-95 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5 text-primary" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center justify-center gap-4 mt-12">
            <a 
              href="https://github.com/shiv123-coder" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-secondary/50 rounded-full hover:bg-primary hover:text-background text-muted-foreground transition-all duration-300 group"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shivshankar-mali-b46198314/" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-secondary/50 rounded-full hover:bg-primary hover:text-background text-muted-foreground transition-all duration-300 group"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="w-5 h-5" />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
