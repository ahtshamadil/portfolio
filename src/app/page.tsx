"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { ScrollProgress, LoadingScreen } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
