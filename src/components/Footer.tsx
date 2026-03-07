"use client";

import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import { FiHeart } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <motion.a
            href="#home"
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            &lt;AA /&gt;
          </motion.a>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const isExternal = social.url.startsWith("http");
              return (
                <a
                  key={social.name}
                  href={social.url}
                  {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                  className="p-2 text-muted hover:text-accent-light hover:bg-accent/10 rounded-lg transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted flex items-center gap-1">
            &copy; {currentYear} Ahtsham Adil. Built with{" "}
            <FiHeart className="w-3 h-3 text-accent" aria-hidden="true" />
            <span className="sr-only">love</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
