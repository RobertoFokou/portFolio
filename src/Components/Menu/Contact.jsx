import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import CustomButton from "../CustomButton";

const Contact = () => {
  return (
    // AnimatePresence handles mounting/unmounting animation for the entire section
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="border-b-border-light dark:border-b-border-dark border-b-[1px]"
      >
        {/* Container for the form */}
        <div className="max-w-3xl md:border-r-[1px] md:border-dashed p-4 md:p-[30px_48px_40px] h-min md:border-r-border-light md:dark:border-r-border-dark md:border-l-[1px] md:border-l-border-light md:dark:border-l-border-dark mx-auto">
          <h1 className="text-black mt-4 mb-3 dark:text-white text-xl sm:text-3xl md:text-4xl font-semibold max-w-md leading-tight">
            Get in Touch
          </h1>

          {/* Subheading */}
          <p className="text-slate-600 dark:text-gray-dark max-w-md text-sm sm:text-base">
            Let's connect and start something great, tailored just for you.
          </p>

          {/* Form Section */}
          <div className="my-7">
            <div className="max-w-2xl group overflow-hidden cursor-none border-border-light dark:bg-bg-dark border dark:border-border-dark rounded-lg shadow-md">
              <form className="w-full relative">
                <div className="grid px-5 p-4 grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-slate-600 dark:text-gray-dark text-sm sm:text-base">
                      Name
                    </label>
                    <input
                      placeholder="Votre nom"
                      className="py-3 px-5 mt-2 focus:outline-none w-full border rounded-md border-slate-300 dark:border-border-dark bg-slate-100 dark:bg-gradient-dark"
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 dark:text-gray-dark text-sm sm:text-base">
                      Company
                    </label>
                    <input
                      placeholder="Votre entreprise"
                      className="py-3 px-5 mt-2 focus:outline-none w-full border rounded-md border-slate-300 dark:border-border-dark bg-slate-100 dark:bg-gradient-dark"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-slate-600 dark:text-gray-dark text-sm sm:text-base">
                      Message
                    </label>
                    <textarea
                      placeholder="Ecrivez votre message ici..."
                      className="py-3 px-5 mt-2 focus:outline-none w-full border rounded-md border-slate-300 dark:border-border-dark bg-slate-100 dark:bg-gradient-dark"
                      rows={6}
                    />
                  </div>

                  <CustomButton className="md:col-span-2 mr-0" text="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
