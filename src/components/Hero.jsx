import React from 'react';
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/pro.jpg'
import { motion } from "motion/react"
import { FaDownload } from "react-icons/fa6";
import resume from '../assets/resume1.pdf'


const container = (delay) =>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,opacity:1,transition:{duration:1,delay:delay}
    }

})

function Hero() {

   
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap '>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 
                        variants={container(0.5)}
                        initial='hidden'
                        animate='visible'
                        className='pb-6 md:pb-16 text-4xl  md:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>A Kunal Kumar</motion.h1>
                        <motion.span
                        variants={container(1)}
                        initial='hidden'
                        animate='visible' className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent flex'>
                           Full Stack Developer <span className='px-3 hidden lg:block' ><a  href={resume}
                              download
                              target="_blank"
                              rel="noopener noreferrer"><FaDownload className='text-white' /></a></span> 
                        </motion.span>
                        
                        <motion.p variants={container(1.5)}
                        initial='hidden'
                        animate='visible' className='my-2 max-w-xl py-6 font-light tracking-tighter  '>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <motion.div
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1.5,delay:1.4}}
                className='w-full lg:w-1/2 lg:p-8'>

                    <div className='flex justify-center'>
                        <img className='rounded-xl' src={profilePic} alt="profile-pic" />
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Hero
