// Importing icons from react-icons for use in the expertise data
import {
  FaDatabase,
  FaGitAlt,
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaTrello,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiOdoo,
} from "react-icons/si";

// Expertise categories with relevant tools, technologies, and icons
export const expertiseData = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-500" /> },
      { name: "Angular", icon: <FaAngular className="text-red-600" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600" />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-500" /> },
      { name: "API REST", icon: <FaNodeJs className="text-green-400" /> },
    ],
  },
  {
    title: "Bases de donnees",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-blue-400" /> },
    ],
  },
  {
    title: "Outils",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-500" /> },
      { name: "Trello", icon: <FaTrello className="text-blue-500" /> },
      { name: "Odoo", icon: <SiOdoo className="text-purple-600" /> },
    ],
  },
];
