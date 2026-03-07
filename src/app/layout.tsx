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
  metadataBase: new URL("https://ahtshamadil.dev"),
  title: "Ahtsham Adil | Full Stack Web Developer",
  description:
    "Full-Stack Developer with hands-on experience building and deploying production MERN stack applications. Proficient in API design, authentication systems, real-time communication, and modern React UI development.",
  keywords: [
    "Ahtsham Adil",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Ahtsham Adil" }],
  openGraph: {
    title: "Ahtsham Adil | Full Stack Web Developer",
    description:
      "Full-Stack Developer building production MERN stack applications with real-time features, clean APIs, and modern UIs.",
    type: "website",
    locale: "en_US",
    url: "https://ahtshamadil.dev",
    siteName: "Ahtsham Adil Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahtsham Adil | Full Stack Web Developer",
    description:
      "Full-Stack Developer building production MERN stack applications.",
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
