import React from 'react'
import aboutImg from '../assets/projects/project-5.jpeg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "motion/react"

function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
    <motion.h2 whileInView={{opacity:1,y:0}}
                    initial={{opacity:0,y:-100}}
                    transition={{duration:2}} className='my-20 text-center text-4xl'>About
        <span className='text-neutral-500'> Me</span>
    </motion.h2>
    <div className='flex flex-wrap'>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
         className='w-full lg:w-1/2 lg:p-8 '>
            <div className='flex items-center justify-center '>
                <img className='rounded-2xl' width="250" height="100" src={aboutImg} alt="" />
            </div>
            
            </motion.div>
            <motion.div 
             whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}} className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6' >{ABOUT_TEXT}</p>

                </div>
        </motion.div>

    </div>
    </div>
  )
}

export default About
