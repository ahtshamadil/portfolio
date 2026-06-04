import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa6";
import { IconType } from "react-icons";

export interface Social {
  name: string;
  url: string;
  icon: IconType;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/ahtshamadil",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ahtsham-adil",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "mailto:ahtshamadil302@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "Phone",
    url: "tel:+923106986191",
    icon: FaPhone,
  },
];

export const personalInfo = {
  name: "Ahtsham Adil",
  title: "Full Stack Web Developer",
  email: "ahtshamadil302@gmail.com",
  phone: "+92 310 6986191",
  location: "Lahore, Pakistan",
  bio: "Software engineer with production MERN deployments on AWS and a CI-based autograding system serving 150+ students. Strong in React, Node.js, MongoDB, REST APIs, and GitHub Actions automation.",
  university: "University of Management and Technology",
  degree: "Bachelor of Science in Computer Science",
  graduationDate: "Expected July 2026",
  certification: {
    title: "The Web Developer Bootcamp 2025",
    issuer: "Colt Steele, Udemy",
    url: "https://www.udemy.com/certificate/UC-1b0b105a-4b42-40a2-a86b-2109750f8d13/",
  },
};
