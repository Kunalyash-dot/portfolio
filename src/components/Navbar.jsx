import React from 'react'
import logo from '../assets/logo9.jpg'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import resume from '../assets/resume1.pdf'

function Navbar() {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10 '  src={logo} alt="logo" />
        </div>
        <div className="flex gap-4 text-2xl m-8 items-center justify-center">
           <a
        href="https://www.linkedin.com/in/kunal-kumar-1a4054295"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin  />
      </a>
      
      <a
        href="https://github.com/Kunalyash-dot"
        target="_blank"
        rel="noopener noreferrer"
      >
         <FaSquareGithub />
         </a
      >
           <a href={resume}
  download
  target="_blank"
  rel="noopener noreferrer"><FaDownload  /></a>
            
        </div>
      
    </nav>
  )
}

export default Navbar
