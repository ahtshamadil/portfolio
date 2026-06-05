"use client";

import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";
import { testimonials } from "@/data/testimonials";

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

export default function Testimonials() {
  // Hide the entire section if every entry is still a placeholder —
  // empty placeholders are worse than no section at all.
  const hasRealQuotes = testimonials.some(
    (t) => !t.quote.startsWith("[PLACEHOLDER]")
  );
  if (!hasRealQuotes) return null;

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-mono text-accent-light border border-accent/30 rounded-full bg-accent/5 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            What people <span className="gradient-text">say</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials
            .filter((t) => !t.quote.startsWith("[PLACEHOLDER]"))
            .map((t, i) => (
              <motion.figure
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 flex flex-col h-full hover:border-accent/30 transition-all duration-300"
              >
                <FiMessageSquare className="w-6 h-6 text-accent-light mb-4 opacity-70" />
                <blockquote className="text-foreground/90 leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent-light font-bold shrink-0"
                    aria-hidden
                  >
                    {t.author.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground text-sm truncate">
                      {t.author}
                    </p>
                    <p className="text-xs text-muted truncate">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
