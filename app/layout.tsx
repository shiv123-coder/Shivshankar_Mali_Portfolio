import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import Navbar from "@/components/shared/Navbar";
import CommandPalette from "@/components/shared/CommandPalette";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import CustomCursor from "@/components/shared/CustomCursor";

import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivshankar D. Mali | Software Engineer",
  description: "Enterprise portfolio of Shivshankar D. Mali, a Full Stack Developer specializing in AI integrations and scalable architectures.",
  keywords: ["Software Engineer", "Full Stack Developer", "AI Integration", "React", "Next.js", "Java", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="bottom-right" theme="dark" toastOptions={{ style: { background: '#18181b', border: '1px solid rgba(255,255,255,0.1)', color: '#fafafa' } }} />
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <CommandPalette />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
