"use client";

import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

/**
 * "Currently Building" status card — shows visitors that the portfolio
 * is alive between resume updates. Edit the content below as you ship.
 */
export default function CurrentlyBuilding() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-6 sm:p-7 mt-8 relative overflow-hidden"
    >
      {/* Subtle pulsing accent dot */}
      <span className="absolute top-6 right-6 flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan" />
      </span>

      <div className="flex items-start gap-4">
        <div className="p-2.5 bg-accent/10 rounded-lg shrink-0">
          <FiZap className="w-5 h-5 text-accent-light" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-semibold text-foreground">
              Currently Building
            </h3>
            <span className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan border border-accent-cyan/30 rounded px-1.5 py-0.5">
              Live
            </span>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            An ETH crypto scalping bot with{" "}
            <span className="text-foreground">multi-timeframe (MTF) confluence</span>,{" "}
            <span className="text-foreground">CVD divergence detection</span>, and{" "}
            <span className="text-foreground">adaptive risk management</span> — running on
            AWS EC2 with phase-gated strategy iteration.
          </p>
          <p className="text-xs text-muted/80">
            Personal R&amp;D project · Python · Available for review on request
          </p>
        </div>
      </div>
    </motion.div>
  );
}
