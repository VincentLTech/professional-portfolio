"use client"
import React, {useState} from 'react'
import Image from 'next/image'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight,BsGithub } from 'react-icons/bs';
import {Tooltip, TooltipContent, TooltipProvider} from "@/components/ui/tooltip";
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns';

// const BCCCs = require('../../public/assets/work/BCCC.png')

const projects= [
    {
        num:"01",
        category: "frontend",
        title:"Brooklyn College Esports Website",
        description:
            "Built and designed a website for Brooklyn College Esports and Gaming Club to attract more people at the campus and make registering for membership and competition easier.",
        stack: [{name: "HTML 5"}, {name: "CSS 3"},{name:"JavaScript"},{name:"React.js"}],
        image: '/assets/work/Esports.png',
        live: "https://cunybcesports.onrender.com/",
        github: "https://github.com/VincentLTech/Deploy-React-Esports-Site",
        //https://github.com/danielcodes/church_site_v1
        
    },
    {
        num:"02",
        category: "frontend",
        title:"BCCC Website",
        description:
            "Renovated and developed a community church website to advertise and welcomes people to the featured church.",
        stack: [{name: "HTML 5"}, {name: "CSS 3"},{name:"JavaScript"},{name:"React.js"}],
        image: '/assets/work/BCCC.png',
        live: "http://bccc-ny.org/",
        github: "https://github.com/VincentLTech/bccc",
        //https://github.com/danielcodes/church_site_v1
    },
    {
        num:"03",
        category: "Full Stack",
        title:"TrustFundRegistry",
        description:
            "Implemented a website by first creating wireframes though Figma and incorporated a new maintainable code for the company’s website through the use of over 6 Python models.",
        stack: [{name: "Python"}, {name: "Flask"},{name:"Figma"},{name:"WordPress"}],
        image: '/assets/work/TrustFund.png',
        live: "https://trustfundregistry.com/",
        github: "https://github.com/MyTrustFundBaby",
    },
    {
        num:"04",
        category: "Full Stack",
        title:"OmniEvents",
        description:
            "Developed a full-stack web application that registers accounts and create events for other to join",
        stack: [{name: "MongoDB"}, {name: "TailwindCSS"},{name:"TypeScript"},{name:"Next.js"}],
        image: '/assets/work/OmniEvents.png',
        live: "https://github.com/chingu-voyages/v47-tier3-team-33",
        github: "https://omni-events.vercel.app/",
    },
    {
        num:"05",
        category: "Full Stack",
        title:"MunchiesRev",
        description:
            "A yelp-inspired restaurant review app that allows users to view, post, and share reviews on restaurants.",
        stack: [{name: "HTML 5"}, {name: "CSS 3"},{name:"JavaScript"}],
        image: '/assets/work/muchiesrev.png',
        live: "http://18.224.16.169/",
        github: "https://github.com/DannyIGuesss/MunchiesRev-Group-Project",
    },
    {
        num:"06",
        category: "Full Stack",
        title:"Care Giver Website",
        description:
            "CareCollab is an application designed to help caregivers coordinate care for sick or injured loved ones. Caregivers who have created a care group can add, edit, and delete support requests for their loved ones. Users who have joined a care group as support providers can view and sign up for support requests.",
        stack: [{name: "HTML 5"}, {name: "CSS 3"},{name:"JavaScript"}],
        image: '/assets/work/CareGiver.png',
        live: "https://caregiver-app.onrender.com/",
        github: "https://github.com/chingu-voyages/v45-tier3-team-48",
    },
    {
        num:"07",
        category: "Full Stack",
        title:"Project Club",
        description:
            "Recipe sharing application",
        stack: [{name: "Python"}, {name: "Flask"},{name:"MySQL"},{name:"Bootstrap"}],
        image: '/assets/work/Project Club.png',
        live: "",
        github: "https://github.com/VincentLTech/Recipe",
    },
    {
        num:"08",
        category: "Full Stack",
        title:"Portfolio Website 1",
        description:
            "My first portfolio website",
        stack: [{name: "JavaScript"}, {name: "React.js"},{name:"MongoDB"},{name:"Mongoose"}],
        image: '/assets/work/Portfolio1.png',
        live: "https://vifiles.onrender.com/",
        github: "https://github.com/VincentLTech/Vifiles1",
    },
    {
        num:"09",
        category: "frontend",
        title:"Portfolio Website 2",
        description:
            "My second portfolio website using ActernityUI and Next.js to animate it",
        stack: [{name: "Next.js"}, {name: "AceternityUI"},{name:"TypeScript"}],
        image: '/assets/work/Portfolio2.png',
        live: "",
        github: "https://github.com/VincentLTech/vincentportfolioace",
    },
    {
        num:"10",
        category: "frontend",
        title:"Portfolio Website 3",
        description:
            "My professional portfolio website",
        stack: [{name: "Next.js"}, {name: "Framer Motion"},{name:"TypeScript"}],
        image: '/assets/work/Portfolio3.png',
        live: "",
        github: "https://github.com/VincentLTech/Recipe",
    },

]
const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) =>{
        //get current slide index

        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex])
    }
    return (
        <motion.section 
            initial={{opacity:0}} 
            animate={{opacity:1 }} 
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[45%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px]'//you need this to create the spacing above and below(kinda like <br/>)
                        >
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'//makes the 01 bigger, transparent, and outlined
                            >
                                {project.num}
                            </div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'//makes it bigger, bold, adds a 1px <br/>, white, blue when hovered, transforms in a time, and capitalized
                            >
                                {project.category}
                            </h2>
                            <p className='text-white/60'//changes text color
                            >
                                {project.description}
                            </p>
                            <ul className='flex gap-4'//removes the nextLine feature and makes them all 4 px gapped from each other 
                            >
                                {project.stack.map((item, index)=>{
                                    return (
                                        <li key={index} className='text-xl text-accent'>
                                            {item.name}
                                            {/* this adds commas except at the end*/}
                                            {index !== project.stack.length -1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className='border border-white/20'//creates a gray line
                            />
                            <div className='flex gap-6 items-center'//keeps the pointer and github button aligned and 6px gapped
                            >
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[55%]'
                    >
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index)=>{
                                return (
                                    <SwiperSlide key={index} className='w-full'>
                                        <div className='h-[360px] relative group flex justify-center items-center bg-pink-50/20'>
                                            <div></div>
                                            <div className='relative w-full h-full'>
                                                <Image src={project.image} fill className="object-cover" alt="" />
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                );
                            })}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work