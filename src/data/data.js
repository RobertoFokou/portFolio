// Image imports for use in the data below
import Mejestic from "../images/mejestic.jpg";
import Taskflow from "../images/taskflow.jpg";
import Apex from "../images/apex.jpg";
import Corporation from "../images/corporation.jpg";
import Profile from "../images/profile.jpg";

// List of project objects, each with details for rendering in the portfolio
export const projects = [
  {
    id: "alaxione",
    title: "Alaxione",
    company: "Alaxione solution e-sante",
    year: "Depuis janvier 2024",
    role: "Developpeur Frontend (React & Angular)",
    image: Mejestic,
    description:
      "Plateforme e-sante destinee aux professionnels de la sante. Integration des maquettes UI en React et Angular, connexion aux API backend, et amelioration de la lisibilite et de la maintenabilite du code. Travail en collaboration avec le designer et les chefs de projet.",
    results:
      "Amelioration significative de la qualite du code et de l'experience utilisateur sur la plateforme e-sante, avec une meilleure maintenabilite et des interfaces plus performantes.",
  },
  {
    id: "gateway",
    title: "Gateway",
    company: "Gateway Force",
    year: "Juillet 2023 - Decembre 2024",
    role: "Developpeur Full Stack",
    image: Taskflow,
    description:
      "Conception et developpement d'interfaces utilisateur, integration de maquettes graphiques et optimisation du referencement naturel (SEO) pour ameliorer la visibilite en ligne.",
    results:
      "Livraison d'interfaces modernes et responsive avec un referencement optimise, contribuant a une meilleure presence digitale de l'entreprise.",
  },
  {
    id: "djib-service",
    title: "Djib Service",
    company: "Djib Service",
    year: "Novembre 2024 - Janvier 2025",
    role: "Developpeur Full Stack (React, Node.js)",
    image: Apex,
    link: "https://djib-service.com/",
    description:
      "Conception et developpement complet du site web (UI, API, logique metier). Realisation d'un module d'administration pour la generation automatisee de factures et implementation d'un micro-service backend dedie a l'envoi d'emails transactionnels.",
    results:
      "Site web fonctionnel et deploye avec un systeme de facturation automatise et un service d'emails transactionnels fiable, ameliorant l'efficacite operationnelle du client.",
  },
  {
    id: "findinvestment",
    title: "FindInvestment",
    company: "Association WIM",
    year: "Depuis decembre 2025",
    role: "Developpeur Full Stack (MERN) & Chef de projet",
    image: Corporation,
    link: "https://findinvestment.org",
    description:
      "Developpement front-end et back-end avec la stack MERN. Conception d'API et gestion de base de donnees. Organisation et suivi du projet via Trello, coordination technique et planification des taches.",
    results:
      "Plateforme operationnelle permettant la mise en relation d'investisseurs, avec une architecture MERN solide et une gestion de projet structuree.",
  },
  {
    id: "ecobank",
    title: "API Backend EcoBank",
    company: "Particulier - Societe EcoBank",
    year: "Janvier 2025 - Fevrier 2026",
    role: "Developpeur Backend (Node.js)",
    image: Mejestic,
    description:
      "Developpement d'API backend avec Node.js et Express. Gestion de bases de donnees MongoDB avec un focus sur la securite, la performance et l'integration API.",
    results:
      "API backend robuste et securisee, avec une gestion optimisee des donnees et des performances ameliorees pour les operations bancaires.",
  },
];

// List of services provided (without pricing)
export const services = [
  {
    title: "Developpement Full Stack",
    description:
      "Conception et developpement complet d'applications web avec React, Node.js, Express et MongoDB. De l'interface utilisateur a l'API backend.",
  },
  {
    title: "Integration Frontend",
    description:
      "Integration pixel-perfect de maquettes UI en React ou Angular, avec des interfaces responsive et performantes.",
  },
  {
    title: "Developpement Backend & API",
    description:
      "Creation d'API REST robustes avec Node.js/Express, gestion de bases de donnees MongoDB et SQL, securite et performance.",
  },
];

// Team or profile items with tooltip data
export const items = [
  { id: 1, name: "Alice", designation: "Designer", image: Profile },
  { id: 2, name: "Bob", designation: "Developer", image: Profile },
  { id: 3, name: "Charlie", designation: "Marketer", image: Profile },
];
