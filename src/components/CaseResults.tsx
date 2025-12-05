"use client";

import { motion } from "framer-motion";

const results = [
  "$500M+ RECOVERED",
  "TIER 1 LAW FIRM",
  "benchmark LITIGATION 2024",
  "TOP 100 NATIONAL",
  "RECORD BREAKING VERDICTS",
];

export default function CaseResults() {
  return (
    <section id="results" className="py-20 border-y border-zinc-900 overflow-hidden bg-zinc-950">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 pr-20"
        >
          {[...results, ...results, ...results].map((text, i) => ( // Repeat for seamless loop
            <span key={i} className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-outline text-transparent opacity-50 hover:opacity-100 hover:text-blue-600 transition-colors cursor-default">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
