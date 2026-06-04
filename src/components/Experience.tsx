"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiCalendar, FiExternalLink } from "react-icons/fi";
import { experience } from "@/data/experience";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-mono text-accent-light border border-accent/30 rounded-full bg-accent/5 mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Vertical timeline rail */}
          <div className="absolute left-2 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

          {experience.map((entry) => (
            <motion.div
              key={entry.id}
              variants={itemVariants}
              className="relative pl-10 sm:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-4 top-3 w-5 h-5 rounded-full bg-accent border-4 border-background shadow-lg shadow-accent/40" />

              <div className="glass rounded-2xl p-6 sm:p-8 hover:border-accent/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      {entry.company}
                    </h3>
                    <p className="text-accent-light font-medium text-sm sm:text-base">
                      {entry.role}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-xs sm:text-sm text-muted shrink-0">
                    <span className="flex items-center gap-1.5 font-mono">
                      <FiCalendar className="w-3.5 h-3.5" />
                      {entry.dates}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin className="w-3.5 h-3.5" />
                      {entry.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {entry.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * i, duration: 0.4 }}
                      className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>

                {entry.org && (
                  <a
                    href={entry.org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${entry.org.label} (opens in new tab)`}
                    className="inline-flex items-center gap-1.5 mt-5 text-sm text-accent-light hover:underline font-mono"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" />
                    {entry.org.label}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
