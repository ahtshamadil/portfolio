"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const rafRef = useRef<number | null>(null);

  // Build hrefs that work on both home (pure hash) and subpages (absolute).
  const makeHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setScrolled(window.scrollY > 50);

      // Only track active section on the home page (the only page with
      // multiple sections). On subpages, leave activeSection untouched.
      if (isHome) {
        const sections = navLinks.map((link) => link.hash.slice(1));
        for (const section of [...sections].reverse()) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
      rafRef.current = null;
    });
  }, [isHome]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-accent/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href={isHome ? "#home" : "/"}
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            &lt;AA /&gt;
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                isHome && activeSection === link.hash.slice(1);
              return (
                <a
                  key={link.name}
                  href={makeHref(link.hash)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActive
                      ? "text-accent-light"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-accent/10 rounded-lg"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
            <a
              href="/resume"
              className="ml-4 flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent hover:bg-accent-light text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              <FiDownload className="w-4 h-4" />
              Resume
            </a>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive =
                  isHome && activeSection === link.hash.slice(1);
                return (
                  <motion.a
                    key={link.name}
                    href={makeHref(link.hash)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-accent/10 text-accent-light"
                        : "text-muted hover:text-foreground hover:bg-surface"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <a
                href="/resume"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg"
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
