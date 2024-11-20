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
const FadeEffect = () => {
    
    return (
        <div>FadeEffect</div>
    )
}

export default FadeEffect