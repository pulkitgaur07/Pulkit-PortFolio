import React from "react";
import codingTime from "../assets/portfolios/codingTime.jpg";
import leetcode from "../assets/portfolios/leetcode.png";
import gfg from "../assets/portfolios/gfg.png";
import codingNinja from "../assets/portfolios/codingNinja.jpg";
import codechef from "../assets/portfolios/codechef.jpg";
import hackerrank from "../assets/portfolios/hackerrank.png";

const Coding = () => {
  const coding = [
    {
      id: 1,
      src: leetcode,
      link : 'https://leetcode.com/u/pulkitgaur07/',
      title: "Leetcode",
      rating: "Max Rating : 1758",
      description: "Solved 800+ Problems with a Streak of 500+ Days.",
      style: "shadow-yellow-600",
    },
    {
      id: 2,
      src: gfg,
      link : 'https://www.geeksforgeeks.org/user/stranger_99/',
      title: "GeeksForGeeks",
      rating: "Coding Score : 2275",
      description: "Solved 650+ Problems with a Streak of 350+ Days.",
      style: "shadow-green-600",
    },
    {
      id: 3,
      src: hackerrank,
      link : 'https://www.hackerrank.com/profile/Pulkitgaur9450',
      title: "HackerRank",
      rating: "6 star in Problem Solving",
      description: "5 star in C++",
      style: "shadow-purple-600",
    },
    {
      id: 4,
      src: codingNinja,
      link : 'https://www.naukri.com/code360/profile/pulkitgaur',
      title: "Coding Ninja",
      rating: "Max Rating : 2280",
      description: "Solved 200+ Problems",
      style: "shadow-orange-600",
    },
    {
      id: 5,
      src: codechef,
      link : 'https://www.codechef.com/users/stranger_99',
      title: "CodeChef",
      rating: "3 Star",
      description: "Max Rating : 1608",
      style: "shadow-gray-600",
    },
  ];
  return (
    <div name="coding profile" className="w-full bg-gray-100">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col w-full">
        <div className="flex justify-center">
          <p className="text-4xl font-bold inline text-center mb-4 p-1 border-b-4 border-gray-500 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Coding Profiles
          </p>
        </div>
        <div className="max-w-screen-lg flex flex-col-reverse md:flex-row my-4">
          <div className="lg:w-1/2 p-2 flex flex-col gap-2 my-auto">
            {coding.map(({ id, src, title, rating, description, style, link }) => (
              <div
                key={id}
                className={`w-full shadow-md rounded-md flex items-center hover:scale-105 duration-500 p-1 pr-4 ${style}`}
              >
                <img
                  src={src}
                  alt=""
                  className="h-14 ml-2 mr-4 rounded-md shadow-md hover:scale-105 duration-200"
                />
                <div className="p-1 w-full rounded-md">
                    <h2 class="text-lg font-bold">{title}</h2>
                    <p class="text-xs text-gray-600">{rating}</p>
                    <p class="text-xs text-gray-600">{description}</p>
                    <p class="text-xs italic text-gray-600">{}</p>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" class="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>Link</a>
              </div>
            ))}
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <img
              src={codingTime}
              alt="My profile"
              className="mx-auto mb-4 p-1 bg-white border border-gray-400 shadow-lg shadow-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
