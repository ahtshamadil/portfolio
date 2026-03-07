export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string; // placeholder path — replace with real screenshots/videos later
  year: string;
}

export const projects: Project[] = [
  {
    id: "farmkonnect",
    title: "FarmKonnect",
    subtitle: "Full-Stack Agricultural Marketplace",
    description:
      "Led a 4-person team to build a full-stack agricultural marketplace serving 50+ cities with real-time chat and price intelligence.",
    highlights: [
      "Real-time messaging & notifications using Socket.io with JWT auth, supporting price negotiation workflows between buyers and sellers",
      "Python web scraper collecting daily commodity prices from 50+ cities with cron scheduling, email alerts & WebSocket-based live price updates",
      "RESTful API with 20+ endpoints for user management, product listings, order processing, and chat — documented and tested via Postman",
      "MongoDB data modeling with Mongoose: indexed queries, aggregation pipelines for analytics, and optimistic concurrency for inventory updates",
      "Cloudinary integration for product image uploads with on-the-fly resizing, watermarking, and CDN delivery",
      "Deployed on AWS EC2 using Docker Compose, Nginx reverse proxy, and Let's Encrypt SSL with auto-renewal for zero-downtime updates",
    ],
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Docker",
      "AWS EC2",
      "Python",
      "Nginx",
    ],
    liveUrl: "https://farmkonnect.app",
    githubUrl: "https://github.com/abduljamil/FarmKonnect",
    image: "/projects/farmkonnect.png",
    year: "2025 — 2026",
  },
  {
    id: "nexstock",
    title: "NexStock",
    subtitle: "Inventory & Stock Management System",
    description:
      "Built a full-stack inventory platform managing 24+ SKUs across 8 categories with a glassmorphic dark UI and Framer Motion animations.",
    highlights: [
      "RBAC with 3 roles (Admin, Store Manager, Employee) enforcing granular permissions on frontend route guards & backend middleware",
      "Analytics dashboard with 4 Chart.js visualizations: real-time stock levels, category distribution, transaction trends & total inventory value",
      "Full CRUD for products, categories, and stock transactions with server-side validation, pagination, sorting & search filters",
      "Cloudinary-powered product image management with bulk upload, preview, and automatic thumbnail generation",
      "Glassmorphic dark UI built with Tailwind CSS and Framer Motion — smooth page transitions, skeleton loaders & toast notifications",
      "Secured with JWT httpOnly cookies, Helmet headers, bcrypt hashing, CORS whitelisting, and rate limiting (300 req/15min)",
    ],
    techStack: [
      "React 19",
      "Express 5",
      "MongoDB",
      "Chart.js",
      "Framer Motion",
      "Cloudinary",
      "Vercel",
      "Render",
    ],
    liveUrl: "https://nexstock-pro.vercel.app",
    githubUrl:
      "https://github.com/ahtshamadil/Inventory-Stock-Management-System",
    image: "/projects/nexstock.png",
    year: "2025 — 2026",
  },
];
