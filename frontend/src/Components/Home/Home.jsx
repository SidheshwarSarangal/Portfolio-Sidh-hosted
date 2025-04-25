import React from "react";
import avatarImg from "../../assets/Home-image.png";
import TextChange from "../TextChange";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaUser } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

const Home = () => {
  return (
    <div className="text-white cursor-default  flex  mx-auto flex-col gap-7 md:flex-row justify-between items-center  p-10 md:p-20 xl:p-48 sm:flex-1/2">
      <div className="md:w-4/6 md:pt-10 w-">
        <h1 class="text-4xl md:text-6xl font-bold flex flex-row items-center leading-normal tracking-tighter animated-gradient">
          Hello I'm Sidheshwar
        </h1>


        <TextChange />
        <p className="text-xl md:text-2xl mt-2 tracking-tight ">
          Passionate developer skilled in HTML, CSS, JavaScript, React, NextJs, Angular, TailwindCSS, Express, MongoDB and Firebase.
        </p>


        <ul className="flex flex-wrap gap-6 mt-6 ">
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sidheshwar.sarangal@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300"
            >
              <MdOutlineEmail size={60} className="hover:scale-110 transition duration-300" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sidheshwar-sarangal-0b31482b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300"
            >
              <CiLinkedin size={60} className="hover:scale-110 transition duration-300" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/SidheshwarSarangal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300"
            >
              <FaGithub size={60} className="hover:scale-110 transition duration-300" />
            </a>
          </li>
        </ul>



      </div>
      <div className="w-6/8  md:w-3/8 mt-6 md:mt-0  ">
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;