"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'


const Photo = () => {
    return (
        <div className="w-full h-full relative"> {
            <motion.div
                initial={{opacity:0}}
                animate={{
                    opacity:1,
                    transition: {delay:2,
                        duration:0.4,
                        ease: "easeIn"},
                        
                }}
            >
                <motion.div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute'>
                    {/* you need absolute to keep everything up */}
                    <Image src="/assets/Image_Editor.png"
                    priority
                    quality={100}
                    fill
                    alt=""
                    className="object-contain rounded-full"
                    />
                </motion.div>
                {/* circle effect */}
                <motion.svg 
                    className="w-[300px] xl:w-[506px]"
                    fill="transparent"
                    viewBox="3 3 506 506"
                    xmlns ="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#02faf6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{strokeDasharray: "24 10 10 10"}}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate:[120,360],
                    }}
                    transition={{
                        duration:20,
                        repeat:Infinity,
                    }}
                    />
                </motion.svg>
            </motion.div>
        }
        </div>
    )
}

export default Photo