"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  FileText, 
  Briefcase, 
  Sparkles, 
  Clock, 
  Copy, 
  Check, 
  Compass, 
  MessageSquare
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const inquiryOptions = [
  { value: "Paid Internship", label: "🚀 Paid Internship (Summer / 6-Month)" },
  { value: "Full-Time Role", label: "💼 Full-Time SDE / AI Engineer Role" },
  { value: "Part-Time Role", label: "⏱️ Part-Time Software Engineering" },
  { value: "Freelance Project", label: "🤝 Freelance / Client Project" },
  { value: "Collaboration", label: "💡 Technical Collaboration / Mentorship" },
  { value: "General Inquiry", label: "☕ General Question / Say Hello" },
];

const preferredLocations = [
  "Remote",
  "Pune",
  "Bengaluru",
  "Hyderabad",
  "Mumbai",
  "Delhi-NCR",
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(inquiryOptions[0].value);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shivashankrmali7@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!", {
      description: "shivashankrmali7@gmail.com",
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const inquiryType = formData.get("inquiry_type") as string || selectedInquiry;
      const message = formData.get("message") as string;

      // Check if Web3Forms key is loaded
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        toast.error("Configuration Error", {
          description: "Web3Forms Access Key is missing in environment variables. You can reach out directly at shivashankrmali7@gmail.com.",
        });
        setIsSubmitting(false);
        return;
      }

      // Submit to Web3Forms with structured subject line
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[Portfolio] ${inquiryType} from ${name}`,
          name,
          email,
          inquiry_type: inquiryType,
          message: `Inquiry Type: ${inquiryType}\n\nMessage:\n${message}`,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setIsSuccess(true);
        toast.success("Message received successfully!", {
          description: "Thanks for reaching out! I typically reply within 24 hours.",
        });
        
        // Reset form on success
        e.currentTarget.reset();
        setSelectedInquiry(inquiryOptions[0].value);

        // Reset success state after a few seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error: any) {
      console.error("Error sending message: ", error);
      toast.error("Failed to send message", {
        description: error.message || "Something went wrong. Please email directly at shivashankrmali7@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#050811] text-foreground border-t border-border/60 overflow-hidden">
      {/* Background Cyber Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPPORTUNITIES &amp; DIRECT INQUIRIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400">Connect</span> &amp; Collaborate
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-primary to-purple-500 rounded-full mb-6 mx-auto md:mx-0" />
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed mx-auto md:mx-0">
            Available for <span className="text-cyan-400 font-semibold">Paid Internships &amp; Jobs (Full-Time or Part-Time)</span>. 
            Open to <span className="text-white font-medium">Remote</span> and on-site / hybrid roles in{" "}
            <span className="text-cyan-300 font-medium">Pune, Bengaluru, Hyderabad, Mumbai, Delhi-NCR</span> (Relocation Ready).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Dossier & Availability Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-7 sm:p-8 rounded-3xl border border-cyan-500/25 bg-[#0b1323]/90 backdrop-blur-xl flex flex-col gap-6 shadow-2xl relative overflow-hidden">
              
              {/* Hiring Beacon Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/30 flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
                    Active Availability
                  </h4>
                  <p className="text-xs text-gray-300 mt-0.5 leading-snug">
                    Paid Internships • Full-Time Roles • Part-Time Roles
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 mt-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Quick response within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Email Block */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-[#0e1a30] border border-white/5">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-medium text-gray-400 uppercase tracking-wider mb-0.5">
                      Direct Email
                    </h3>
                    <a 
                      href="mailto:shivashankrmali7@gmail.com" 
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors break-all"
                    >
                      shivashankrmali7@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-300 transition-colors shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location & Preferred Hubs */}
              <div className="p-4 rounded-2xl bg-[#0e1a30] border border-white/5 space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-medium text-gray-400 uppercase tracking-wider mb-0.5">
                      Primary Base &amp; Preferred Hubs
                    </h3>
                    <p className="text-sm font-semibold text-white">
                      Pune, Maharashtra, India
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Open to Relocation &amp; Worldwide Remote
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Target Hubs:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {preferredLocations.map((loc) => (
                      <span
                        key={loc}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#080e1a] text-cyan-300 border border-cyan-500/20"
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connect Online Platforms */}
              <div className="pt-2">
                <h3 className="text-xs font-mono font-medium text-gray-400 uppercase tracking-wider mb-3">
                  Verified Profiles &amp; Resume
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  <a 
                    href="https://www.linkedin.com/in/shivshankar-mali-b46198314/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 bg-[#0e1a30] text-gray-300 hover:text-white hover:border-[#0077B5]/50 hover:bg-[#0077B5]/15 transition-all group"
                  >
                    <FaLinkedin className="w-4 h-4 text-[#0077B5] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">LinkedIn</span>
                  </a>

                  <a 
                    href="https://github.com/shiv123-coder" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 bg-[#0e1a30] text-gray-300 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all group"
                  >
                    <FaGithub className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">GitHub</span>
                  </a>

                  <a 
                    href="https://leetcode.com/u/shivshankar_Mali/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 bg-[#0e1a30] text-gray-300 hover:text-[#FFA116] hover:border-[#FFA116]/50 hover:bg-[#FFA116]/15 transition-all group"
                  >
                    <SiLeetcode className="w-4 h-4 text-[#FFA116] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">LeetCode (302)</span>
                  </a>

                  <a 
                    href="https://www.codechef.com/users/shiv_core" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 bg-[#0e1a30] text-gray-300 hover:text-[#D1A684] hover:border-[#5B4638]/50 hover:bg-[#5B4638]/15 transition-all group"
                  >
                    <SiCodechef className="w-4 h-4 text-[#D1A684] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">CodeChef (2143)</span>
                  </a>

                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noreferrer"
                    className="col-span-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500 hover:text-black text-cyan-400 text-xs font-semibold transition-all group shadow-sm active:scale-95"
                    title="Download Official Resume PDF"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Official Resume (PDF)</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Inquiries Form with Selection (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-7 sm:p-9 rounded-3xl border border-cyan-500/25 bg-[#0b1323]/90 backdrop-blur-xl relative overflow-hidden shadow-2xl"
          >
            {/* Ambient Corner Flare */}
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>DIRECT TRANSMISSION</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Fill in the details below to initiate contact. All submissions are directly forwarded to my primary inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              
              {/* Inquiry Type Selection (User Request) */}
              <div className="space-y-2">
                <label htmlFor="inquiry_type" className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  <span>What are you looking to connect about? *</span>
                </label>
                <div className="relative">
                  <select
                    id="inquiry_type"
                    name="inquiry_type"
                    value={selectedInquiry}
                    onChange={(e) => setSelectedInquiry(e.target.value)}
                    disabled={isSubmitting || isSuccess}
                    className="w-full bg-[#0e1a30] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all appearance-none cursor-pointer disabled:opacity-50"
                  >
                    {inquiryOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#0e1a30] text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-cyan-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    disabled={isSubmitting || isSuccess}
                    className="w-full bg-[#0e1a30] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all disabled:opacity-50" 
                    placeholder="e.g. Alex Sharma / Hiring Manager" 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider">
                    Your Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    disabled={isSubmitting || isSuccess}
                    className="w-full bg-[#0e1a30] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all disabled:opacity-50" 
                    placeholder="e.g. alex@company.com" 
                  />
                </div>
              </div>

              {/* Message Box */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono font-medium text-gray-300 uppercase tracking-wider">
                  Opportunity Details &amp; Message *
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  disabled={isSubmitting || isSuccess}
                  className="w-full bg-[#0e1a30] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none disabled:opacity-50" 
                  placeholder="Please describe the role, team, tech stack, duration, location (Remote / On-site), or how you'd like to collaborate..." 
                />
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={cn(
                  "w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer",
                  isSuccess 
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50" 
                    : "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-bold shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] active:scale-95"
                )}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"
                    />
                  ) : isSuccess ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      Transmission Sent Successfully <CheckCircle2 className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      Send Message Directly <Send className="w-4 h-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-1">
                <span>🛡️ Spam-free direct delivery</span>
                <span>⚡ &lt; 24h turnaround</span>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
