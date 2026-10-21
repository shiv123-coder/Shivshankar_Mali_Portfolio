"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-colors duration-300",
          isScrolled ? "glass border-b border-border bg-[#070b12]/80 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo with Pixel Name matching Image 3 style */}
          <Link href="/" className="flex items-center gap-1 group shrink-0">
            <span className="font-pixel text-xl sm:text-2xl font-bold tracking-wide text-cyan-400 group-hover:text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.65)] transition-all">
              Shivshankar Mali
            </span>
            <span className="text-primary font-mono font-bold text-lg">/&gt;</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Top Right Controls: >_ ⌘K, Social Icons, Theme Toggle (Matching Image 2) */}
          <div className="hidden md:flex items-center gap-3">
            {/* >_ ⌘K Pill Button */}
            <button
              onClick={triggerCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1627] border border-cyan-500/30 hover:border-cyan-400 text-gray-300 hover:text-white transition-all shadow-sm group active:scale-95"
              title="Quick Search & Navigation (⌘K)"
            >
              <span className="text-cyan-400 font-mono font-bold text-xs group-hover:scale-110 transition-transform">&gt;_</span>
              <kbd className="text-[11px] font-mono text-gray-400 bg-black/40 px-1.5 py-0.5 rounded border border-white/10">⌘K</kbd>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/shiv123-coder"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/shivshankar-mali-b46198314/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="p-2 rounded-lg text-gray-400 hover:text-[#0a66c2] hover:bg-[#0a66c2]/10 transition-all"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://leetcode.com/u/shivshankar_Mali/"
                target="_blank"
                rel="noreferrer"
                title="LeetCode"
                className="p-2 rounded-lg text-gray-400 hover:text-[#ffa116] hover:bg-[#ffa116]/10 transition-all"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
              <a
                href="https://www.codechef.com/users/shiv_core"
                target="_blank"
                rel="noreferrer"
                title="CodeChef"
                className="p-2 rounded-lg text-gray-400 hover:text-[#d39e82] hover:bg-[#5b4638]/20 transition-all"
              >
                <SiCodechef className="w-4 h-4" />
              </a>
            </div>

            <div className="h-4 w-px bg-white/10 mx-0.5" />

            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={triggerCommandPalette}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0d1627] border border-cyan-500/30 text-gray-300 text-xs"
              title="Search"
            >
              <span className="text-cyan-400 font-mono font-bold text-xs">&gt;_</span>
              <kbd className="text-[10px] font-mono">⌘K</kbd>
            </button>
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-[#070b12]/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-5 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-200 hover:text-cyan-400 transition-colors py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Socials */}
            <div className="pt-4 border-t border-border flex items-center gap-3">
              <span className="text-xs font-mono text-gray-400 mr-1">CONNECT:</span>
              <a
                href="https://github.com/shiv123-coder"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="p-2.5 rounded-lg bg-[#0d1627] text-white hover:bg-cyan-500 hover:text-black transition-all"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/shivshankar-mali-b46198314/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="p-2.5 rounded-lg bg-[#0d1627] text-white hover:bg-cyan-500 hover:text-black transition-all"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://leetcode.com/u/shivshankar_Mali/"
                target="_blank"
                rel="noreferrer"
                title="LeetCode"
                className="p-2.5 rounded-lg bg-[#0d1627] text-white hover:bg-cyan-500 hover:text-black transition-all"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
              <a
                href="https://www.codechef.com/users/shiv_core"
                target="_blank"
                rel="noreferrer"
                title="CodeChef"
                className="p-2.5 rounded-lg bg-[#0d1627] text-white hover:bg-cyan-500 hover:text-black transition-all"
              >
                <SiCodechef className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
