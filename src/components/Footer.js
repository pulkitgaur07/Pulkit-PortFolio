import React from 'react'
import {FaGithub, FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-20 bg-gray-100 flex justify-center shadow-lg shadow-black'>
      <div className='flex justify-between items-center p-4'>
        <a href='https://www.linkedin.com/in/pulkitgaur07/'target='_linkedin' ><FaLinkedin className="mx-4" size={30} /></a>
        <a href='https://github.com/pulkitgaur07' target='_github'><FaGithub className="mx-4" size={30} /></a>
        <a href='https://github.com/pulkitgaur07' target='_github'><FaFacebook className="mx-4" size={30} /></a>
        <a href='https://github.com/pulkitgaur07' target='_github'><FaInstagram className="mx-4" size={30} /></a>
      </div>
    </div>
  )
}

export default Footer
