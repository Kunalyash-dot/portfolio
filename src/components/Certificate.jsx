import React from 'react'
import { CERTIFICATES } from '../constants/index.js'
import { motion } from "motion/react"

function Certificate() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:1.5}} className='my-20 text-center text-4xl'>Professional Certificates</motion.h2>
        <div>
            {CERTIFICATES.map((certificate,index)=>(
                
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{opacity:1,x:0}} 
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className='w-full lg:w-1/4'>

                    <motion.img whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }} src={certificate.image} width={250} height={250} alt={certificate.title} className='mb-6 rounded ' />
                    </motion.div>
                    <motion.div whileInView={{opacity:1,x:0}} 
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{certificate.title}</h6>
                    <p className='mb-4 text-neutral-400'>{certificate.description}</p>
                    {certificate.skills.map((skill,index)=>(
                        <span key={index} className='mr-2 rounded text-white bg-green-900 p-1 text-sm font-medium'>{skill}</span>
                    ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Certificate
