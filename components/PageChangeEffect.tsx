"use client";
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import React from 'react'

import FadeEffect from './FadeEffect';

const PageChangeEffect = () => {
    const pathname= usePathname();
    return (
        <AnimatePresence>
            <div key={pathname}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                    <FadeEffect/>
                </div>
            </div> 
        </AnimatePresence>
    )
}

export default PageChangeEffect