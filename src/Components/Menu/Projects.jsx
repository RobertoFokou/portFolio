import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { projects } from "../../data/data";
import { Link } from "react-router-dom";

const Projects = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 }); // Raw cursor position
  const [isHovered, setIsHovered] = useState(false); // Hover state for custom cursor
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 }); // Smooth animated cursor position

  // Animate cursor movement smoothly based on mouse position
  useEffect(() => {
    let animationFrame;
    const updatePosition = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.1,
        y: prev.y + (cursorPos.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(updatePosition);
    };
    animationFrame = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrame);
  }, [cursorPos]);

  // Update raw cursor position on mouse move
  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="border-b-border-light dark:border-b-border-dark border-b-[1px]"
      >
        {/* Main container with border and padding */}
        <div className="max-w-3xl md:border-r-[1px] md:border-dashed p-4 md:p-[30px_48px_40px] h-min md:border-r-border-light md:dark:border-r-border-dark md:border-l-[1px] md:border-l-border-light md:dark:border-l-border-dark mx-auto">
          {/* Header section */}
          <h1 className="text-black mt-4 mb-3 dark:text-white text-xl sm:text-3xl md:text-4xl font-bold max-w-md leading-tight">
            Recent Projects
          </h1>
          <p className="text-slate-600 dark:text-gray-dark max-w-md text-sm sm:text-base">
            Dive into the portfolio of a design journey well-traveled.
          </p>

          {/* Custom cursor circle */}
          <div className="relative">
            {isHovered && (
              <motion.div
                className="fixed w-5 h-5 z-[9999999] shadow-button-light dark:shadow-button-dark bg-bg-light-gray/50 dark:bg-border-dark/85 backdrop-blur-lg rounded-full pointer-events-none"
                style={{
                  transform: `translate(${smoothPos.x - 20}px, ${
                    smoothPos.y - 20
                  }px)`,
                  position: "fixed",
                  top: 0,
                  left: 0,
                }}
              />
            )}

            {/* Project Cards */}
            <div className="flex flex-col gap-7 md:gap-16 my-7">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="max-w-2xl group overflow-hidden cursor-none bg-slate-100 border-border-light dark:bg-bg-dark border dark:border-border-dark rounded-lg shadow-md"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onMouseMove={handleMouseMove}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/project/${project.id}`}>
                    <div className="max-h-[350px] overflow-hidden">
                      <img
                        className="rounded-t-lg overflow-hidden h-full group-hover:scale-105 object-cover w-full transition-all duration-500"
                        src={project.image}
                        alt={project.title}
                      />
                    </div>
                    <div className="p-5 flex justify-between items-center">
                      <div>
                        <h5 className="mb-1 text-base md:text-xl font-bold tracking-tight text-black dark:text-white">
                          {project.title}
                        </h5>
                        <p className="text-slate-600 dark:text-gray-dark">
                          {project.company} • {project.year}
                        </p>
                      </div>
                      <button className="group-hover:rotate-45 text-base md:text-xl text-black dark:text-white transition-all duration-150">
                        <GoArrowUpRight />
                      </button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;
