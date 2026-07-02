"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;

      // Push to Firestore
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
        read: false,
      });

      setIsSuccess(true);
      toast.success("Message sent successfully!", {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      e.currentTarget.reset();

      // Reset success state after a few seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to send message", {
        description: "Please try reaching out via email directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6 mx-auto md:mx-0" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Currently available for 2026 software engineering internships. 
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <div className="p-8 rounded-2xl border border-border bg-card flex flex-col gap-8 h-full">
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-xl text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:shivashankrmali7@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    shivashankrmali7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-xl text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">Pune, Maharashtra, India</p>
                </div>
              </div>

              <div className="h-px w-full bg-border/50 my-2" />

              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-foreground">Connect Online</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.linkedin.com/in/shivshankar-mali-b46198314/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground hover:bg-primary hover:text-background transition-all"
                  >
                    <FaLinkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/shiv123-coder" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground hover:bg-foreground hover:text-background transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a 
                    href="https://shiv123-coder.github.io/Shivshankar_Mali_CSE_Resume_2027.pdf" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground hover:bg-accent hover:text-background transition-all"
                    title="Download Resume"
                  >
                    <FileText className="w-5 h-5" />
                    <span className="text-sm font-medium">Resume</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border bg-card relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    disabled={isSubmitting || isSuccess}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    disabled={isSubmitting || isSuccess}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  disabled={isSubmitting || isSuccess}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none disabled:opacity-50" 
                  placeholder="How can I help you?" 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={cn(
                  "w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300",
                  isSuccess 
                    ? "bg-green-500/20 text-green-500 border border-green-500/50" 
                    : "bg-foreground text-background hover:bg-foreground/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
                )}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin"
                    />
                  ) : isSuccess ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      Message Sent <CheckCircle2 className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
