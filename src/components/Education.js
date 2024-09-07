import React from "react";
import iertlogo from "../assets/portfolios/iertlogo.jpg";
import spvpnb from "../assets/portfolios/SPVPNBahraich.png";

const Education = () => {
  const education = [
    {
      id: 1,
      src: iertlogo,
      college: "Institute of Engineering and Rural Technology, Prayagraj",
      course:
        "Bachelor of Technology - BTech, CSE",
      time: "Nov 2020 - Jul 2024",
      date: "Grade: First Class",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: spvpnb,
      college: "Sant Pathik Vidyalaya Pashupati Nagar, Bahraich",
      course:
        "Higher Secondary, CBSE",
      time: "Apr 2015 - Mar 2016",
      date: "Grade: 74.4%",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: spvpnb,
      college: "Sant Pathik Vidyalaya Pashupati Nagar, Bahraich",
      course:
        "High School, CBSE",
      time: "Apr 2017 - Mar 2018",
      date: "Grade: 10 CGPA",
      style: "shadow-yellow-500",
    },
  ];

  return (
    <div name="education" className="w-full bg-gray-100">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex justify-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-1 inline bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Education
          </p>
        </div>
        <div className="w-full py-8">
          {education.map(
            ({ id, src, college, course, time, date, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg my-4 flex items-center ${style}`}
              >
                <img src={src} alt="" className="h-24 w-24 ml-2 mr-4 rounded-md" />
                <div>
                  <h2 class="text-lg font-bold">{college}</h2>
                  <p class="text-xs text-gray-600">{course}</p>
                  <p class="text-xs text-gray-600">{time}</p>
                  <p class="text-xs italic text-gray-600">{date}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
