import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050508" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahtsham Adil",
  url: "https://ahtshamadil.me",
  image: "https://ahtshamadil.me/opengraph-image",
  sameAs: [
    "https://github.com/ahtshamadil",
    "https://www.linkedin.com/in/ahtsham-adil",
  ],
  jobTitle: "Full-Stack Software Engineer",
  worksFor: {
    "@type": "EducationalOrganization",
    name: "University of Management and Technology",
    url: "https://www.umt.edu.pk",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Management and Technology",
  },
  email: "mailto:ahtshamadil302@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "AWS",
    "GitHub Actions",
    "CI/CD",
    "TypeScript",
    "Docker",
    "Python",
    "Socket.io",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg"
          >
            Skip to content
          </a>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
