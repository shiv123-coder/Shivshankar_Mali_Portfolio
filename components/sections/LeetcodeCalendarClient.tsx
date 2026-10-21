"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { ExternalLink, Flame, Calendar, Trophy, CheckCircle2 } from "lucide-react";
import { LeetCodeData, fallbackLeetCodeData } from "@/lib/leetcodeSnapshot";

interface Props {
  data?: LeetCodeData;
}

interface DayCell {
  date: string;
  dayOfWeek: number;
  count: number;
  dayOfMonth: number;
  monthName: string;
  formattedDate: string;
}

interface MonthLabel {
  weekIndex: number;
  month: string;
}

export default function LeetcodeCalendarClient({ data = fallbackLeetCodeData }: Props) {
  const [hoveredDay, setHoveredDay] = useState<{
    cell: DayCell;
    x: number;
    y: number;
  } | null>(null);

  // Extract metrics
  const totalSolved = data.acSubmissionNum.find((s) => s.difficulty === "All")?.count ?? 302;
  const easySolved = data.acSubmissionNum.find((s) => s.difficulty === "Easy")?.count ?? 185;
  const mediumSolved = data.acSubmissionNum.find((s) => s.difficulty === "Medium")?.count ?? 101;
  const hardSolved = data.acSubmissionNum.find((s) => s.difficulty === "Hard")?.count ?? 16;
  const streak = data.streak || 109;
  const activeDays = data.totalActiveDays || 216;
  const rank = data.ranking || 511775;

  // Build the 53-week submission grid
  const { weeks, monthLabels, totalSubmissionsInYear } = useMemo(() => {
    // Map timestamps to YYYY-MM-DD
    const dateCounts = new Map<string, number>();
    let totalSubmissions = 0;

    for (const [ts, count] of Object.entries(data.submissionCalendar)) {
      const d = new Date(Number(ts) * 1000);
      const key = d.toISOString().split("T")[0];
      dateCounts.set(key, count);
      totalSubmissions += count;
    }

    // Reference today date
    const today = new Date();
    // In case user local time is 2026 or current year, align properly
    const endDayOfWeek = today.getDay(); // 0 (Sun) - 6 (Sat)
    
    // 52 full weeks back from today's week
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364 - endDayOfWeek);

    const days: DayCell[] = [];
    const cur = new Date(startDate);

    while (cur <= today) {
      const dateStr = cur.toISOString().split("T")[0];
      const count = dateCounts.get(dateStr) || 0;
      days.push({
        date: dateStr,
        dayOfWeek: cur.getDay(),
        count,
        dayOfMonth: cur.getDate(),
        monthName: cur.toLocaleString("en-US", { month: "short" }),
        formattedDate: cur.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      });
      cur.setDate(cur.getDate() + 1);
    }

    // Group into columns of 7 days
    const weekCols: DayCell[][] = [];
    let currentWeek: DayCell[] = [];

    for (const day of days) {
      currentWeek.push(day);
      if (day.dayOfWeek === 6) {
        weekCols.push(currentWeek);
        currentWeek = [];
      }
    }
    if (currentWeek.length > 0) {
      weekCols.push(currentWeek);
    }

    // Determine month label positions
    const labels: MonthLabel[] = [];
    let lastMonth = "";

    weekCols.forEach((week, wIndex) => {
      const dayWithFirst = week.find((d) => d.dayOfMonth <= 7);
      if (dayWithFirst && dayWithFirst.monthName !== lastMonth) {
        labels.push({ weekIndex: wIndex, month: dayWithFirst.monthName });
        lastMonth = dayWithFirst.monthName;
      }
    });

    return {
      weeks: weekCols,
      monthLabels: labels,
      totalSubmissionsInYear: totalSubmissions,
    };
  }, [data]);

  // Color helper based on LeetCode submission count
  const getCellColor = (count: number) => {
    if (count === 0) return "bg-white/[0.04] border-white/[0.05] hover:border-amber-400/40";
    if (count === 1) return "bg-[#FFA116]/35 border-[#FFA116]/40 hover:bg-[#FFA116]/50";
    if (count === 2) return "bg-[#FFA116]/70 border-[#FFA116]/70 shadow-[0_0_6px_rgba(255,161,22,0.35)] hover:bg-[#FFA116]/85";
    return "bg-[#FFA116] border-amber-300 shadow-[0_0_10px_rgba(255,161,22,0.7)] hover:bg-amber-300";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="p-6 md:p-8 rounded-3xl border border-border bg-card/90 backdrop-blur-xl relative overflow-hidden shadow-2xl hover:border-[#FFA116]/40 transition-colors"
    >
      {/* Background ambient gold/orange glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFA116]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      {/* Card Header */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-border/60">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-[#FFA116]/10 border border-[#FFA116]/30 text-[#FFA116] shadow-[0_0_20px_rgba(255,161,22,0.2)]">
            <SiLeetcode className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                LeetCode Activity & Heatmap
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#FFA116]/15 text-[#FFA116] border border-[#FFA116]/30">
                @{data.username}
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Solver
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Live algorithmic problem-solving telemetry, streaks &amp; daily submission density.
            </p>
          </div>
        </div>

        {/* Link Button */}
        <div className="flex items-center gap-3">
          <a
            href={`https://leetcode.com/u/${data.username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-[#FFA116]/10 hover:bg-[#FFA116] text-[#FFA116] hover:text-black border border-[#FFA116]/30 hover:border-[#FFA116] shadow-sm transition-all duration-200 group"
          >
            <span>View Full Profile</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
        {/* Total Solved */}
        <div className="p-4 rounded-2xl border border-border bg-background/50 hover:border-[#FFA116]/40 transition-colors">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#FFA116]" />
            <span>Total Solved</span>
          </div>
          <div className="text-2xl font-bold text-foreground flex items-baseline gap-2">
            <span>{totalSolved}</span>
            <span className="text-xs font-normal text-muted-foreground">Problems</span>
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono">
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
              E: {easySolved}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/20">
              M: {mediumSolved}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-400 border border-rose-500/20">
              H: {hardSolved}
            </span>
          </div>
        </div>

        {/* Max Streak */}
        <div className="p-4 rounded-2xl border border-border bg-background/50 hover:border-amber-500/40 transition-colors">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>Max Streak</span>
          </div>
          <div className="text-2xl font-bold text-foreground flex items-baseline gap-2">
            <span>{streak}</span>
            <span className="text-xs font-semibold text-amber-500">Days 🔥</span>
          </div>
          <p className="text-[11px] text-muted-foreground mt-2">Continuous Daily Solves</p>
        </div>

        {/* Total Active Days */}
        <div className="p-4 rounded-2xl border border-border bg-background/50 hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1.5">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>Active Days</span>
          </div>
          <div className="text-2xl font-bold text-foreground flex items-baseline gap-2">
            <span>{activeDays}</span>
            <span className="text-xs font-normal text-muted-foreground">Days</span>
          </div>
          <p className="text-[11px] text-muted-foreground mt-2">Consistent Practice</p>
        </div>

        {/* Global Ranking */}
        <div className="p-4 rounded-2xl border border-border bg-background/50 hover:border-purple-500/40 transition-colors">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1.5">
            <Trophy className="w-3.5 h-3.5 text-purple-400" />
            <span>Global Rank</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            ~{rank.toLocaleString()}
          </div>
          <p className="text-[11px] text-muted-foreground mt-2">Top Tier Competitive</p>
        </div>

        {/* Submissions count */}
        <div className="p-4 rounded-2xl border border-border bg-background/50 col-span-2 sm:col-span-1 hover:border-[#FFA116]/40 transition-colors">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FFA116]" />
            <span>Submissions</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            {totalSubmissionsInYear}
          </div>
          <p className="text-[11px] text-muted-foreground mt-2">Last 365 Days Activity</p>
        </div>
      </div>

      {/* Heatmap Section */}
      <div className="relative">
        {/* Scrollable Container */}
        <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          <div className="min-w-[760px] flex flex-col">
            
            {/* Month Labels Header */}
            <div className="flex text-[11px] font-mono text-muted-foreground mb-2 pl-9">
              {weeks.map((_, index) => {
                const label = monthLabels.find((m) => m.weekIndex === index);
                return (
                  <div key={index} className="w-[14px] mr-[3px] text-left shrink-0">
                    {label ? (
                      <span className="font-semibold text-foreground/80">{label.month}</span>
                    ) : null}
                  </div>
                );
              })}
            </div>

            {/* Grid with Weekday Labels on Left */}
            <div className="flex">
              {/* Day of Week Labels */}
              <div className="flex flex-col justify-between text-[10px] font-mono text-muted-foreground pr-2 py-0.5 select-none h-[116px]">
                <span className="h-[14px] leading-[14px]"></span>
                <span className="h-[14px] leading-[14px]">Mon</span>
                <span className="h-[14px] leading-[14px]"></span>
                <span className="h-[14px] leading-[14px]">Wed</span>
                <span className="h-[14px] leading-[14px]"></span>
                <span className="h-[14px] leading-[14px]">Fri</span>
                <span className="h-[14px] leading-[14px]"></span>
              </div>

              {/* 53 Columns of Days */}
              <div className="flex gap-[3px]">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px]">
                    {week.map((day) => (
                      <div
                        key={day.date}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredDay({
                            cell: day,
                            x: rect.left + rect.width / 2,
                            y: rect.top,
                          });
                        }}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-[14px] h-[14px] rounded-[3px] border transition-all duration-150 cursor-pointer ${getCellColor(
                          day.count
                        )}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Floating Tooltip */}
        <AnimatePresence>
          {hoveredDay && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              style={{
                position: "fixed",
                left: `${hoveredDay.x}px`,
                top: `${hoveredDay.y - 10}px`,
                transform: "translate(-50%, -100%)",
                pointerEvents: "none",
                zIndex: 9999,
              }}
              className="px-3 py-2 rounded-xl bg-[#0b1323] border border-[#FFA116]/40 text-xs shadow-2xl text-foreground font-sans whitespace-nowrap backdrop-blur-md"
            >
              <div className="font-semibold text-white flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    hoveredDay.cell.count > 0 ? "bg-[#FFA116]" : "bg-muted-foreground"
                  }`}
                />
                <span>
                  {hoveredDay.cell.count === 0
                    ? "No submissions"
                    : `${hoveredDay.cell.count} submission${hoveredDay.cell.count > 1 ? "s" : ""}`}
                </span>
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5">
                {hoveredDay.cell.formattedDate}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Bar: Total + Legend */}
        <div className="mt-6 pt-4 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">{totalSubmissionsInYear}</span>
            <span>total submissions in the last year</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Less</span>
            <span className="w-3 h-3 rounded-[3px] bg-white/[0.04] border border-white/[0.05]" />
            <span className="w-3 h-3 rounded-[3px] bg-[#FFA116]/35 border border-[#FFA116]/40" />
            <span className="w-3 h-3 rounded-[3px] bg-[#FFA116]/70 border border-[#FFA116]/70" />
            <span className="w-3 h-3 rounded-[3px] bg-[#FFA116] border border-amber-300 shadow-[0_0_6px_rgba(255,161,22,0.6)]" />
            <span>More</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
