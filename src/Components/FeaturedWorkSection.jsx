import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "../data/data";
import { Link } from "react-router-dom";

const FeaturedWorkSection = () => {
  return (
    <div className="border-t-[1px] border-b-[1px] px-5 md:px-12 py-12 border-border-light dark:border-border-dark">
      {/* Header: Title and link to All Projects */}
      <div className="flex items-center justify-between">
        <h6 className="text-base md:text-xl font-bold text-blue-700 dark:text-gray-dark">
          Featured Work
        </h6>

        <Link to={"/project"}>
          <div className="flex items-center text-xl group gap-2 font-bold cursor-pointer">
            <h6 className="md:text-base text-sm text-blue-700 dark:text-gray-dark">
              All Projects
            </h6>

            <button className="group-hover:rotate-45 text-blue-700 md:text-base text-sm dark:text-gray-dark transition-all duration-150">
              <GoArrowUpRight />
            </button>
          </div>
        </Link>
      </div>

      {/* Swiper Carousel for featured projects */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }, // Tablets
          1024: { slidesPerView: 2 }, // Small desktops
          1440: { slidesPerView: 3 }, // Large desktops
        }}
        navigation
        pagination={{ clickable: true }}
        className="my-8"
      >
        {/* Dynamically render each project */}
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-2xl group overflow-hidden bg-slate-100 border-border-light dark:bg-bg-dark border dark:border-border-dark rounded-lg shadow-md">
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
                    <h5 className="mb-1 text-xl font-bold tracking-tight text-black dark:text-white">
                      {project.title}
                    </h5>
                    <p className="text-gray-light dark:text-gray-dark">
                      {project.company} • {project.year}
                    </p>
                  </div>

                  <button className="group-hover:rotate-45 text-xl text-black dark:text-white transition-all duration-150">
                    <GoArrowUpRight />
                  </button>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedWorkSection;
