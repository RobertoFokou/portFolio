// Importing icons from react-icons for use in the expertise data
import {
  FaAndroid,
  FaApple,
  FaDatabase,
  FaGitAlt,
  FaJira,
  FaFigma,
  FaReact,
} from "react-icons/fa";
import { SiFlutter, SiDart, SiFirebase, SiGraphql } from "react-icons/si";

// Expertise categories with relevant tools, technologies, and icons
export const expertiseData = [
  {
    title: "Frameworks / Languages", // Category title
    skills: [
      { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> },
      { name: "Dart", icon: <SiDart className="text-blue-400" /> },
      { name: "React Native", icon: <FaReact className="text-cyan-500" /> },
      {
        name: "Android Native",
        icon: <FaAndroid className="text-green-500" />,
      },
      { name: "iOS Native", icon: <FaApple className="text-gray-500" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "Firebase Firestore",
        icon: <SiFirebase className="text-yellow-500" />,
      },
      { name: "SQLite", icon: <FaDatabase className="text-gray-500" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    ],
  },
  {
    title: "Version Control",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGitAlt className="text-gray-500" /> },
    ],
  },
  {
    title: "Project Management Tools",
    skills: [{ name: "Jira", icon: <FaJira className="text-blue-500" /> }],
  },
  {
    title: "UI/UX Designing Tools",
    skills: [
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { name: "Framer", icon: <FaFigma className="text-blue-500" /> }, // Consider using a different icon for Framer
    ],
  },
];
