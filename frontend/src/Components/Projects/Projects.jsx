import React from "react";
import ProjectCard from "./ProjectCard";
import chrome from "../../assets/chrome-ext.png"
import iitr from "../../assets/iitr.jpeg";
import reactfirebase from "../../assets/reactfirebase.webp";
import next from "../../assets/next_TS.png";
import reactplusexpress from "../../assets/reactplusexpress.jpeg";
import AngularExpress from "../../assets/angularexpress.webp";
import ReatcNodejs from "../../assets/reactnodejs.jpeg";

const Projects = () => {
    return (
        <div id="Projects" className="p-10 md:p-24 text-white cursor-default w-full bg-[#1d2541] bg-gradient-to-tr from-black to-transparent">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
            <div className="py-12  md:px-8 flex flex-wrap gap-10">
                <ProjectCard
                    title="AI integrated Chrome Extendion"
                    bannerImg={chrome}
                    main1="Developed an extension the extract data from a web page and downloads a txt file containing precise information of that page."
                    main2="Groq AI Apis, Manifest 3 and Javascript"
                    source="https://github.com/SidheshwarSarangal/devfolio-repo-chrome-ext.git"
                />
                <ProjectCard
                    title="IITR Biotech Dpt. Project"
                    bannerImg={ReatcNodejs}
                    main1="Developed a library app for managing the department library, hanfling books borrow/return by the students and making the work easy for the librarian."
                    main2="React, Express and MongoDB"
                    source="https://github.com/SidheshwarSarangal/department-vikram-project.git"
                />
                <ProjectCard
                    title="AI-Powered Web Application"
                    bannerImg={AngularExpress}
                    main1="Developed a website with ai-powered translations and image analysis, integrated with CASHFREE payment Gateway."
                    main2="Angular, Express, cloudinary, Groq Apis and Cashfree Apis"
                    source="https://github.com/SidheshwarSarangal/cashfree-ai-new-final.git"
                />
                <ProjectCard
                    title="Minor Project: UI of food delivery App"
                    main1="A minor project implementing the user interface of a food delivery web application."
                    main2="Typescript and NextJs"
                    bannerImg={next}
                    source="https://github.com/SidheshwarSarangal/User-Interface-Food-Delivery-Web.git"
                />
                <ProjectCard
                    title="Digital E Gram Panchatyat"
                    main1="Developed a web app for village residents to put applications to gram member and get services."
                    main2="HTML, CSS, Javascript, React and Firebase"
                    bannerImg={reactfirebase}
                    source="https://github.com/SidheshwarSarangal/digital-e-gram-panchayat.git"
                />
            </div>
        </div>
    );
};

export default Projects;