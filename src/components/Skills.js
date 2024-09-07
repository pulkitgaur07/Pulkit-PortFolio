import React from "react";
import html from "../assets/portfolios/html.png";
import css from "../assets/portfolios/css.png";
import react from "../assets/portfolios/react.png";
import javascript from "../assets/portfolios/java.jpg";
import nodejs from "../assets/portfolios/nodejs.png";
import expressjs from "../assets/portfolios/expressjs.png";
import tailwindcss from "../assets/portfolios/tailwindcss.png";
import github from "../assets/portfolios/github.png";
import mongodb from "../assets/portfolios/mongodb.png";
import cpp from "../assets/portfolios/cpp.png";
import c from "../assets/portfolios/c.png";
import python from "../assets/portfolios/python.png";

const Skills = () => {

    const tecks = [
        {
            id : 1,
            src : html,
            title : 'HTML',
            style : 'shadow-orange-500'
        },
        {
            id : 2,
            src : css,
            title : 'CSS',
            style : 'shadow-blue-500'
          },
          {
              id : 3,
              src : javascript,
              title : 'Javascript',
              style : 'shadow-yellow-500'
          },
        {
            id : 4,
            src : react,
            title : 'React Js',
            style : 'shadow-blue-500'
        },
        {
          id : 5,
          src : expressjs,
          title : 'Express Js',
          style : 'shadow-yellow-500'
        },
        {
            id : 6,
            src : nodejs,
            title : 'Node Js',
            style : 'shadow-green-500'
        },
        {
            id : 7,
            src : mongodb,
            title : 'Mongo DB',
            style : 'shadow-green-500'
        },
        {
            id : 8,
            src : github,
            title : 'Github',
            style : 'shadow-gray-500'
        },
        {
            id : 9,
            src : tailwindcss,
            title : 'Tailwind CSS',
            style : 'shadow-sky-500'
        },
        {
          id : 10,
          src : cpp,
          title : 'C++',
          style : 'shadow-yellow-500'
        },
        {
          id : 11,
          src : c,
          title : 'C',
          style : 'shadow-blue-500'
        },
        {
          id : 12,
          src : python,
          title : 'python',
          style : 'shadow-yellow-500'
        }
    ]

  return (
    <div
      name="skills"
      className="w-full bg-gray-100"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex justify-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-1 inline bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
            {tecks.map(({id,title,src,style})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4 font-bold text-lg">{title}</p>
              </div>
            ))}
      </div>
      </div>
    </div>
  );
};

export default Skills;
