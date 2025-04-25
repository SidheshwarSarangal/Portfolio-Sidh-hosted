import React from "react";
//import bannerImg from "../../assets/acm.png";
const ProjectCard = ({ title, main1, main2, bannerImg, source }) => {
    return (
        <div className="relative p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] bg-gradient-to-bl from-black to-transparent shadow-xl shadow-slate-900 rounded-2xl hover:scale-102 transition duration-200">
            <img className="p-4 my-4 bg-white rounded-4xl" src={bannerImg} alt="" />
            <h3 className="px-4 text-xl md:text-2xl font-extrabold leading-normal">
                {title}
            </h3>
            <p className="px-4 text-md md:text-md leading-tight py-2">{main1}</p>
            <p className="px-4 text-xl md:text-md font-bold leading-tight py-2">{main2}</p>
            <div className="mt-10 pb-12 p-2 flex gap-2 md:gap-4">
              {/*  <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                    Demo
                </button>
                */}
                <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" absolute botton-8 mb-6 bottom-4 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-center"
                >
                    Source Code
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;