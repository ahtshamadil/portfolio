import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiUsers, FiServer, FiCpu } from "react-icons/fi";

export const metadata: Metadata = {
  title: "FarmKonnect — Case Study | Ahtsham Adil",
  description:
    "Full-stack agricultural marketplace with real-time chat, ML-based commodity price forecasting, and AWS EC2 deployment. Final Year Project, 4-person team, 140+ commits.",
  alternates: { canonical: "https://ahtshamadil.me/projects/farmkonnect" },
};

const TECH = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Socket.io",
  "Python",
  "LightGBM",
  "Docker",
  "Nginx",
  "AWS EC2",
];

const HIGHLIGHTS = [
  {
    icon: FiUsers,
    title: "Real-time messaging",
    body:
      "Socket.io-based chat with JWT auth, supporting price negotiation workflows between farmers and buyers. Designed message persistence and read-receipts on top of MongoDB change streams.",
  },
  {
    icon: FiServer,
    title: "Containerised AWS deployment",
    body:
      "Deployed on AWS EC2 via Docker Compose + Nginx reverse proxy + Let's Encrypt SSL with auto-renewal. Zero-downtime updates by rolling individual services behind the proxy.",
  },
  {
    icon: FiCpu,
    title: "ML price prediction service",
    body:
      "Python service ingests daily commodity prices from 50+ cities, trains LightGBM models with a router across (commodity × horizon) cells, and serves weekly forecasts. Rolling-MAPE drift monitoring writes alarms to a separate Mongo collection for retraining triggers.",
  },
];

export default function FarmKonnectCaseStudy() {
  return (
    <main id="main" className="min-h-screen bg-background pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground mb-8 group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to projects
        </Link>

        {/* Hero */}
        <header className="mb-12">
          <span className="inline-block px-3 py-1 text-xs font-mono text-accent-light bg-accent/10 border border-accent/20 rounded-full mb-4">
            2025 — 2026 · Final Year Project
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            <span className="gradient-text">FarmKonnect</span>
          </h1>
          <p className="text-lg text-muted">
            Full-stack agricultural marketplace with real-time chat, commodity
            price intelligence, and ML-based price forecasting — deployed on AWS EC2.
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {TECH.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono text-accent-light bg-accent/10 border border-accent/20 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* The problem */}
        <section className="prose-section mb-10">
          <h2 className="section-title">The problem</h2>
          <p className="text-muted leading-relaxed">
            Smallholder farmers in Pakistan trade commodities through informal
            intermediaries who set opaque prices and absorb most of the margin.
            Buyers, in turn, struggle to source reliably without travelling
            between mandis. The team set out to build a direct
            farmer-to-buyer marketplace with negotiation, payments, and
            transparent reference pricing — accessible to users with limited
            connectivity and modest hardware.
          </p>
        </section>

        {/* The solution */}
        <section className="prose-section mb-10">
          <h2 className="section-title">The solution</h2>
          <p className="text-muted leading-relaxed mb-4">
            FarmKonnect is a MERN-stack web and mobile platform with three core
            surfaces: a <strong className="text-foreground">marketplace</strong> for
            listing and discovering produce, a <strong className="text-foreground">real-time chat</strong>
            {" "}for price negotiation, and a{" "}
            <strong className="text-foreground">price-intelligence layer</strong> that
            shows historical and forecasted commodity prices so both sides
            negotiate from the same factual baseline.
          </p>
          <p className="text-muted leading-relaxed">
            The whole system runs on a single AWS EC2 instance via Docker
            Compose, behind an Nginx reverse proxy with Let&apos;s Encrypt SSL.
            Frontend, backend, scraper, and prediction service are independent
            containers that can be rolled forward individually.
          </p>
        </section>

        {/* Architecture */}
        <section className="prose-section mb-10">
          <h2 className="section-title">Architecture at a glance</h2>
          <pre className="text-xs sm:text-sm bg-surface rounded-xl p-4 sm:p-6 border border-border overflow-x-auto text-muted leading-relaxed">{`Client (React Web / Mobile)
        │  HTTPS · WSS
        ▼
   Nginx reverse proxy  ──── Let's Encrypt SSL
        │
        ├── Node/Express API ── MongoDB (Mongoose + DAL Repository Pattern)
        │        │
        │        └── Socket.io ── JWT-authed chat channels
        │
        ├── Python scraper ── daily prices for 50+ cities → MongoDB
        │
        └── Python prediction service ── LightGBM router
                 │
                 └── Rolling-MAPE drift monitor → alarms collection`}</pre>
        </section>

        {/* My contributions */}
        <section className="prose-section mb-10">
          <h2 className="section-title">My contributions</h2>
          <p className="text-muted leading-relaxed mb-4">
            I led the 4-person team and contributed{" "}
            <strong className="text-foreground">140+ commits across 5 merged PRs</strong>
            {" "}covering the fintech marketplace, infrastructure &amp; services,
            community / admin surfaces, the marketplace UI &amp; transaction
            flows, and the mobile app integration. I also owned the ML
            prediction service end-to-end and wrote the 2,000+ line system
            documentation that on-boards new contributors.
          </p>
        </section>

        {/* Highlights */}
        <section className="prose-section mb-10">
          <h2 className="section-title">Technical highlights</h2>
          <div className="grid sm:grid-cols-1 gap-4 mt-4">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className="glass rounded-xl p-5 flex gap-4"
              >
                <div className="p-2.5 bg-accent/10 rounded-lg shrink-0 self-start">
                  <h.icon className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {h.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{h.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons */}
        <section className="prose-section mb-10">
          <h2 className="section-title">Lessons learned</h2>
          <ul className="space-y-3 text-muted">
            <li className="flex gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>
                <strong className="text-foreground">Drift monitoring matters more than initial accuracy.</strong>{" "}
                We shipped LightGBM with respectable MAPE, but the monitoring
                pipeline is what kept it useful across seasons and policy regimes.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>
                <strong className="text-foreground">DAL repository pattern paid off.</strong>{" "}
                Centralising MongoDB access made auth checks, aggregation
                pipelines, and indexes consistent across endpoints — and made it
                trivial to swap test fixtures in.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>
                <strong className="text-foreground">Single-host Docker Compose was the right boring choice</strong>{" "}
                for an FYP-scale project. Kubernetes would have eaten weeks we
                didn&apos;t have.
              </span>
            </li>
          </ul>
        </section>

        {/* Footer / CTA */}
        <footer className="border-t border-border pt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-sm text-muted">
            <span className="text-foreground">Status:</span> Private team repo · code access on request
          </p>
          <Link
            href="/projects/nexstock"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border hover:border-accent/40 text-foreground rounded-lg transition-colors group"
          >
            Next case study: NexStock
            <FiExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </footer>
      </article>
    </main>
  );
}
