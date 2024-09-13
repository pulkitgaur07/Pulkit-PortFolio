import React from "react";
import SilverSpoons from "../assets/SilverSpoons.jpg";
import portfolio from "../assets/port.jpg";
import sudokuSolver from "../assets/sudokuSolver.jpg";

const Projects = () => {

    const projects = [
        {
            id : 1,
            src : SilverSpoons,
        },
        {
            id : 2,
            src : portfolio,
        },
        {
            id : 3,
            src : sudokuSolver
        },
        {
            id : 4,
            src : SilverSpoons
        },
        {
            id : 5,
            src : SilverSpoons
        },
        {
            id : 6,
            src : SilverSpoons
        }
    ]

  return (
    <div name="projects" className="bg-gray-100">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="">
          <div className="flex justify-center">
          <p className="text-4xl font-bold inline border-b-4 p-1 border-gray-500 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-8">Projects</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0">
        {projects.map(({id,src,title})=>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 p-2">
            <div className="p-1 h-48 rounded-lg bg-[image:var(--image-url)] bg-no-repeat bg-center bg-cover" style={{ "--image-url": `url(${src})`}}>
            </div>
            <div>{title}</div>
            <div className="flex items-center space-x-4 py-2">
              <a href="https://silverspoons.onrender.com/" target="_blank" rel="noopener noreferrer" class="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>Live</a>
              <a href="https://silverspoons.onrender.com/" target="_blank" rel="noopener noreferrer" class="flex items-center bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
