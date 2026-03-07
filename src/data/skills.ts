import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiChartdotjs,
  SiFramer,
  SiVite,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMongodb,
  SiSwagger,
  SiAmazonwebservices,
  SiVercel,
  SiRender,
  SiDocker,
  SiNginx,
  SiLinux,
  SiGit,
  SiPostman,
  SiCloudinary,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Chart.js", icon: SiChartdotjs },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Vite", icon: SiVite },
      { name: "HTML/CSS", icon: SiHtml5 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "REST APIs", icon: SiSwagger },
      { name: "JWT Auth", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2)", icon: SiAmazonwebservices },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "Docker", icon: SiDocker },
      { name: "Nginx", icon: SiNginx },
      { name: "Linux", icon: SiLinux },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Postman", icon: SiPostman },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "MongoDB Atlas", icon: SiMongodb },
      { name: "VS Code", icon: VscCode },
    ],
  },
];
