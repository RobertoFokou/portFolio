import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import img from "../images/person.jpg";

const Information = () => {
  const [time, setTime] = useState("");

  // Updates time every second using IST (India Standard Time)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { hour: "2-digit", minute: "2-digit" };
      const istTime = now.toLocaleTimeString("en-IN", options);
      setTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Main animated container using Framer Motion
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl lg:border-x border-dashed border-border-light dark:border-border-dark mx-auto px-6 md:px-12 py-12"
    >
      <div className="flex items-center gap-5">
        <img className="w-12 h-12 rounded-full border-2 border-blue-bg" src={img} alt="Andrew Lebedev profile"/>
        <span className="text-slate-600 dark:text-gray-dark text-sm sm:text-base italic">Crafting sleek, modern web experiences 🚀</span>
      </div>

      {/* Main Heading with Typewriter Effect */}
      <h1 className="text-black dark:text-white mt-6 text-2xl md:text-3xl font-extrabold max-w-sm md:leading-tight ">
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-blue-700 to-pink-500 bg-clip-text text-transparent font-bold ">
          <Typewriter
            words={["Andrew Lebedev"]}
            loop={false}
            cursor={true}
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={150}
          />
        </span>
        <div>
          turning tech ideas into{" "}
          <span className="opacity-70">digital experiences.</span>
        </div>
      </h1>

      <p className="text-slate-600 dark:text-gray-dark mt-4 max-w-md">
        I specialize in <strong>pixel-perfect</strong> design, modern{" "}
        <strong>UI/UX</strong>, and smooth user journeys. Let’s build something
        memorable.
      </p>

      {/* Contact Button + Clock */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
        <CustomButton text="Contact Me" />
        <motion.div
          className="dark:text-white md:px-5 py-2 px-3 md:py-2.5 md:text-base text-sm border bg-blue-700/15 border-blue-700/50 dark:bg-bg-dark dark:border-border-dark rounded-md tracking-widest shadow-lg text-blue-700"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
          }}
        >
          {time}
        </motion.div>
      </div>

      {/* Trusted By Section */}
      <div className="mt-16">
        <p className="text-slate-600 dark:text-gray-dark text-sm uppercase font-semibold mb-3">Trusted by the best</p>
        <div className="flex gap-6 items-center">
          <span className="text-slate-600 dark:text-gray-dark text-base">🚧 Apple</span>
          <span className="text-slate-600 dark:text-gray-dark text-base">🌟 Dribbble</span>
          <span className="text-slate-600 dark:text-gray-dark text-base">💼 Behance</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Information;
