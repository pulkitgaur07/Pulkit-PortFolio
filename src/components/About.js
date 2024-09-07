import React from 'react'
import Image from "../assets/Image.jpg";

const About = () => {
  return (
    <div name="about" className='w-full bg-gray-100'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full '>
      <div className='flex justify-center'>
      <p className='text-4xl font-bold inline text-center mb-4 border-b-4 border-gray-500 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>About Me</p>
      </div>
        <div className='max-w-screen-lg flex flex-col md:flex-row'>
        <div className="hidden lg:flex lg:w-1/2 lg:justify-center lg:items-center"> 
            <div className="rounded-full">
              <img
                src={Image}
                alt="My profile"
                className="mx-auto w-1/3 md:w-2/3 mb-4 p-1 bg-white border border-gray-400 shadow-lg shadow-blue-400 rounded-full"
              />
            </div>
          </div>
          <div className='lg:w-1/2 flex items-center'>
          <p className='text-md italic text-gray-700 tracking-wide'><span className='text-black text-4xl'>I</span><span className='text-black font-bold'>'m</span> a <span className='text-black font-semibold'>CSE</span> graduate from IERT, a solid foundation in both frontend and backend development. Proficient in <span className='text-black font-semibold'>C++</span>, <span className='text-black font-semibold'>Javascript</span>, <span className='text-black font-semibold'>React js</span>, <span className='text-black font-semibold'></span><span className='text-black font-semibold'>Node js</span>, and <span className='text-black font-semibold'>Mongo DB</span>, I have developed multiple awesome projects such as a SilverSpoons and a Portfolio. I am a <span className='text-black font-semibold'>6 Star</span> Coder at <span className='text-black font-semibold'>HackerRank</span> and Rated, maximum Rating <span className='text-black font-semibold'>1758</span> on <span className='text-black font-semibold'>Leetcode</span>. With over <span className='text-black font-bold'>1500+</span> problems solved on <span className='text-black font-semibold'>GFG</span>, <span className='text-black font-semibold'>Leetcode</span>, and <span className='text-black font-semibold'>HackerRank</span>, I am dedicated to <span className='text-black font-semibold'>full-stack web development</span> with a strong focus on <span className='text-black font-semibold'>backend</span> technologies and <span className='text-black font-semibold'>DSA</span>, making me an ideal candidate for Software Development roles.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
