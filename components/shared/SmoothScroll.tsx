"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Never hijack touch on mobile / touchscreens / reduced-motion.
    // Native GPU compositor scrolling provides 120Hz smooth scrolling with 0ms INP.
    const isTouch = 
      typeof window !== "undefined" && 
      ("ontouchstart" in window || 
       navigator.maxTouchPoints > 0 || 
       window.matchMedia("(pointer: coarse)").matches ||
       window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    if (isTouch) {
      return;
    }

    // 2. Desktop mouse-wheel only: high-performance, non-blocking configuration
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 0, // NEVER intercept or hijack touch/gesture inputs
      syncTouch: false,
      anchors: false, // Prevents Lenis from attaching blocking click listeners to <html>
      autoToggle: true,
      stopInertiaOnNavigate: false,
    });

    // 3. Demand-driven RAF loop: SLEEPS when idle, only animates during active scroll
    let rafId: number | null = null;
    let isRunning = false;
    let idleTimeout: ReturnType<typeof setTimeout> | null = null;

    function loop(time: number) {
      lenis.raf(time);
      if (lenis.isScrolling || lenis.velocity !== 0) {
        rafId = requestAnimationFrame(loop);
      } else {
        isRunning = false;
        rafId = null;
      }
    }

    function wakeUp() {
      if (idleTimeout) clearTimeout(idleTimeout);
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(loop);
      }
      // Safety timeout to ensure loop settles cleanly and sleeps
      idleTimeout = setTimeout(() => {
        if (!lenis.isScrolling && lenis.velocity === 0) {
          isRunning = false;
          if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
        }
      }, 800);
    }

    // Wake loop only when user interacts with wheel
    window.addEventListener("wheel", wakeUp, { passive: true });
    lenis.on("virtual-scroll", wakeUp);

    return () => {
      window.removeEventListener("wheel", wakeUp);
      if (idleTimeout) clearTimeout(idleTimeout);
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
