import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiGnubash,
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
  SiPandas,
  SiNumpy,
  SiAmazonwebservices,
  SiVercel,
  SiRender,
  SiDocker,
  SiNginx,
  SiGithubactions,
  SiLinux,
  SiGit,
  SiPostman,
  SiPytest,
  SiCloudinary,
} from "react-icons/si";
import { VscCode, VscTerminalPowershell } from "react-icons/vsc";
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
      { name: "Bash", icon: SiGnubash },
      { name: "PowerShell", icon: VscTerminalPowershell },
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
    title: "Databases & Data",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2)", icon: SiAmazonwebservices },
      { name: "Docker", icon: SiDocker },
      { name: "Nginx", icon: SiNginx },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "Linux", icon: SiLinux },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Postman", icon: SiPostman },
      { name: "Pytest", icon: SiPytest },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "MongoDB Atlas", icon: SiMongodb },
      { name: "VS Code", icon: VscCode },
    ],
  },
];
