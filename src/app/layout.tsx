import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ahtshamadil.me"),
  title: "Ahtsham Adil | Full Stack Web Developer",
  description:
    "Software engineer with production MERN deployments on AWS and a CI-based autograding system serving 150+ students. Strong in React, Node.js, MongoDB, REST APIs, and GitHub Actions automation.",
  keywords: [
    "Ahtsham Adil",
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack",
    "React",
    "Node.js",
    "MongoDB",
    "AWS",
    "GitHub Actions",
    "CI/CD",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Ahtsham Adil" }],
  openGraph: {
    title: "Ahtsham Adil | Full Stack Web Developer",
    description:
      "Software engineer with production MERN deployments on AWS and a CI-based autograding system serving 150+ students.",
    type: "website",
    locale: "en_US",
    url: "https://ahtshamadil.me",
    siteName: "Ahtsham Adil Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahtsham Adil | Full Stack Web Developer",
    description:
      "Software engineer with production MERN deployments on AWS and a CI-based autograder serving 150+ students.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
