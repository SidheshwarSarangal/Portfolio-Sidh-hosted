import React from "react";
import AboutImg from "../../assets/About-image.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex cursor-default overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl  text-white md:mx-auto font-bold">About</h2>
        <div className="md:flex flex-wrap gap-20 flex-col md:flex-row items-center">
          <img className="sm:h-80 sm:mx-auto md:h-80  md:mx-auto" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4 hover:scale-102 transition duration-200">
              <IoArrowForward size={30} className="mt-4" />

              <span className="w-96 hover:rounded-md transition-all  hover:bg-zinc-800 p-3">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Student@IITR
                </h1>
                <p className="text-sm md:text-md text-purple-300 leading-tight">
                  Persuing B.tech in Bioscience and Bioengineering from Indian Institute of Technology, Roorkee.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4 hover:scale-102 transition duration-200">
              <IoArrowForward size={30} className="mt-4" />

              <span className="w-96 hover:rounded-md transition-all  hover:bg-zinc-800 p-3">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Web Developer
                </h1>
                <p className="text-sm md:text-md leading-tight  text-purple-300">
                  Worked in various technologies like HTLM, CSS, Javascript, Vite, React, NextJs, ExpressJs, MongoDB and Firebase. 
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4 hover:scale-102 transition duration-200">
              <IoArrowForward size={30} className="mt-4" />

              <span className="w-96 hover:rounded-md transition-all  hover:bg-zinc-800 p-3">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Data Structures and Algorithms
                </h1>
                <p className="text-sm md:text-md leading-tight  text-purple-300">
                  Good knowledge of Data Structures and Algorithms.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4 hover:scale-102 transition duration-200">
              <IoArrowForward size={30} className="mt-4" />

              <span className="w-96 hover:rounded-md transition-all  hover:bg-zinc-800 p-3">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Passionate Techie
                </h1>
                <p className="text-sm md:text-md leading-tight  text-purple-300">
                  Willing to work in with new technologies and exploring more!!!!
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;