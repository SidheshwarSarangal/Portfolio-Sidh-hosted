import React from "react";
import ProjectCard from "./ProjectCard";
import chrome from "../../assets/chrome-ext.png"
import iitr from "../../assets/iitr.jpeg";
import reactfirebase from "../../assets/reactfirebase.webp";
import next from "../../assets/next_TS.png";

const Projects = () => {
    return (
        <div id="Projects" className="p-1 md:p-24 text-white cursor-default bg-[#1d2541] bg-gradient-to-tr from-black to-transparent">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
            <div className="py-12 px-8 flex flex-wrap gap-10">
                <ProjectCard
                    title="AI integrated Chrome Extendion"
                    bannerImg={chrome}
                    main1="Developed an extension the extract data from a web page and downloads a txt file containing precise information of that page."
                    main2="Used Groq AI Apis, Manifest 3 and Javascript."
                    source="https://github.com/SidheshwarSarangal/Chrome-ext-webpage-data.git"
                />
                <ProjectCard
                    title="Digital E Gram Panchatyat"
                    main1="Developed a web app for village residents to put applications to gram member and get services."
                    main2="Used HTML, CSS, Javascript, React and Firebase."
                    bannerImg={reactfirebase}
                    source="https://github.com/SidheshwarSarangal/digital-e-gram-panchayat.git"
                />
                <ProjectCard
                    title="Minor Project: UI of food delivery App"
                    main1="A minor project implementing the user interface of a food delivery web application."
                    main2="Used Typescript and NextJs"
                    bannerImg={next}
                    source="https://github.com/SidheshwarSarangal/User-Interface-Food-Delivery-Web.git"
                />
            </div>
        </div>
    );
};

export default Projects;