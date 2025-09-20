import React from 'react';
import Image from "../assets/Image.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gray-100 dark:bg-gray-900 -colors"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        {/* Heading */}
        <div className="flex justify-center">
          <p className="text-4xl font-bold inline text-center mb-4 border-b-4 border-gray-500 dark:border-gray-400 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            About Me
          </p>
        </div>

        {/* Content */}
        <div className="max-w-screen-lg flex flex-col md:flex-row">
          {/* Image */}
          <div className="hidden lg:flex lg:w-1/2 lg:justify-center lg:items-center">
            <div className="rounded-full">
              <img
                src={Image}
                alt="My profile"
                className="mx-auto w-1/3 md:w-2/3 mb-4 p-1 bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-600 shadow-lg shadow-blue-400 dark:shadow-purple-500 rounded-full"
              />
            </div>
          </div>

          {/* Description */}
          <div className="lg:w-1/2 flex items-center">
            <p className="text-md italic text-gray-700 dark:text-gray-300 tracking-wide">
              <span className="text-black dark:text-white text-4xl">I</span>
              <span className="text-black dark:text-white font-bold">'m</span> a{" "}
              <span className="text-black dark:text-white font-semibold">CSE</span>{" "}
              graduate from IERT, a solid foundation in both{" "}
              <span className="text-black dark:text-white font-semibold">
                Frontend
              </span>{" "}
              and{" "}
              <span className="text-black dark:text-white font-semibold">
                Backend
              </span>{" "}
              development. Proficient in{" "}
              <span className="text-black dark:text-white font-semibold">C++</span>,{" "}
              <span className="text-black dark:text-white font-semibold">
                Javascript
              </span>
              ,{" "}
              <span className="text-black dark:text-white font-semibold">
                React js
              </span>
              ,{" "}
              <span className="text-black dark:text-white font-semibold">
                Node js
              </span>
              , and{" "}
              <span className="text-black dark:text-white font-semibold">
                Mongo DB
              </span>
              , I have developed multiple awesome{" "}
              <span className="text-black dark:text-white font-semibold">
                Projects
              </span>{" "}
              such as{" "}
              <span className="text-black dark:text-white font-semibold">
                Binkeyit
              </span>
              ,{" "}
              <span className="text-black dark:text-white font-semibold">
                SilverSpoons
              </span>
              ,{" "}
              <span className="text-black dark:text-white font-semibold">
                ChatApp
              </span>
              ,{" "}
              <span className="text-black dark:text-white font-semibold">
                SudokuSolver
              </span>{" "}
              and a{" "}
              <span className="text-black dark:text-white font-semibold">
                PortFolio
              </span>
              . I am a{" "}
              <span className="text-black dark:text-white font-semibold">
                6 Star
              </span>{" "}
              Coder at{" "}
              <span className="text-black dark:text-white font-semibold">
                HackerRank
              </span>{" "}
              and rated, maximum Rating{" "}
              <span className="text-black dark:text-white font-semibold">
                1758
              </span>{" "}
              on{" "}
              <span className="text-black dark:text-white font-semibold">
                Leetcode
              </span>
              . With over{" "}
              <span className="text-black dark:text-white font-bold">
                1800+
              </span>{" "}
              problems solved on{" "}
              <span className="text-black dark:text-white font-semibold">GFG</span>,{" "}
              <span className="text-black dark:text-white font-semibold">
                Leetcode
              </span>
              , and{" "}
              <span className="text-black dark:text-white font-semibold">
                HackerRank
              </span>
              , I am dedicated to{" "}
              <span className="text-black dark:text-white font-semibold">
                full-stack web development
              </span>{" "}
              with a strong focus on{" "}
              <span className="text-black dark:text-white font-semibold">
                backend
              </span>{" "}
              technologies and{" "}
              <span className="text-black dark:text-white font-semibold">
                DSA
              </span>
              , making me an ideal candidate for Software Development roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
