"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — theme is undefined on first server render.
  // This is the documented next-themes SSR pattern; the rule flag here
  // is a false positive for the intentional one-shot mount signal.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        aria-hidden
        className="w-9 h-9 rounded-lg border border-border"
      />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-accent/40 text-muted hover:text-accent-light transition-colors duration-200 overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {isDark ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
