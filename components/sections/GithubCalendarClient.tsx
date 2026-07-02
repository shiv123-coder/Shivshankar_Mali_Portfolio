"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export default function GithubCalendarClient() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="p-8 rounded-2xl border border-border bg-card overflow-hidden flex items-center justify-center w-full"
    >
      <GitHubCalendar 
        username="shiv123-coder" 
        colorScheme="dark"
        theme={{
          light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
          dark: ['rgba(255,255,255,0.05)', 'rgba(6, 182, 212, 0.4)', 'rgba(6, 182, 212, 0.6)', 'rgba(6, 182, 212, 0.8)', 'rgba(6, 182, 212, 1)'],
        }}
        fontSize={14}
        blockSize={12}
        blockMargin={5}
      />
    </motion.div>
  );
}
