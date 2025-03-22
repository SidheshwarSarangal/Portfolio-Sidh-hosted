import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiCplusplus } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import mentor from "../../assets/unified-mentor.webp";
import acm from "../../assets/acm.png";
import iitr from "../../assets/iitr.jpeg";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 cursor-default bg-gradient-to-tr from-zinc-900 to-purple-900 mt-32 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap ml-20 sm:w-full md:w-3/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-white flex items-center rounded-2xl hover:scale-110 transition duration-300">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-white flex items-center rounded-2xl hover:scale-110 transition duration-300">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 transition duration-300">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 transition duration-300">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-white flex items-center rounded-2xl hover:scale-110 transition duration-300">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 transition duration-300">
            <SiExpress color="#ffffff" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-110 transition duration-300">
            <SiNextdotjs color="#ffffff" size={50} />
          </span>
          <span className="p-3 bg-white flex items-center rounded-2xl hover:scale-110 transition duration-300">
            <SiCplusplus color="#00599C" size={50} />
          </span>
        </div>

        <div>
          <div className="flex flex-wrap gap-10  bg-white bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-102 transition duration-200">
            <img
              src={acm} // Adjust path if needed
              alt="ACM"
              className="w-16 ml-2 h-16 -mr-5 object-contain mx-auto justify-center align-middle"
            />
            <span className="text-black sm:text-2xl">
              <h2 className="leading-tight">ACM, IIT Roorkee</h2>
              <p className="text-sm leading-tight font-thin">
                September 2024 - November 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Developed a complete 100% working socila media website</li>
                <li>- Used JWT token for signin, cloudinary for image/video
                  <li>- Created simple javascript code for refreshing
                    chat to get real time live experience.</li>
                </li>
                <li>- Used MongoDB, Javascript, React and Express</li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1fQHmYI_pEkLQ7-bsPQlJXyolkSrzSmmL/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:font-bold"
                  >
                    - Working Video
                  </a>
                </li>
              </ul>
            </span>
          </div>
          <div className="flex flex-wrap gap-10  bg-white bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-102 transition duration-200">
            <img
              src={iitr} // Adjust path if needed
              alt="Google Logo"
              className="w-16 ml-2 h-16 -mr-5 object-contain"
            />
            <span className="text-black sm:text-2xl">
              <h2 className="leading-tight">IIC, IIT Roorkee</h2>
              <p className="text-sm leading-tight font-thin">
                July 2024- present
              </p>
              <ul className="text-sm p-2">
                <li>- An active member of Institute Innovation Council</li>
                <li>- Engaging in web development processes</li>
              </ul>
            </span>
          </div>
          <div className="flex flex-wrap gap-10  bg-white bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-102 transition duration-200">
            <img
              src={mentor} // Adjust path if needed
              alt="Google Logo"
              className="w-16 ml-2 h-16 -mr-5 object-contain"
            />
            <span className="text-black sm:text-2xl">
              <h2 className="leading-tight">Unified Mentor</h2>
              <p className="text-sm leading-tight font-thin">
                December 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Developed a Weather App and a Shopping mall App</li>
                <li>- Learned how to work on multiple projects at same time</li>
              </ul>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;