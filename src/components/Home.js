import React from "react";
import ProfilePic from "../assets/Profile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gray-100 dark:bg-gray-900 -colors"
    >
      <div className="py-4 lg:py-12">
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
          {/* Text Section */}
          <div className="flex flex-col justify-center h-full lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Hi there !
              <span className="block text-blue-600 dark:text-blue-400">
                I'm Pulkit Gaur
              </span>
              <span className="block text-transparent bg-gradient-to-r from-red-500 to-blue-700 bg-clip-text">
                Full Stack Web Developer
              </span>
            </h1>

            <p className="text-gray-700 dark:text-gray-300 py-4 max-w-medium italic tracking-wide text-lg">
              I have a 2 years of experience in building and designing Wonderful
              Websites. Currently, I love to work on web applications using
              technologies like React Js, Tailwind CSS, Node Js, Express Js and
              MongoDB.
            </p>

            <div>
              <a
                href="/resume.pdf"
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold"
                download={true}
                target="_blank"
                rel="noreferrer"
              >
                View Resume
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div>
              <img
                src={ProfilePic}
                alt="My profile"
                className="mx-auto w-full md:w-2/3 mb-4 p-1 bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-600 shadow-lg shadow-blue-400 dark:shadow-purple-500 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
