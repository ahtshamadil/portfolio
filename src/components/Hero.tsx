"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FiArrowDown } from "react-icons/fi";
import { socials } from "@/data/socials";
import { ErrorBoundary } from "./ErrorBoundary";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => null,
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <ErrorBoundary>
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </ErrorBoundary>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[128px] pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        {/* Greeting Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-1.5 text-sm font-mono text-accent-light border border-accent/30 rounded-full bg-accent/5">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Ahtsham Adil</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted mb-6"
        >
          Full Stack Web Developer
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building production MERN apps with real-time features, clean APIs, and
          modern UIs. Passionate about creating seamless digital experiences from
          frontend to deployment.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            <span className="relative z-10">View My Work</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-accent/40 text-accent-light hover:bg-accent/10 font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {socials.slice(0, 3).map((social) => {
            const isExternal = social.url.startsWith("http");
            return (
              <a
                key={social.name}
                href={social.url}
                {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                className="p-3 text-muted hover:text-accent-light hover:bg-accent/10 rounded-lg transition-all duration-200"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent-light transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FiArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
