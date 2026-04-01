import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const PersonInfo = () => {
  return (
    <div className="border-b-[1px] border-border-light dark:border-border-dark">
      {/* Container with responsive border styling */}
      <div className="max-w-3xl md:border-r-[1px] md:border-dashed px-5 md:px-12 py-12 h-min md:border-r-border-light md:dark:border-r-border-dark md:border-l-[1px] md:border-l-border-light md:dark:border-l-border-dark mx-auto">
        <div className="flex items-center mt-11 justify-between">
          <h6 className="text-base md:text-xl font-bold text-blue-700 dark:text-gray-dark">Qui suis-je</h6>
          <div className="flex items-center text-xl font-bold group gap-2 cursor-pointer">
            <h6 className="md:text-base text-sm text-blue-700 dark:text-gray-dark">Ce que je propose</h6>
            <button className="group-hover:rotate-45 text-blue-700 md:text-base text-sm dark:text-gray-dark transition-all duration-150">
              <GoArrowUpRight />
            </button>
          </div>
        </div>

        <p className="pt-10 text-slate-700 text-sm sm:text-base font-light leading-relaxed  dark:text-white">
          Developpeur Full Stack specialise en JavaScript (React, Angular, Node.js), avec 4 ans d'experience sur des projets web et e-sante. Habitue a travailler en equipe sur des applications orientees performance, accessibilite et qualite du code.
        </p>

        <p className="pt-4 text-slate-700 text-sm sm:text-base font-light leading-relaxed  dark:text-white">
          Motive a rejoindre un environnement technique structure afin d'y apporter mon experience et contribuer a la creation de solutions a forte valeur produit. J'aime transformer des idees complexes en solutions web intuitives et performantes.
        </p>

        {/* Services Intro */}
        <p className="pt-4 text-slate-700 text-sm sm:text-base font-light leading-relaxed  dark:text-white">
          Je propose des services complets de developpement web, de la conception a la mise en production :
        </p>

        {/* Services List */}
        <p className="pt-4 text-slate-700 text-sm sm:text-base font-light leading-relaxed  dark:text-white">
          • Developpement Frontend (React, Angular)
          <br />
          • Developpement Backend (Node.js, Express, MongoDB)
          <br />
          • Developpement Full Stack (MERN)
          <br />
          • Integration et connexion d'API REST
          <br />
          • Optimisation SEO et performance
          <br />• Gestion de projet et coordination technique
        </p>

        <p className="pt-4 text-slate-700 text-sm sm:text-base font-light leading-relaxed  dark:text-white">
          Chaque projet est traite avec rigueur, creativite et un engagement total pour livrer des solutions de qualite.
        </p>
      </div>
    </div>
  );
};

export default PersonInfo;
