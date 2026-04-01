import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import img from "../images/person.jpg";

const Information = () => {
  const [time, setTime] = useState("");

  // Updates time every second using WAT (West Africa Time / Yaounde)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Douala" };
      const watTime = now.toLocaleTimeString("fr-FR", options);
      setTime(watTime);
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
        <img className="w-12 h-12 rounded-full border-2 border-blue-bg" src={img} alt="Roberto Fokou profile"/>
        <span className="text-slate-600 dark:text-gray-dark text-sm sm:text-base italic">Developpeur Full Stack MERN</span>
      </div>

      {/* Main Heading with Typewriter Effect */}
      <h1 className="text-black dark:text-white mt-6 text-2xl md:text-3xl font-extrabold max-w-sm md:leading-tight ">
        Salut, je suis{" "}
        <span className="bg-gradient-to-r from-blue-700 to-pink-500 bg-clip-text text-transparent font-bold ">
          <Typewriter
            words={["Roberto Fokou"]}
            loop={false}
            cursor={true}
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={150}
          />
        </span>
        <div>
          je transforme vos idees en{" "}
          <span className="opacity-70">solutions web performantes.</span>
        </div>
      </h1>

      <p className="text-slate-600 dark:text-gray-dark mt-4 max-w-md">
        Specialise en <strong>React</strong>, <strong>Angular</strong>,{" "}
        <strong>Node.js</strong> et <strong>MongoDB</strong>. 4 ans d'experience
        sur des projets web et e-sante.
      </p>

      {/* Contact Button + Clock */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
        <CustomButton text="Me contacter" />
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
        <p className="text-slate-600 dark:text-gray-dark text-sm uppercase font-semibold mb-3">Ils m'ont fait confiance</p>
        <div className="flex gap-6 items-center flex-wrap">
          <span className="text-slate-600 dark:text-gray-dark text-base">Alaxione</span>
          <span className="text-slate-600 dark:text-gray-dark text-base">Gateway</span>
          <span className="text-slate-600 dark:text-gray-dark text-base">Djib Service</span>
          <span className="text-slate-600 dark:text-gray-dark text-base">Association WIM</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Information;
