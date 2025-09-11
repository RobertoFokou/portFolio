import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const PersonInfo = () => {
  return (
    <div className="border-b-[1px] border-border-light dark:border-border-dark">
      {/* Container with responsive border styling */}
      <div className="max-w-3xl md:border-r-[1px] md:border-dashed px-5 md:px-12 py-12 h-min md:border-r-border-light md:dark:border-r-border-dark md:border-l-[1px] md:border-l-border-light md:dark:border-l-border-dark mx-auto">
        <div className="flex items-center mt-11 justify-between">
          <h6 className="text-base md:text-xl font-bold text-blue-700 dark:text-gray-dark">Who I am</h6>
          <div className="flex items-center text-xl font-bold group gap-2 cursor-pointer">
            <h6 className="md:text-base text-sm text-blue-700 dark:text-gray-dark">What I offer</h6>
            <button className="group-hover:rotate-45 text-blue-700 md:text-base text-sm dark:text-gray-dark transition-all duration-150">
              <GoArrowUpRight />
            </button>
          </div>
        </div>

        <p className="pt-10 text-slate-700 text-sm sm:text-base font-light leading-relaxed  dark:text-white">
          I'm a passionate and results-driven web developer with a strong focus on crafting clean, modern, and user-friendly digital experiences. With a background in full-stack development and a keen eye for design, I specialize in building responsive websites and web applications that not only look great but also perform seamlessly.
        </p>

        <p className="pt-4 text-slate-700 text-sm sm:text-base font-light leading-relaxed  dark:text-white">
          I enjoy turning complex problems into simple, beautiful, and intuitive solutions. Whether it’s a business website, personal portfolio, or a custom web app, I bring creativity and precision to every line of code.
        </p>

        {/* Services Intro */}
        <p className="pt-4 text-slate-700 text-sm sm:text-base font-light leading-relaxed  dark:text-white">
          I offer end-to-end web development services—from concept and design to development and deployment. My services include:
        </p>

        {/* Services List */}
        <p className="pt-4 text-slate-700 text-sm sm:text-base font-light leading-relaxed  dark:text-white">
          • Custom Website Design & Development
          <br />
          • React.js Frontend Development
          <br />
          • Responsive & Mobile-First Design
          <br />
          • Website Speed Optimization
          <br />
          • SEO-friendly Code Implementation
          <br />• Maintenance & Support
        </p>

        <p className="pt-4 text-slate-700 text-sm sm:text-base font-light leading-relaxed  dark:text-white">
          Every project I take on is treated with attention to detail, creativity, and dedication to helping you stand out online.
        </p>
      </div>
    </div>
  );
};

export default PersonInfo;
