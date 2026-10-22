import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// Strategically Lazy Loading below-the-fold components to maximize Lighthouse performance
const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const Education = dynamic(() => import("@/components/sections/Education"), { ssr: true });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: true });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: true });
const VisualShowcase = dynamic(() => import("@/components/sections/VisualShowcase"), { ssr: true });
const CertificationsShowcase = dynamic(() => import("@/components/sections/CertificationsShowcase"), { ssr: true });
const GithubDashboard = dynamic(() => import("@/components/sections/GithubDashboard"), { 
  ssr: true,
  loading: () => <div className="py-24 flex justify-center"><div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" /></div>
});
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <VisualShowcase />
      <CertificationsShowcase />
      <GithubDashboard />
      <Contact />
    </main>
  );
}
