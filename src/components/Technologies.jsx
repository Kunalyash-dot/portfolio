import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "motion/react"
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";


const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }

})


function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
        <motion.h2 whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}} className='my-20 text-center text-4xl '>Technologies</motion.h2>
        <div className='flex flex-wrap items-center justify-center'>

        
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-200}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4 lg:max-w-3xl '>
            <motion.div 
            variants={iconVariants(2)} 
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>

            <FaHtml5 className='text-7xl text-orange-500' />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)} 
            initial='initial'
            animate='animate'className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoCss3 className='text-7xl text-blue-600' />
            </motion.div>
            <motion.div 
            variants={iconVariants(2)} 
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>

            <FaJsSquare className='text-7xl text-yellow-400' />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)} 
            initial='initial'
            animate='animate'className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaReact className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div variants={iconVariants(2)} 
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandRedux className='text-7xl text-purple-500' />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)} 
            initial='initial'
            animate='animate'className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiTailwindCssFill className='text-7xl text-sky-400' />
            </motion.div>
            <motion.div variants={iconVariants(2)} 
            initial='initial'
            animate='animate'
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-green-600' />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)} 
            initial='initial'
            animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-emerald-600' />
            </motion.div>
            <motion.div variants={iconVariants(2)} 
            initial='initial'
            animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGithub className='text-7xl text-gray-200' />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)} 
            initial='initial'
            animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaPython className='text-7xl text-blue-500' />
            </motion.div>
            <motion.div variants={iconVariants(2)} 
            initial='initial'
            animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoPostgresql className='text-7xl text-indigo-600' />
            </motion.div>
        </motion.div>
        </div>

      
     </div>
  )
}

export default Technologies
