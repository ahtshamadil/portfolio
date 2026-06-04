export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  achievements: string[];
  org?: { label: string; url: string };
}

export const experience: ExperienceEntry[] = [
  {
    id: "umt-ta",
    company: "University of Management and Technology",
    role: "Teaching Assistant — Web Technologies, Data Science, Artificial Intelligence",
    dates: "March 2026 — Present",
    location: "Lahore, Pakistan",
    achievements: [
      "Built and deployed an automated grading system for 3 courses (Web Tech, Data Science, AI) serving 150+ students, replacing manual grading with instant feedback on every submission.",
      "Designed a secure CI/CD testing pipeline on GitHub Classroom and GitHub Actions that runs hidden tests against student code and posts results to the course dashboard automatically.",
      "Wrote automation scripts updating workflows across hundreds of repositories and engineered a partial-credit scoring system for fair, granular feedback.",
      "Designed assignments and test suites from scratch for all 3 courses; ran lab sessions and office hours to mentor students on Git, debugging, and software engineering best practices.",
    ],
    org: { label: "github.com/sst-cs", url: "https://github.com/sst-cs" },
  },
];
