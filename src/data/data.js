// Image imports for use in the data below
import Mejestic from "../images/mejestic.jpg";
import Taskflow from "../images/taskflow.jpg";
import Apex from "../images/apex.jpg";
import Corporation from "../images/corporation.jpg";
import Profile from "../images/profile.jpg";

// List of project objects, each with details for rendering in the portfolio
export const projects = [
  {
    id: "majestic", // Unique identifier for routing or keys
    title: "Majestic Inc.", // Project name
    company: "Majestic SaaS", // Company/client name
    year: "2023-2024", // Time period of the project
    image: Mejestic, // Associated image
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    company: "1Forme",
    year: "2024",
    image: Taskflow,
  },
  {
    id: "apex",
    title: "Apex",
    company: "Apex UI",
    year: "2024",
    image: Apex,
  },
  {
    id: "nova",
    title: "Nova",
    company: "Nova Tech",
    year: "2025",
    image: Corporation,
  },
];

// List of services provided with pricing and description
export const services = [
  {
    title: "Web Design", // Service title
    description:
      "Elevate your digital presence with tailored website solutions.",
    price: "$5000", // Base price
    duration: " / per website", // Duration/billing basis
  },
  {
    title: "Graphic Design",
    description:
      "I can help you create striking visual identities that resonate and engage.",
    price: "$2890",
    duration: " / per month",
  },
];

// Team or profile items with tooltip data
export const items = [
  { id: 1, name: "Alice", designation: "Designer", image: Profile },
  { id: 2, name: "Bob", designation: "Developer", image: Profile },
  { id: 3, name: "Charlie", designation: "Marketer", image: Profile },
];
