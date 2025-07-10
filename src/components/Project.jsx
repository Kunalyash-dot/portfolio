import React from 'react'
import { PROJECTS } from '../constants/index.js'
import { motion } from "motion/react"
import { FiExternalLink } from "react-icons/fi";

function Project() {
   
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:2}} className='my-20 text-center text-4xl'>Project</motion.h2>
        <div>
            {PROJECTS.map((project,index)=>(
                
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{opacity:1,x:0}} 
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1.5}}
                    className='w-full lg:w-1/4 '>

                    <motion.img whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }} src={project.image} width={250} height={250} alt={project.title} className='mb-7 rounded ' />
                    </motion.div>
                    <motion.div whileInView={{opacity:1,x:0}} 
                    initial={{opacity:0,x:100}}
                    transition={{duration:1.5}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-2 text-neutral-400'>{project.description}</p>
                   <p className='mb-2 text-neutral-400 flex gap-4'><a href={project.git}  target="_blank"  className="border border-indigo-400 text-indigo-300 px-3 py-1 rounded-md hover:bg-indigo-500 hover:text-white transition"
        rel="noopener noreferrer">GitHub</a><a href={project.live}  target="_blank"
        rel="noopener noreferrer" className="border border-pink-400 text-pink-300 px-3 py-1 rounded-md hover:bg-pink-500 hover:text-white transition">Live </a></p> 
                    {project.technologies.map((tech,index)=>(
                        <span key={index} className='mr-2 rounded text-white bg-green-900 p-1 text-sm font-medium'>{tech}</span>
                    ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Project
