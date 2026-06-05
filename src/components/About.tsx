"use client";

import { motion } from "framer-motion";
import { FiAward, FiCode, FiServer, FiBook, FiUsers } from "react-icons/fi";
import { personalInfo } from "@/data/socials";
import CurrentlyBuilding from "./CurrentlyBuilding";

const stats = [
  { icon: FiCode, label: "Production Apps", value: "2+" },
  { icon: FiServer, label: "Deployed on AWS", value: "AWS" },
  { icon: FiUsers, label: "Students Served", value: "150+" },
  { icon: FiBook, label: "CS @ UMT", value: "Graduating 2026" },
];

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

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-mono text-accent-light border border-accent/30 rounded-full bg-accent/5 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get to know <span className="gradient-text">me better</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column — Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-muted leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-muted leading-relaxed">
                Currently pursuing my{" "}
                <span className="text-foreground font-medium">
                  {personalInfo.degree}
                </span>{" "}
                at the{" "}
                <span className="text-foreground font-medium">
                  {personalInfo.university}
                </span>{" "}
                in {personalInfo.location},{" "}
                <span className="text-accent-light">
                  {personalInfo.graduationDate}
                </span>
                .
              </p>
              <p className="text-muted leading-relaxed">
                I love taking ideas from concept to production — whether it&apos;s
                architecting REST APIs, building real-time features with
                Socket.io, or designing CI/CD pipelines on GitHub Actions.
                Currently teaching the next generation of developers at UMT,
                where I built an autograding system that delivers instant
                feedback to{" "}
                <span className="text-accent-light font-medium">
                  150+ students
                </span>
                .
              </p>
            </motion.div>

            {/* Certification */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-xl p-4 flex items-start gap-4"
            >
              <div className="p-2 bg-accent/10 rounded-lg">
                <FiAward className="w-5 h-5 text-accent-light" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">
                  {personalInfo.certification.title}
                </p>
                <p className="text-muted text-xs mt-0.5">
                  {personalInfo.certification.issuer}
                </p>
                <a
                  href={personalInfo.certification.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light text-xs hover:underline mt-1 inline-block"
                  aria-label="View credential (opens in new tab)"
                >
                  View Credential →
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-xl p-6 text-center group hover:border-accent/30 transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-accent/10 rounded-lg mb-3 group-hover:bg-accent/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-accent-light" />
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Currently building card — spans full width below the 2-col grid */}
        <CurrentlyBuilding />
      </div>
    </section>
  );
}
