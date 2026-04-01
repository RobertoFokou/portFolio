import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import SidebarItem from "../Components/SidebarItem";
import img from "../images/person.jpg";

const Header = ({ openMenu, setOpenMenu }) => {
  // const [openMenu, setOpenMenu] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Live-updating date every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Toggle sidebar menu open/close
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header Top Bar */}
      <div
        className={`w-full fixed top-0 z-[999] px-6 py-4 flex justify-between items-center 
              transition-all duration-300 backdrop-blur-md ${
                scrolled
                  ? "bg-white/70 dark:bg-[#0f172a]/70 shadow-md"
                  : "bg-transparent"
              }`}
      >
        {/* User profile info */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 aspect-square">
            <img
              src={img}
              className="w-full object-cover rounded"
              alt="Profile"
            />
          </div>
          <div className="flex flex-col gap-1 items-start">
            <h3 className="text-black dark:text-white">Roberto Fokou</h3>
            <span className="text-gray-light -mt-2 dark:text-gray-dark">
              Dev Full Stack
            </span>
          </div>
        </div>

        {/* Hamburger menu button */}
        <button
          onClick={toggleMenu}
          className="text-gray-light dark:text-gray-dark cursor-pointer text-2xl"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Overlay backdrop when sidebar is open */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black z-[9999] bg-opacity-25 transition-opacity duration-300"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 z-[99999]  w-72 h-screen transition-transform duration-300 transform ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        } bg-white dark:bg-gradient-dark dark:border-r shadow-common-shadow dark:border-border-dark`}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Sidebar Header with close button */}
          <div className="w-full mt-3 px-3 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3.5">
              <div className="w-12 aspect-square">
                <img
                  src={img}
                  className="w-full object-cover rounded"
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col gap-1.5 items-start">
                <h3 className="text-black dark:text-white">Roberto Fokou</h3>
                <span className="text-gray-600 -mt-2 dark:text-gray-400">
                  Dev Full Stack
                </span>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={toggleMenu}
              className="relative group text-white dark:text-gray-dark cursor-pointer text-lg transition-all duration-300 p-2 rounded-full bg-blue-700 dark:bg-white/10 shadow-md hover:bg-blue-700 dark:hover:bg-white/20 backdrop-blur-md"
            >
              <RiCloseLargeFill className="transition-all duration-300 group-hover:scale-110 group-active:rotate-90" />
            </button>
          </div>

          {/* Sidebar Items/Menu */}
          <SidebarItem closeSidebar={toggleMenu} />

          <div className="mt-auto p-4 dark:bg-bg-dark border-t border-dashed border-border-light dark:border-border-dark text-gray-500 dark:text-gray-400">
            <div className="shadow-button-light border bg-blue-700/15 border-blue-700/50 dark:bg-bg-dark dark:border-border-dark dark:shadow-button-dark rounded-lg p-[22px_20px_20px] border-border-light">
              <span className="block text-gray-light dark:text-gray-dark">
                {currentDate.toLocaleString("en-IN", {
                  month: "numeric",
                  year: "numeric",
                  day: "numeric",
                })}
              </span>
              <span className="block text-gray-light font-bold dark:text-gray-dark mt-1">
                Yaounde, Cameroun
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

export default Header;
