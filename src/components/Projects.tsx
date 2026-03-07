"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiChevronDown } from "react-icons/fi";
import { projects } from "@/data/projects";

interface ProjectSlideProps {
  project: (typeof projects)[0];
  index: number;
  isLast: boolean;
}

function ProjectSlide({ project, index, isLast }: ProjectSlideProps) {
  const slideRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: slideRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yContent = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={slideRef}
      className="min-h-screen flex items-center justify-center snap-start relative"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
        >
          {/* Project Screenshot / Demo Area */}
          <motion.div
            style={{ y }}
            className={`relative group ${isEven ? "" : "lg:order-2"}`}
          >
            <div className="relative rounded-xl overflow-hidden border border-border bg-surface">
              {/* Browser Chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-surface-light border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-muted font-mono truncate">
                  {project.liveUrl.replace("https://", "")}
                </span>
              </div>

              {/* Project Screenshot */}
              <div className="aspect-video bg-gradient-to-br from-surface to-surface-light relative overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-cyan/5 animate-gradient" />
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Glow effect behind the card */}
            <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.div>

          {/* Project Info */}
          <motion.div
            style={{ y: yContent }}
            className={`space-y-6 ${isEven ? "" : "lg:order-1"}`}
          >
            {/* Year Badge */}
            <span className="inline-block px-3 py-1 text-xs font-mono text-accent-light bg-accent/10 border border-accent/20 rounded-full">
              {project.year}
            </span>

            {/* Title */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-lg text-accent-light font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-muted leading-relaxed">{project.description}</p>

            {/* Highlights */}
            <ul className="space-y-3">
              {project.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {highlight}
                </motion.li>
              ))}
            </ul>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-accent-light bg-accent/10 border border-accent/20 rounded-full hover:bg-accent/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${project.title} (opens in new tab)`}
                className="flex items-center gap-2 px-6 py-2.5 bg-accent hover:bg-accent-light text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title} (opens in new tab)`}
                className="flex items-center gap-2 px-6 py-2.5 border border-border hover:border-accent/40 text-foreground text-sm font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/5"
              >
                <FiGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator (not on last project) */}
      {!isLast && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        >
          <FiChevronDown className="w-6 h-6" />
        </motion.div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Section Header */}
      <div className="pt-24 pb-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-mono text-accent-light border border-accent/30 rounded-full bg-accent/5 mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>
      </div>

      {/* Project Slides */}
      <div className="snap-y snap-proximity">
        {projects.map((project, index) => (
          <ProjectSlide
            key={project.id}
            project={project}
            index={index}
            isLast={index === projects.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
