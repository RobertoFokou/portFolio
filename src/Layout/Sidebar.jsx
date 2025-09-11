import React, { useEffect, useState } from "react";
// import { HiMenuAlt2 } from "react-icons/hi";
// import { useTheme } from "../Context/ThemeContext";
import { FiDownload } from "react-icons/fi";
import SidebarItem from "../Components/SidebarItem";
import img from "../images/person.jpg";

const Sidebar = () => {
  // const { theme } = useTheme();
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update the current date every second (used for display)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Sidebar container with slide-in animation for small screens */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen border-r-[1px] border-border-light transition-transform transform 
           lg:translate-x-0 -translate-x-full bg-white dark:bg-gradient-dark dark:border-r shadow-common-shadow dark:border-border-dark`}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Profile section */}
          <div className="w-full mt-3 px-5 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3.5">
              <div className="w-12 aspect-square">
                <img
                  src={img}
                  className="w-full object-cover rounded"
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col gap-1.5 items-start">
                <h3 className="text-black text-lg font-bold dark:text-white">
                  Anrew Lebedev
                </h3>
                <span className="text-gray-600 dark:text-gray-400 -mt-2">
                  Web Designer
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar menu items */}
          <SidebarItem />

          {/* Bottom info section with date/location and CV download */}
          <div className="mt-auto p-4 dark:bg-bg-dark border-t border-dashed border-blue-700 dark:border-border-dark text-gray-500 dark:text-gray-400">
            <div className="shadow-button-light text-center border bg-blue-600/15 border-blue-700/50 dark:bg-bg-dark dark:border-border-dark dark:shadow-button-dark rounded-lg p-[22px_20px_20px] border-border-light">
              <span className="block text-gray-light dark:text-gray-dark">
                {currentDate.toLocaleString("en-IN", {
                  month: "numeric",
                  year: "numeric",
                  day: "numeric",
                })}
              </span>
              <span className="block text-gray-light font-bold dark:text-gray-dark mt-1">
                Surat , Gujarat
              </span>
            </div>
            <div className="mt-3 cursor-pointer flex items-center justify-center gap-4 py-3 shadow-button-light border bg-blue-700/15 border-blue-700/50 dark:bg-bg-dark dark:border-border-dark dark:shadow-button-dark rounded-lg border-border-light">
              <span className="block text-gray-light dark:text-gray-dark font-semiboldbold">
                <FiDownload />
              </span>
              <span className="block text-gray-light dark:text-gray-dark font-semibold">
                Download CV
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
