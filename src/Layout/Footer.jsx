import React, { useEffect } from "react";
import CustomButton from "../Components/CustomButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { items } from "../data/data";
import AnimatedTooltip from "../Components/AnimatedTooltip";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Split quote into individual words for animation
  const text =
    "Design is not just what it looks like and feels like. Design is how it works.".split(
      " "
    );

  // useInView tracks if animated quote is visible in the viewport
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  // Log visibility changes (for debugging or analytics)
  useEffect(() => {
    console.log("InView:", inView);
  }, [inView]);

  // Animation variants for each word in the quote
  const textVariants = {
    hidden: { opacity: 0, filter: "blur(5px)" },
    visible: (index) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.4, delay: index * 0.1 },
    }),
  };

  return (
    <>
      {/* ================================
          Subscription Section
        ================================= */}
      <div className="border-b border-border-light dark:border-border-dark mb-6">
        <div className="max-w-3xl mx-auto flex flex-col justify-center items-center px-5 md:px-14 py-20 md:border-x md:border-dashed md:border-border-light md:dark:border-border-dark">
          <div className="max-w-sm text-center">
            <h4 className="font-bold text-base md:text-lg text-gray-800 dark:text-white">
              Don’t Miss a Beat
            </h4>
            <p className="mt-5 font-normal text-slate-600 text-sm sm:text-base dark:text-gray-dark">
              Subscribe now and be the first to know about new projects, design
              tips, and everything in between.
            </p>

            {/* Subscription Form */}
            <form className="w-full my-6 relative">
              <input
                placeholder="name@gmail.com"
                className="w-full py-3 md:py-4 pl-5 pr-20 md:pr-32 rounded border text-slate-600 dark:text-white dark:bg-gradient-dark border-slate-300 dark:border-border-dark focus:outline-none"
              />
              <div className="absolute top-[7px] right-0">
                <CustomButton text="Subscribe" />
              </div>
            </form>

            <AnimatedTooltip items={items} subscribersText="1K+ subscribers" />
          </div>
        </div>
      </div>

      {/* ================================
          Animated Quote Section
        ================================= */}
      <div
        ref={ref}
        className=" flex items-center justify-center text-center border my-10 md:my-16  rounded-2xl bg-blue-700/15 border-blue-700/50 dark:bg-bg-dark dark:border-button-bg-dark max-w-md  mx-10 sm:mx-auto  py-6 px-3 md:px-6"
      >
        <motion.p className="text-base md:text-lg font-medium flex flex-wrap justify-center text-gray-800 dark:text-white">
          {text.map((word, index) => (
            <motion.span
              key={index}
              className="mx-1"
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={textVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* ================================
          Copyright & Attribution
        ================================= */}
      <footer className=" border-t border-border-light dark:border-border-dark ">
        <div className="flex flex-col w-fit mx-auto md:flex-row items-center justify-center md:justify-between py-4 text-center">
          <p className="text-sm text-center md:text-base text-gray-800 dark:text-white">
            Copyright © {new Date().getFullYear()}{" "}
            <Link
              to="https://www.linkedin.com/in/roberto-fokou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold hover:underline dark:text-red-500"
            >
              Roberto Fokou
            </Link>{" "}
            Crafted with{" "}
            <FaHeart className="inline-block text-red-500 ml-1" />
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
