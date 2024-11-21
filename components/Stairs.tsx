import React from 'react'
import {motion } from  "framer-motion";

const stairAnimations = {
    initial: {
        top:"0%",
        
    },
    animate: {
        top: "100%",
    },
    exit:{
        top:["100%", "0%"],

    },
};

const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}
const Stairs = () => {
    
    return (
        <div>
            {[...Array(6)].map((_, index) => {

                return (
                    <motion.div 
                    key={index} 
                    variants={stairAnimations} 
                    initial="initial" 
                    animate="animate" 
                    exit="exit" 
                    transition={{
                        duration: 0.4, 
                        ease: 'easeInOut', 
                        delay: reverseIndex(index) * 0.1,

                    }}
                    className="h-full w-full bg-white relative" />
                )
            })}

        </div>
    );
}

export default Stairs