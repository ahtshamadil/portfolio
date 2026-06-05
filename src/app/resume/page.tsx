import type { Metadata } from "next";
import Link from "next/link";
import { FiDownload, FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Resume | Ahtsham Adil",
  description:
    "Resume of Ahtsham Adil — Full-Stack Software Engineer (MERN). Production MERN deployments on AWS, CI-based autograding system serving 150+ students.",
  alternates: {
    canonical: "https://ahtshamadil.me/resume",
  },
};

const RESUME_PDF = "/Ahtsham_Adil_Resume.pdf";

export default function ResumePage() {
  return (
    <main id="main" className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-sm text-muted mt-1">
              Ahtsham Adil · Full-Stack Software Engineer
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted hover:text-foreground border border-border hover:border-accent/40 rounded-lg transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <a
              href={RESUME_PDF}
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent hover:bg-accent-light text-white rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              <FiDownload className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>

        {/* PDF embed — falls back to a download link if the browser
            (or mobile Safari) can't render PDFs inline. */}
        <object
          data={`${RESUME_PDF}#view=FitH`}
          type="application/pdf"
          className="w-full h-[80vh] rounded-xl border border-border bg-surface"
          aria-label="Ahtsham Adil resume PDF"
        >
          <div className="p-8 text-center">
            <p className="text-muted mb-4">
              Your browser can&apos;t display the PDF inline.
            </p>
            <a
              href={RESUME_PDF}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg"
            >
              <FiDownload className="w-4 h-4" />
              Download PDF instead
            </a>
          </div>
        </object>
      </div>
    </main>
  );
}
