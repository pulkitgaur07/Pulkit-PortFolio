import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-16 bg-gray-100 dark:bg-gray-900 flex justify-center items-center shadow-lg shadow-black">
      <div className="flex justify-between items-center p-4">
        <a
          href="https://www.linkedin.com/in/pulkitgaur07/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-yellow-400 hover:text-blue-500 dark:hover:text-yellow-300"
        >
          <FaLinkedin className="mx-4" size={30} />
        </a>
        <a
          href="https://github.com/pulkitgaur07"
          target="_blank"
          rel="noreferrer"
          className="text-gray-800 dark:text-yellow-400 hover:text-gray-600 dark:hover:text-yellow-300"
        >
          <FaGithub className="mx-4" size={30} />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 dark:text-yellow-400 hover:text-blue-500 dark:hover:text-yellow-300"
        >
          <FaFacebook className="mx-4" size={30} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="text-pink-500 dark:text-yellow-400 hover:text-pink-400 dark:hover:text-yellow-300"
        >
          <FaInstagram className="mx-4" size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
