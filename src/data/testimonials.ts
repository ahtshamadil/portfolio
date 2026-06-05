export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

/**
 * TODO — Replace these placeholders with real quotes.
 *
 * Best sources for testimonials:
 *   1. Your FYP supervisor — about FarmKonnect engineering or your team leadership
 *   2. A faculty member from a course you TA — about the autograder system
 *   3. A student you mentored — about your patience / teaching quality (1 quote max)
 *   4. A FarmKonnect teammate — about your contribution depth
 *
 * Aim for 2–4 real quotes. Specific praise about specific work ("Ahtsham built our
 * autograder from scratch and it now handles 150+ students reliably") lands much
 * harder than generic praise. Ask the person to be specific when you request a quote.
 *
 * Set `avatar` to a path under /public (e.g. "/avatars/supervisor.jpg") once you
 * have a photo; otherwise the card shows the author's initial.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "[PLACEHOLDER] Replace with a real ~2-sentence quote from your FYP supervisor about the FarmKonnect project — ideally something specific about your engineering judgment, ML work, or team contribution.",
    author: "[Name]",
    role: "FYP Supervisor, Department of Computer Science, UMT",
  },
  {
    quote:
      "[PLACEHOLDER] Replace with a real quote from a faculty member whose course you TA'd. Specific praise about the autograding system or the lab sessions you ran works best.",
    author: "[Name]",
    role: "Course Instructor, UMT",
  },
  {
    quote:
      "[PLACEHOLDER] Optional: a quote from a student you mentored, or a teammate from FarmKonnect. Keep it short and specific.",
    author: "[Name]",
    role: "Student / Teammate",
  },
];
