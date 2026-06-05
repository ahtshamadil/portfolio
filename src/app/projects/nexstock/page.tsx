import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiShield, FiBarChart2, FiLayers } from "react-icons/fi";

export const metadata: Metadata = {
  title: "NexStock — Case Study | Ahtsham Adil",
  description:
    "Production MERN inventory platform with RBAC (3 roles), server-side pagination, debounced search, and 4 Chart.js analytics dashboards. Vercel + Render split deployment.",
  alternates: { canonical: "https://ahtshamadil.me/projects/nexstock" },
};

const TECH = [
  "React 19",
  "Express 5",
  "MongoDB",
  "Mongoose",
  "Chart.js",
  "Framer Motion",
  "Cloudinary",
  "Vercel",
  "Render",
  "MongoDB Atlas",
];

const HIGHLIGHTS = [
  {
    icon: FiShield,
    title: "Role-based access control (RBAC)",
    body:
      "Three roles (Admin, Store Manager, Employee) with granular permissions enforced twice — frontend route guards for UX, backend middleware for security. The middleware layer is the source of truth; the frontend guards just keep the UI honest.",
  },
  {
    icon: FiBarChart2,
    title: "Analytics dashboards",
    body:
      "Four Chart.js visualisations: real-time stock levels, category distribution, transaction trends, and total inventory value. Each chart is backed by a dedicated aggregation pipeline rather than client-side number-crunching.",
  },
  {
    icon: FiLayers,
    title: "Split Vercel + Render deployment",
    body:
      "Frontend on Vercel for fast edge delivery; API on Render for a long-running Node process and Mongo connection pooling. Cross-domain auth solved with JWT in httpOnly cookies, strict CORS whitelist, and a SameSite=None policy.",
  },
];

export default function NexStockCaseStudy() {
  return (
    <main id="main" className="min-h-screen bg-background pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground mb-8 group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to projects
        </Link>

        <header className="mb-12">
          <span className="inline-block px-3 py-1 text-xs font-mono text-accent-light bg-accent/10 border border-accent/20 rounded-full mb-4">
            2025 — 2026 · Solo build
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            <span className="gradient-text">NexStock</span>
          </h1>
          <p className="text-lg text-muted">
            A production-ready MERN inventory & stock management platform with
            RBAC, server-side pagination, and a glassmorphic analytics dashboard.
          </p>

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

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://inventory-stock-management-system-lac.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
            >
              <FiExternalLink className="w-4 h-4" />
              Live demo
            </a>
            <a
              href="https://github.com/ahtshamadil/Inventory-Stock-Management-System"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border hover:border-accent/40 text-foreground rounded-lg transition-colors"
            >
              GitHub
            </a>
          </div>
        </header>

        {/* The problem */}
        <section className="prose-section mb-10">
          <h2 className="section-title">The problem</h2>
          <p className="text-muted leading-relaxed">
            Off-the-shelf inventory systems are either enterprise-priced or
            stripped to the point of uselessness for small-to-mid retail.
            Owners want role separation (the cashier shouldn&apos;t see margins),
            real metrics they can act on, and a UI that doesn&apos;t require training.
            I built NexStock to hit all three without an enterprise budget.
          </p>
        </section>

        {/* The solution */}
        <section className="prose-section mb-10">
          <h2 className="section-title">The solution</h2>
          <p className="text-muted leading-relaxed mb-4">
            A full-stack web app with a glassmorphic React 19 frontend and an
            Express 5 + MongoDB backend. Three user roles cover the org chart;
            server-side pagination &amp; debounced search keep large catalogues
            usable; and four dedicated Chart.js dashboards turn raw transactions
            into decisions.
          </p>
          <p className="text-muted leading-relaxed">
            Security defaults are non-negotiable: JWT in httpOnly cookies,
            Helmet security headers, bcrypt password hashing, strict CORS,
            and global rate limiting (300 req/15 min).
          </p>
        </section>

        {/* Architecture */}
        <section className="prose-section mb-10">
          <h2 className="section-title">Architecture at a glance</h2>
          <pre className="text-xs sm:text-sm bg-surface rounded-xl p-4 sm:p-6 border border-border overflow-x-auto text-muted leading-relaxed">{`Browser
   │  HTTPS, JWT in httpOnly cookie
   ▼
Vercel (React 19 + Vite frontend)
   │  fetch → CORS whitelist → Render API
   ▼
Render (Express 5 API)
   │  Mongoose models · express-validator · centralised error middleware
   │
   ├── Auth middleware → role-based route guards
   ├── Cloudinary SDK   → product image uploads
   └── MongoDB Atlas    → aggregation pipelines for dashboards`}</pre>
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
                <strong className="text-foreground">Cross-domain auth needs both ends in sync.</strong>{" "}
                Vercel + Render is great, but the SameSite=None cookie + CORS
                whitelist + strict origin checks had to be tested end-to-end —
                local dev hid every bug.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>
                <strong className="text-foreground">Aggregation pipelines beat client-side math.</strong>{" "}
                Pushing dashboard maths to Mongo cut the &quot;dashboard&quot; route from
                hundreds of kB of JSON to a single rolled-up document.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>
                <strong className="text-foreground">RBAC enforced twice ≠ duplicated logic.</strong>{" "}
                Frontend guards prevent UI confusion (no broken-link clicks);
                backend middleware is the actual security boundary. Both, never
                one.
              </span>
            </li>
          </ul>
        </section>

        <footer className="border-t border-border pt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-sm text-muted">
            <span className="text-foreground">Status:</span> Live &amp; open-source
          </p>
          <Link
            href="/projects/farmkonnect"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border hover:border-accent/40 text-foreground rounded-lg transition-colors group"
          >
            Previous case study: FarmKonnect
            <FiExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </footer>
      </article>
    </main>
  );
}
