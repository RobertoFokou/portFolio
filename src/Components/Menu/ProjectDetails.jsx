import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/data";
import { RiArrowLeftLine } from "react-icons/ri";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  // Get the dynamic project ID from the route
  const { id } = useParams();

  // Find the matching project from data
  const project = projects.find((p) => p.id === id);

  // If no matching project found, show fallback
  if (!project) {
    return <div className="p-10 text-white text-center">Project not found</div>;
  }

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="border-b-border-light dark:border-b-border-dark border-b-[1px] border-dashed"
    >
      {/* Page content container with border styling */}
      <div className="max-w-3xl md:border-r-[1px] md:border-dashed p-4 md:p-[30px_48px_40px] h-min md:border-r-border-light md:dark:border-r-border-dark md:border-l-[1px] md:border-l-border-light md:dark:border-l-border-dark mx-auto">

        {/* Back link to Project list */}
        <Link to="/project" className="flex items-center gap-2 text-slate-600 dark:text-gray-dark text-sm sm:text-base">
          <RiArrowLeftLine className="text-xl" />
          <span className="text-slate-600 dark:text-gray-dark text-sm sm:text-base">Back</span>
        </Link>

        {/* Project title and company/year */}
        <div className="mt-6">
          <h1 className="text-black mt-4 mb-3 dark:text-white text-xl sm:text-3xl md:text-4xl font-bold max-w-md leading-tight">
            {project.title}
          </h1>
          <p className="text-slate-600 dark:text-gray-dark max-w-md text-sm sm:text-base">
            {project.company} • {project.year}
          </p>
        </div>

        {/* Animated image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6"
        >
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg w-full object-cover max-h-[400px] shadow-lg"
          />
        </motion.div>

        {/* Project Overview section */}
        <div className="mt-10">
          <h2 className="text-black mt-4 mb-3 dark:text-white text-xl sm:text-3xl md:text-3xl font-bold max-w-md leading-tight">
            Overview
          </h2>
          <p className="text-slate-600 dark:text-gray-dark text-sm sm:text-base">
            {project.description || "TaskFlow is a SaaS platform designed to simplify project management for remote teams. The goal was to create a clean, intuitive interface that allows users to manage tasks, set deadlines, and communicate with teams seamlessly."}
          </p>
        </div>

        {/* Project Results section */}
        <div className="mt-8">
          <h2 className="text-black mt-4 mb-3 dark:text-white text-xl sm:text-3xl md:text-3xl font-bold max-w-md leading-tight">
            Results
          </h2>
          <p className="text-slate-600 dark:text-gray-dark text-sm sm:text-base">
            {project.results || "The final design led to a 40% increase in user engagement, with clients praising the platform’s ease of use and modern look."}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
